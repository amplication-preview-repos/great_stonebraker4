import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["client", "dog", "booking", "review", "dogsitter", "user"],
    protoPath: [
      "src/client/client.proto",
      "src/dog/dog.proto",
      "src/booking/booking.proto",
      "src/review/review.proto",
      "src/dogsitter/dogsitter.proto",
      "src/user/user.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
