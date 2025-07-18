describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.findByPlaceholderText("Enter full name").type("My Name");
    cy.findByPlaceholderText("https://example.com/image.jpg").type(
      "https://www.zooplus.es/magazine/wp-content/uploads/2022/05/Cuanto-pesa-un-gato-2.jpeg"
    );
    cy.findByText("Add Person").click();
    cy.findByText("My Name").should("be.visible");
  });
});
