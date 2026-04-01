describe("Todo App", () => {
	beforeEach(() => {
		cy.visit("http://localhost:5173/todo");
	});

	it("yangi todo qoshish", () => {
		cy.get("input").type("Cypress todo");
		cy.contains("➕ Qo'shish").click();
		cy.contains("Cypress todo").should("exist");
	});

	it("todo toggle", () => {
		cy.get("input").type("Cypress todo");
		cy.contains("➕ Qo'shish").click();
		cy.contains("Cypress todo").should("exist");

		cy.get("input[type='checkbox']").check();
		cy.contains("Cypress todo")
			.closest(".todo-item")
			.should("have.class", "completed");
	});

	it("todo ochirish", () => {
		cy.get("input").type("Cypress todo");
		cy.contains("➕ Qo'shish").click();
		cy.contains("Cypress todo").should("exist");

		cy.contains("Cypress todo").parent().find("button").click();
		cy.contains("Cypress todo").should("not.exist");
	});
});
