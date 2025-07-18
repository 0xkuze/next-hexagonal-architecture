import type { People } from "../../domain/People";
import type { PeopleRepository } from "./../../domain/PeopleRepository";

export function createPeople(
  peopleRepository: PeopleRepository,
  people: People
): void {
  // ensurePeopleIsValid(people);

  peopleRepository.save(people);
}
