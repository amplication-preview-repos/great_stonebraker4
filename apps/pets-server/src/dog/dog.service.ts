import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DogServiceBase } from "./base/dog.service.base";

@Injectable()
export class DogService extends DogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
