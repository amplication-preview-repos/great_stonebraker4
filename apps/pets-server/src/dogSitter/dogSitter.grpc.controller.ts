import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DogSitterService } from "./dogSitter.service";
import { DogSitterGrpcControllerBase } from "./base/dogSitter.grpc.controller.base";

@swagger.ApiTags("dogSitters")
@common.Controller("dogSitters")
export class DogSitterGrpcController extends DogSitterGrpcControllerBase {
  constructor(protected readonly service: DogSitterService) {
    super(service);
  }
}
