import type { People } from "../domain/People";
import type { PeopleRepository } from "../domain/PeopleRepository";

export function createLocalStoragePeopleRepository(): PeopleRepository {
  return {
    save: async (people: People) => {
      await fetch("/api/welcome", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(people),
      });
    },
    get: async (_id: string) => {
      return null;
    },
    getAll: () => {
      return [];
    },
    getPeopleList: async () => {
      const res = await fetch("/api/welcome");
      return res.json();
    },
  };
}
