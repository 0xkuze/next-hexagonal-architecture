describe("template spec", () => {
  beforeEach(() => {
    cy.request("POST", "/api/welcome/reset");
    cy.wait(200);
  });

  it("passes", () => {
    cy.visit("/");
    cy.findByPlaceholderText("Enter full name").type("My Name");
    cy.findByPlaceholderText("https://example.com/image.jpg").type(
      "https://www.zooplus.es/magazine/wp-content/uploads/2022/05/Cuanto-pesa-un-gato-2.jpeg"
    );
    cy.findByText("Add Person").click();
    cy.wait(500);
    cy.findAllByText("My Name").should("have.length", 1);
  });
});
