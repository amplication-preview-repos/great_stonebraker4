import * as graphql from "@nestjs/graphql";
import { DogResolverBase } from "./base/dog.resolver.base";
import { Dog } from "./base/Dog";
import { DogService } from "./dog.service";

@graphql.Resolver(() => Dog)
export class DogResolver extends DogResolverBase {
  constructor(protected readonly service: DogService) {
    super(service);
  }
}
