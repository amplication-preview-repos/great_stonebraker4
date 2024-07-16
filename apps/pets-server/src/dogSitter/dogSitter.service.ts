import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DogSitterServiceBase } from "./base/dogSitter.service.base";

@Injectable()
export class DogSitterService extends DogSitterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
