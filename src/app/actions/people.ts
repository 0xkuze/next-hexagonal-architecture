"use server";

import { revalidatePath } from "next/cache";
import { container } from "@/lib/container";
import { CreatePeopleUseCase } from "@/modules/welcome/application/create/createPeople";
import { GetAllPeopleUseCase } from "@/modules/welcome/application/get-all/getAllPeople";
import type { People } from "@/modules/welcome/domain/People";

export async function getPeopleList(): Promise<People[]> {
  const repository = container.getPeopleRepository();
  const useCase = new GetAllPeopleUseCase(repository);
  return useCase.execute();
}

export async function createPerson(formData: FormData) {
  const name = formData.get("name") as string;
  const imageUrl = formData.get("imageUrl") as string;

  const repository = container.getPeopleRepository();
  const useCase = new CreatePeopleUseCase(repository);

  const result = useCase.execute({ name, imageUrl });

  if (!result.success) {
    return {
      error: result.errors[0].message,
    };
  }

  revalidatePath("/");

  return {
    success: true,
    person: result.data,
  };
}
