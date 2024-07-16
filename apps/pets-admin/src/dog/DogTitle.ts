import { Dog as TDog } from "../api/dog/Dog";

export const DOG_TITLE_FIELD = "name";

export const DogTitle = (record: TDog): string => {
  return record.name?.toString() || String(record.id);
};
