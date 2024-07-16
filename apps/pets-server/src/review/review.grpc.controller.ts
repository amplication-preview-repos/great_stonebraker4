import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReviewService } from "./review.service";
import { ReviewGrpcControllerBase } from "./base/review.grpc.controller.base";

@swagger.ApiTags("reviews")
@common.Controller("reviews")
export class ReviewGrpcController extends ReviewGrpcControllerBase {
  constructor(protected readonly service: ReviewService) {
    super(service);
  }
}
