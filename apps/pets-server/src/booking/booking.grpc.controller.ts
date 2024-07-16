import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BookingService } from "./booking.service";
import { BookingGrpcControllerBase } from "./base/booking.grpc.controller.base";

@swagger.ApiTags("bookings")
@common.Controller("bookings")
export class BookingGrpcController extends BookingGrpcControllerBase {
  constructor(protected readonly service: BookingService) {
    super(service);
  }
}
