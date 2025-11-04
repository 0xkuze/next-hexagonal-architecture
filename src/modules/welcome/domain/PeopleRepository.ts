import type { People } from "./People";

export interface PeopleRepository {
  save: (people: People) => void | Promise<void>;
  get: (id: string) => People | null | Promise<People | null>;
  getAll: () => People[] | Promise<People[]>;
  getPeopleList: () => Promise<People[]>;
}
