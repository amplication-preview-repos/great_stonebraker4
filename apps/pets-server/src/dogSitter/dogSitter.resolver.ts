import * as graphql from "@nestjs/graphql";
import { DogSitterResolverBase } from "./base/dogSitter.resolver.base";
import { DogSitter } from "./base/DogSitter";
import { DogSitterService } from "./dogSitter.service";

@graphql.Resolver(() => DogSitter)
export class DogSitterResolver extends DogSitterResolverBase {
  constructor(protected readonly service: DogSitterService) {
    super(service);
  }
}
