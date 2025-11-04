import type { People } from "@/modules/welcome/domain/People";

let peopleStore: People[] = [];

export function getAllPeopleFromStore(): People[] {
  return peopleStore;
}

export function addPersonToStore(person: People): People {
  peopleStore.push(person);
  return person;
}

export function resetStore() {
  peopleStore = [];
}
