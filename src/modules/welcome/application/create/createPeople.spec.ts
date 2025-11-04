import { describe, expect, it } from "vitest";
import { InMemoryPeopleRepository } from "../../infrastructure/InMemoryPeopleRepository";
import { CreatePeopleUseCase } from "./createPeople";

describe("CreatePeopleUseCase", () => {
  it("should create a person with valid data", () => {
    const repository = new InMemoryPeopleRepository();
    const useCase = new CreatePeopleUseCase(repository);

    const result = useCase.execute({
      name: "John Doe",
      imageUrl: "https://example.com/image.jpg",
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe("John Doe");
      expect(result.data.imageUrl).toBe("https://example.com/image.jpg");
      expect(result.data.id).toBeDefined();
    }
  });

  it("should fail when name is too short", () => {
    const repository = new InMemoryPeopleRepository();
    const useCase = new CreatePeopleUseCase(repository);

    const result = useCase.execute({
      name: "Jo",
      imageUrl: "https://example.com/image.jpg",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0].field).toBe("name");
      expect(result.errors[0].message).toBe(
        "Name must be at least 3 characters"
      );
    }
  });

  it("should fail when name is too long", () => {
    const repository = new InMemoryPeopleRepository();
    const useCase = new CreatePeopleUseCase(repository);

    const result = useCase.execute({
      name: "a".repeat(51),
      imageUrl: "https://example.com/image.jpg",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0].field).toBe("name");
      expect(result.errors[0].message).toBe(
        "Name must be at most 50 characters"
      );
    }
  });

  it("should fail when imageUrl is invalid", () => {
    const repository = new InMemoryPeopleRepository();
    const useCase = new CreatePeopleUseCase(repository);

    const result = useCase.execute({
      name: "John Doe",
      imageUrl: "not-a-url",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0].field).toBe("imageUrl");
      expect(result.errors[0].message).toBe("Must be a valid URL");
    }
  });

  it("should fail when imageUrl has invalid format", () => {
    const repository = new InMemoryPeopleRepository();
    const useCase = new CreatePeopleUseCase(repository);

    const result = useCase.execute({
      name: "John Doe",
      imageUrl: "https://example.com/file.pdf",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0].field).toBe("imageUrl");
      expect(result.errors[0].message).toBe(
        "Image must be jpg, png, gif, svg, or webp"
      );
    }
  });

  it("should trim whitespace from name", () => {
    const repository = new InMemoryPeopleRepository();
    const useCase = new CreatePeopleUseCase(repository);

    const result = useCase.execute({
      name: "  John Doe  ",
      imageUrl: "https://example.com/image.jpg",
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe("John Doe");
    }
  });

  it("should save person to repository", () => {
    const repository = new InMemoryPeopleRepository();
    const useCase = new CreatePeopleUseCase(repository);

    const result = useCase.execute({
      name: "John Doe",
      imageUrl: "https://example.com/image.jpg",
    });

    expect(result.success).toBe(true);

    const allPeople = repository.getAll();
    expect(allPeople).toHaveLength(1);
    expect(allPeople[0].name).toBe("John Doe");
  });
});
