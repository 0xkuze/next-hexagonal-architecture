import type { People } from "./../../domain/People";
import type { PeopleRepository } from "./../../domain/PeopleRepository";

export function getAllPeople(peopleRepository: PeopleRepository): People[] {
  return peopleRepository.getAll();
}
