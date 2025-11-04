import type { People } from "@/modules/welcome/domain/People";

describe("Api People repository", () => {
  beforeEach(() => {
    cy.request("POST", "/api/welcome/reset");
    cy.wait(200);
  });

  it("lists all people with the properties id, name and imageUrl", () => {
    cy.request("POST", "/api/welcome", {
      name: "Cristian Fonseca",
      imageUrl: "https://picsum.photos/400/400.jpg",
    }).then((response) => {
      expect(response.status).to.equal(201);
    });

    cy.wait(300);

    cy.request("GET", "/api/welcome").then((response) => {
      expect(response.status).to.equal(200);

      const peoples = response.body as People[];

      cy.log(`Found ${peoples.length} people`);

      if (peoples.length === 0) {
        throw new Error("No people found in repository after creation");
      }

      const testPerson = peoples.find((p) => p.name === "Cristian Fonseca");

      if (!testPerson) {
        const names = peoples.map((p) => p.name).join(", ");
        throw new Error(
          `Person "Cristian Fonseca" not found. Available: ${names}`
        );
      }

      expect(testPerson).to.exist;
      expect(testPerson).to.have.property("id");
      expect(testPerson.id).to.be.a("string");
      expect(testPerson.name).to.equal("Cristian Fonseca");
      expect(testPerson.imageUrl).to.equal(
        "https://picsum.photos/400/400.jpg"
      );
    });
  });
});
