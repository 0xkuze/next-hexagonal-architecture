import { cacheLife, cacheTag, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { container } from "@/lib/container";
import { CreatePeopleUseCase } from "@/modules/welcome/application/create/createPeople";
import { GetAllPeopleUseCase } from "@/modules/welcome/application/get-all/getAllPeople";

async function getWelcomeData() {
  "use cache";
  cacheTag("people-list");
  cacheLife("hours");

  const repository = container.getPeopleRepository();
  const useCase = new GetAllPeopleUseCase(repository);
  return useCase.execute();
}

export async function GET(_request: Request) {
  const data = await getWelcomeData();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, imageUrl } = body;

    const repository = container.getPeopleRepository();
    const useCase = new CreatePeopleUseCase(repository);

    const result = useCase.execute({ name, imageUrl });

    if (!result.success) {
      return NextResponse.json(
        { error: result.errors[0].message },
        { status: 400 }
      );
    }

    revalidateTag("people-list", "max");

    return NextResponse.json(result.data, { status: 201 });
  } catch (error) {
    console.error("Error creating person:", error);
    return NextResponse.json(
      { error: "Failed to create person" },
      { status: 500 }
    );
  }
}
