import { v4 as uuidv4 } from "uuid";
import type { People } from "../domain/People";
import type { PeopleRepository } from "../domain/PeopleRepository";

export class InMemoryPeopleRepository implements PeopleRepository {
  private store: Map<string, People> = new Map();

  save(people: People): void {
    const id = people.id || uuidv4();
    const peopleWithId: People = { ...people, id };
    this.store.set(id, peopleWithId);
  }

  get(id: string): People | null {
    return this.store.get(id) || null;
  }

  getAll(): People[] {
    return Array.from(this.store.values());
  }

  async getPeopleList(): Promise<People[]> {
    return Promise.resolve(this.getAll());
  }

  clear(): void {
    this.store.clear();
  }
}
