import { createLocalStoragePeopleRepository } from "../../LocalStoragePeopleRepository";

describe("Api People repository", () => {
  it("lists all people with the properties id, name and imageUrl", async () => {
    const repository = createLocalStoragePeopleRepository();

    const peoples = await repository.getPeopleList();

    expect(peoples.length).to.be.greaterThan(0);
    expect(peoples[0].id).to.equal("717f7637-a101-49e4-8e64-0db607f90b13");
    expect(peoples[0].name).to.equal("Cristian Fonseca");
    expect(peoples[0].imageUrl).to.equal("https://placekitten.com/500/400");
  });
});
