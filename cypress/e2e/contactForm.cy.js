describe("Contact Form Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/"); // Uygulamanızın çalıştığı URL
  });

  it("should display error messages for empty fields", () => {
    cy.get("button[type='submit']").click();
    cy.get(".error").should("contain", "Name is required");
    cy.get(".error").should("contain", "Email is required");
    cy.get(".error").should("contain", "Message is required");
  });

  it("should display error message for invalid email", () => {
    cy.get("input[type='text']").type("John Doe");
    cy.get("input[type='email']").type("invalid-email");
    cy.get("textarea").type("Hello there!");

    cy.get("button[type='submit']").click();
    cy.get(".error").should("contain", "Invalid email format");
  });

  it("should display error for short message", () => {
    cy.get("input[type='text']").type("John Doe");
    cy.get("input[type='email']").type("john@example.com");
    cy.get("textarea").type("Hi");

    cy.get("button[type='submit']").click();
    cy.get(".error").should("contain", "Message must be at least 10 characters");
  });

  it("should submit the form when all fields are valid", () => {
    cy.get("input[type='text']").type("John Doe");
    cy.get("input[type='email']").type("john@example.com");
    cy.get("textarea").type("Hello there, this is a test message!");

    cy.get("button[type='submit']").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Form Data:");
    });
  });
});
