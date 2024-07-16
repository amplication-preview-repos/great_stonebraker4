import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DogSitterService } from "./dogSitter.service";
import { DogSitterControllerBase } from "./base/dogSitter.controller.base";

@swagger.ApiTags("dogSitters")
@common.Controller("dogSitters")
export class DogSitterController extends DogSitterControllerBase {
  constructor(protected readonly service: DogSitterService) {
    super(service);
  }
}
