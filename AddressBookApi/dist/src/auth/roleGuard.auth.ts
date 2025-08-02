import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RoleEntity } from 'src/user/Role.Entity';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  //   define a matchRoles helper method that checks if any
  // specified roles match the user’s roles. It returns
  // true if at least one role matches.
  matchRoles(roles: string[], userRoles: RoleEntity[]) {
    return roles?.some((role) =>
      userRoles.find((x) => x.name.toLowerCase() === role.toLowerCase()),
    );
  }

  //   implement the canActivate interface method.
  // This method is called to determine if a route can be activated.
  canActivate(context: ExecutionContext): boolean {
    // This retrieves roles associated with the specific handler
    // and class, then combines them and assigns them to a roles
    // constant. If no roles are specified, we return true,
    // which means access is granted.
    const handlerRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    // retrieves the HTTP request from the context and
    // the user object from the request. Then, we check
    // whether the user’s role matches the specified roles.
    const classRoles = this.reflector.get<string[]>(
      'roles',
      context.getClass(),
    );
    const roles = (handlerRoles ?? []).concat(classRoles ?? []);
    if (roles.length === 0) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return this.matchRoles(roles, user.roles);
  }
}
