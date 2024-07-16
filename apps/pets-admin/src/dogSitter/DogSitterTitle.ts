import { DogSitter as TDogSitter } from "../api/dogSitter/DogSitter";

export const DOGSITTER_TITLE_FIELD = "name";

export const DogSitterTitle = (record: TDogSitter): string => {
  return record.name?.toString() || String(record.id);
};
