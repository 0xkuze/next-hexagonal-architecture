import type { People } from "@/modules/welcome/domain/People";
import { createLocalStoragePeopleRepository } from "../../LocalStoragePeopleRepository";

describe("Api People repository", () => {
  beforeEach(() => {
    cy.request("POST", "/api/welcome/reset").wait(100);
  });

  it("lists all people with the properties id, name and imageUrl", () => {
    cy.request("POST", "/api/welcome", {
      name: "Cristian Fonseca",
      imageUrl: "https://picsum.photos/400/400.jpg",
    });

    cy.wait(100);

    const repository = createLocalStoragePeopleRepository();

    cy.wrap(repository.getPeopleList()).then((result) => {
      const peoples = result as unknown as People[];

      cy.log(`Found ${peoples.length} people`);
      expect(peoples.length).to.be.greaterThan(0);

      const testPerson = peoples.find((p) => p.name === "Cristian Fonseca");
      expect(testPerson).to.exist;
      expect(testPerson).to.have.property("id");
      expect(testPerson?.id).to.be.a("string");
      expect(testPerson?.name).to.equal("Cristian Fonseca");
      expect(testPerson?.imageUrl).to.equal(
        "https://picsum.photos/400/400.jpg"
      );
    });
  });
});
