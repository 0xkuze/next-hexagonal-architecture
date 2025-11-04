import { v4 as uuidv4 } from "uuid";
import {
  createFailureResult,
  createSuccessResult,
  type Result,
  type ValidationError,
} from "@/lib/result";
import type { People } from "../../domain/People";
import type { PeopleRepository } from "../../domain/PeopleRepository";

export class CreatePeopleUseCase {
  constructor(private readonly repository: PeopleRepository) {}

  execute(people: People): Result<People> {
    const errors = this.validate(people);

    if (errors.length > 0) {
      return createFailureResult(errors);
    }

    const sanitizedPeople: People = {
      ...people,
      id: people.id || uuidv4(),
      name: people.name.trim(),
    };

    this.repository.save(sanitizedPeople);

    return createSuccessResult(sanitizedPeople);
  }

  private validate(people: People): ValidationError[] {
    const errors: ValidationError[] = [];

    if (!people.name || people.name.trim().length === 0) {
      errors.push({
        field: "name",
        message: "Name is required",
      });
    } else if (people.name.trim().length < 3) {
      errors.push({
        field: "name",
        message: "Name must be at least 3 characters",
      });
    } else if (people.name.length > 50) {
      errors.push({
        field: "name",
        message: "Name must be at most 50 characters",
      });
    }

    if (!people.imageUrl || people.imageUrl.trim().length === 0) {
      errors.push({
        field: "imageUrl",
        message: "Image URL is required",
      });
    } else if (!this.isValidUrl(people.imageUrl)) {
      errors.push({
        field: "imageUrl",
        message: "Must be a valid URL",
      });
    } else if (!this.isValidImageFormat(people.imageUrl)) {
      errors.push({
        field: "imageUrl",
        message: "Image must be jpg, png, gif, svg, or webp",
      });
    }

    return errors;
  }

  private isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  private isValidImageFormat(url: string): boolean {
    return /\.(jpe?g|png|gif|svg|webp)$/i.test(url);
  }
}
