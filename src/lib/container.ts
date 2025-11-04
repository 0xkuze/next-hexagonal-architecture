import type { PeopleRepository } from "@/modules/welcome/domain/PeopleRepository";
import { InMemoryPeopleRepository } from "@/modules/welcome/infrastructure/InMemoryPeopleRepository";

class Container {
  private static instance: Container;
  private repositories: Map<string, unknown> = new Map();

  private constructor() {
    this.registerRepositories();
  }

  static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container();
    }
    return Container.instance;
  }

  private registerRepositories(): void {
    this.repositories.set("PeopleRepository", new InMemoryPeopleRepository());
  }

  getPeopleRepository(): PeopleRepository {
    return this.repositories.get("PeopleRepository") as PeopleRepository;
  }

  resetForTesting(): void {
    const repo = this.getPeopleRepository() as InMemoryPeopleRepository;
    repo.clear();
  }
}

export const container = Container.getInstance();
