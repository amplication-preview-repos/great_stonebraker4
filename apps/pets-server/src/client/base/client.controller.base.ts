/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ClientService } from "../client.service";
import { ClientCreateInput } from "./ClientCreateInput";
import { Client } from "./Client";
import { ClientFindManyArgs } from "./ClientFindManyArgs";
import { ClientWhereUniqueInput } from "./ClientWhereUniqueInput";
import { ClientUpdateInput } from "./ClientUpdateInput";
import { BookingFindManyArgs } from "../../booking/base/BookingFindManyArgs";
import { Booking } from "../../booking/base/Booking";
import { BookingWhereUniqueInput } from "../../booking/base/BookingWhereUniqueInput";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { ReviewWhereUniqueInput } from "../../review/base/ReviewWhereUniqueInput";
import { DogFindManyArgs } from "../../dog/base/DogFindManyArgs";
import { Dog } from "../../dog/base/Dog";
import { DogWhereUniqueInput } from "../../dog/base/DogWhereUniqueInput";

export class ClientControllerBase {
  constructor(protected readonly service: ClientService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Client })
  async createClient(@common.Body() data: ClientCreateInput): Promise<Client> {
    return await this.service.createClient({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,
        phoneNumber: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Client] })
  @ApiNestedQuery(ClientFindManyArgs)
  async clients(@common.Req() request: Request): Promise<Client[]> {
    const args = plainToClass(ClientFindManyArgs, request.query);
    return this.service.clients({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,
        phoneNumber: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Client })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async client(
    @common.Param() params: ClientWhereUniqueInput
  ): Promise<Client | null> {
    const result = await this.service.client({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,
        phoneNumber: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Client })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateClient(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() data: ClientUpdateInput
  ): Promise<Client | null> {
    try {
      return await this.service.updateClient({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          email: true,
          phoneNumber: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Client })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteClient(
    @common.Param() params: ClientWhereUniqueInput
  ): Promise<Client | null> {
    try {
      return await this.service.deleteClient({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          email: true,
          phoneNumber: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/bookings")
  @ApiNestedQuery(BookingFindManyArgs)
  async findBookings(
    @common.Req() request: Request,
    @common.Param() params: ClientWhereUniqueInput
  ): Promise<Booking[]> {
    const query = plainToClass(BookingFindManyArgs, request.query);
    const results = await this.service.findBookings(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        startTime: true,
        endTime: true,

        client: {
          select: {
            id: true,
          },
        },

        dog: {
          select: {
            id: true,
          },
        },

        dogSitter: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/bookings")
  async connectBookings(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        connect: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/bookings")
  async updateBookings(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        set: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/bookings")
  async disconnectBookings(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        disconnect: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/reviews")
  @ApiNestedQuery(ReviewFindManyArgs)
  async findReviews(
    @common.Req() request: Request,
    @common.Param() params: ClientWhereUniqueInput
  ): Promise<Review[]> {
    const query = plainToClass(ReviewFindManyArgs, request.query);
    const results = await this.service.findReviews(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        rating: true,
        comment: true,

        client: {
          select: {
            id: true,
          },
        },

        dogSitter: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/reviews")
  async connectReviews(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        connect: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reviews")
  async updateReviews(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        set: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reviews")
  async disconnectReviews(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        disconnect: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/dogs")
  @ApiNestedQuery(DogFindManyArgs)
  async findDogs(
    @common.Req() request: Request,
    @common.Param() params: ClientWhereUniqueInput
  ): Promise<Dog[]> {
    const query = plainToClass(DogFindManyArgs, request.query);
    const results = await this.service.findDogs(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        breed: true,
        age: true,

        client: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/dogs")
  async connectDogs(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: DogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dogs: {
        connect: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/dogs")
  async updateDogs(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: DogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dogs: {
        set: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/dogs")
  async disconnectDogs(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: DogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dogs: {
        disconnect: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }
}