import { v4 as uuidv4 } from "uuid";
import type { People } from "../domain/People";
import type { PeopleRepository } from "../domain/PeopleRepository";

export function createLocalStoragePeopleRepository(): PeopleRepository {
  return {
    save,
    get,
    getAll,
    getPeopleList,
  };
}

async function getPeopleList() {
  const res = await fetch("/api/welcome");
  return res.json();
}

function save(people: People) {
  const peoples = getAllFromLocalStorage();
  const idAlt = (uuidv4 as () => string)();
  peoples.set(people.id ?? idAlt, people);
  localStorage.setItem(
    "peoples",
    JSON.stringify(Array.from(peoples.entries()))
  );
}

function get(id: string) {
  const peoples = getAllFromLocalStorage();
  const people = peoples.get(id);

  if (!people) {
    return null;
  }

  return people;
}

function getAll() {
  const peoples = getAllFromLocalStorage();

  return Array.from(peoples.values());
}

function getAllFromLocalStorage(): Map<string, People> {
  const peoples = localStorage.getItem("peoples");

  if (peoples === null) {
    return new Map();
  }

  const map = new Map(JSON.parse(peoples) as Iterable<[string, People]>);

  return map;
}
