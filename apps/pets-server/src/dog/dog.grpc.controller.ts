import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DogService } from "./dog.service";
import { DogGrpcControllerBase } from "./base/dog.grpc.controller.base";

@swagger.ApiTags("dogs")
@common.Controller("dogs")
export class DogGrpcController extends DogGrpcControllerBase {
  constructor(protected readonly service: DogService) {
    super(service);
  }
}
