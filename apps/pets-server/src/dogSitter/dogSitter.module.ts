import { Module } from "@nestjs/common";
import { DogSitterModuleBase } from "./base/dogSitter.module.base";
import { DogSitterService } from "./dogSitter.service";
import { DogSitterController } from "./dogSitter.controller";
import { DogSitterResolver } from "./dogSitter.resolver";

@Module({
  imports: [DogSitterModuleBase],
  controllers: [DogSitterController],
  providers: [DogSitterService, DogSitterResolver],
  exports: [DogSitterService],
})
export class DogSitterModule {}
