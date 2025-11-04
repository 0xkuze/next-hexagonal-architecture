import type { PeopleRepository } from "@/modules/welcome/domain/PeopleRepository";
import { InMemoryPeopleRepository } from "@/modules/welcome/infrastructure/InMemoryPeopleRepository";

declare global {
  var __peopleRepository: InMemoryPeopleRepository | undefined;
}

class Container {
  private getPeopleRepositoryInstance(): InMemoryPeopleRepository {
    if (!globalThis.__peopleRepository) {
      globalThis.__peopleRepository = new InMemoryPeopleRepository();
    }
    return globalThis.__peopleRepository;
  }

  getPeopleRepository(): PeopleRepository {
    return this.getPeopleRepositoryInstance();
  }

  resetForTesting(): void {
    const repo = this.getPeopleRepositoryInstance();
    repo.clear();
  }
}

export const container = new Container();
