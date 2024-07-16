import { Module } from "@nestjs/common";
import { DogModuleBase } from "./base/dog.module.base";
import { DogService } from "./dog.service";
import { DogController } from "./dog.controller";
import { DogResolver } from "./dog.resolver";

@Module({
  imports: [DogModuleBase],
  controllers: [DogController],
  providers: [DogService, DogResolver],
  exports: [DogService],
})
export class DogModule {}
