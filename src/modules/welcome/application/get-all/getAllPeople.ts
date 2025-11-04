import type { People } from "../../domain/People";
import type { PeopleRepository } from "../../domain/PeopleRepository";

export class GetAllPeopleUseCase {
  constructor(private readonly repository: PeopleRepository) {}

  async execute(): Promise<People[]> {
    return this.repository.getPeopleList();
  }
}
