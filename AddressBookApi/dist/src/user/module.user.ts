import { Module } from "@nestjs/common";
import {CahceModule} from "@nestjs/cache-manager"
@Module({
  imports: [
    CacheModule.register(),
  ],
})