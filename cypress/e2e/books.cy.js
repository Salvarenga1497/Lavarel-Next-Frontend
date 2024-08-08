describe("Books", () => {
  it("can list, show, create, edit and delete books", () => {
    //Listado de libros
    cy.visit("/").get("[data-cy=link-to-books]").click();
    //crear libros
    cy.get('[href="/libros/crear"]')
      .click()
      .get("[data-cy=input-book-title]")
      .type("Nuevo libro desde cypress")
      .get("[data-cy=button-submit-book]")
      .click()
      .get("[data-cy=book-lis]")
      .contains("Nuevo libro desde cypress");
    //ver un libro
    cy.get("[data-cy^=link-to-visit-book-]")
      .last()
      .click()
      .get("h1")
      .should("contain.text", "Nuevo libro desde cypress")
      .get('[href="/libros"]')
      .click();
    //editar un libro
    cy.get("[data-cy^=link-to-edit-book-]")
      .last()
      .click()
      .get("[data-cy=input-book-title]")
      .clear()
      .type("libro editado desde cypress")
      .get("[data-cy=button-submit-book]")
      .click()
      .get("[data-cy=book-lis]")
      .contains("libro editado desde cypress");
    //Eliminar un libro
    cy.get("[data-cy^=link-to-delete-book-]")
      .last()
      .click()
      .get("[data-cy^=link-to-visit-book-]")
      .last().should('not.contain.text','libro editado desde cypress')
  });
});
