import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClientService } from "./client.service";
import { ClientGrpcControllerBase } from "./base/client.grpc.controller.base";

@swagger.ApiTags("clients")
@common.Controller("clients")
export class ClientGrpcController extends ClientGrpcControllerBase {
  constructor(protected readonly service: ClientService) {
    super(service);
  }
}
