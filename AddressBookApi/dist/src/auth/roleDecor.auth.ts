import { SetMetadata } from '@nestjs/common';
import { Role } from './role.enum';

// This key is used to store metadata related to roles.
export const ROLES_KEY = 'roles';

// This uses the @SetMetadata decorator to
// associate metadata with a class
// or method. This metadata is stored as a
// key-value pair. The value is derived from
// the roles argument. This metadata is preserved
// and can be accessed by the role guard later
// for making access control decisions.
export const Roles = (...role: Role[]) => SetMetadata(ROLES_KEY, role);
