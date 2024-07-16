import { Client } from "../client/Client";
import { Dog } from "../dog/Dog";
import { DogSitter } from "../dogSitter/DogSitter";

export type Booking = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startTime: Date | null;
  endTime: Date | null;
  client?: Client | null;
  dog?: Dog | null;
  dogSitter?: DogSitter | null;
};
