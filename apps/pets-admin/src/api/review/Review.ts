import { Client } from "../client/Client";
import { DogSitter } from "../dogSitter/DogSitter";

export type Review = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  rating: number | null;
  comment: string | null;
  client?: Client | null;
  dogSitter?: DogSitter | null;
};
