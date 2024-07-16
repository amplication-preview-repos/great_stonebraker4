/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Dog as PrismaDog,
  Booking as PrismaBooking,
  Client as PrismaClient,
} from "@prisma/client";

export class DogServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DogCountArgs, "select">): Promise<number> {
    return this.prisma.dog.count(args);
  }

  async dogs(args: Prisma.DogFindManyArgs): Promise<PrismaDog[]> {
    return this.prisma.dog.findMany(args);
  }
  async dog(args: Prisma.DogFindUniqueArgs): Promise<PrismaDog | null> {
    return this.prisma.dog.findUnique(args);
  }
  async createDog(args: Prisma.DogCreateArgs): Promise<PrismaDog> {
    return this.prisma.dog.create(args);
  }
  async updateDog(args: Prisma.DogUpdateArgs): Promise<PrismaDog> {
    return this.prisma.dog.update(args);
  }
  async deleteDog(args: Prisma.DogDeleteArgs): Promise<PrismaDog> {
    return this.prisma.dog.delete(args);
  }

  async findBookings(
    parentId: string,
    args: Prisma.BookingFindManyArgs
  ): Promise<PrismaBooking[]> {
    return this.prisma.dog
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .bookings(args);
  }

  async getClient(parentId: string): Promise<PrismaClient | null> {
    return this.prisma.dog
      .findUnique({
        where: { id: parentId },
      })
      .client();
  }
}
