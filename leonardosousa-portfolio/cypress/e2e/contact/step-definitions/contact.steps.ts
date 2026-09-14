import {
    Given,
    Then,
    When,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  const CONTACT = "#contact";
  const NAME_OR_COMPANY = "#contact-name";
  const EMAIL = "#contact-email";
  const MESSAGE = "#contact-message";
  const HONEYPOT = 'input[name="website"]';
  const LEGAL_MODAL = '[role="dialog"]';
  
  const EMAILJS_ENDPOINT =
    "https://api.emailjs.com/api/v1.0/email/send";
  
  const TEST_NAME = "QA Integration Test";
  const TEST_EMAIL = "qa.integration@example.com";
  const TEST_MESSAGE =
    "This is a Cypress E2E test message.";
  
  let emailJsRequestCount = 0;
  let emailJsRequestBody: Record<string, unknown> | null = null;
  let emailJsMode: "success" | "failure" | "delay" = "success";
  
  function resetEmailJsState(): void {
    emailJsRequestCount = 0;
    emailJsRequestBody = null;
    emailJsMode = "success";
  }
  
  function setupEmailJsIntercept(): void {
    resetEmailJsState();
  
    cy.intercept(
      "POST",
      EMAILJS_ENDPOINT,
      (request) => {
        emailJsRequestCount += 1;
        emailJsRequestBody = request.body;
  
        if (emailJsMode === "failure") {
          request.reply({
            statusCode: 500,
            body: "EmailJS test failure",
          });
  
          return;
        }
  
        if (emailJsMode === "delay") {
          request.on("response", (response) => {
            response.setDelay(1000);
          });
        }
  
        request.reply({
          statusCode: 200,
          body: "OK",
        });
      },
    ).as("emailJsRequest");
  }
  
  function getTemplateParams(): Record<string, unknown> {
    expect(emailJsRequestBody).to.not.equal(null);
  
    const body = emailJsRequestBody as {
      template_params?: Record<string, unknown>;
    };
  
    expect(body.template_params).to.not.equal(undefined);
  
    return body.template_params as Record<string, unknown>;
  }
  
  function getFieldValue(selector: string): Cypress.Chainable<string> {
    return cy.get(selector).invoke("val").then((value) => {
      return String(value ?? "");
    });
  }
  
  Given("I am on the landing page", () => {
    cy.visit("/");
  });
  
  Given("I scroll to the contact section", () => {
    cy.get(CONTACT)
      .should("exist")
      .scrollIntoView();
  });
  
  Given("I use a mobile viewport", () => {
    cy.viewport(375, 667);
  
    cy.visit("/");
  
    cy.get(CONTACT)
      .should("exist")
      .scrollIntoView();
  });
  
  Given("I use a desktop viewport", () => {
    cy.viewport(1440, 900);
  
    cy.visit("/");
  
    cy.get(CONTACT)
      .should("exist")
      .scrollIntoView();
  });
  
  Given("the EmailJS request is being monitored", () => {
    setupEmailJsIntercept();
  });
  
  Given("the EmailJS request will succeed", () => {
    emailJsMode = "success";
  });
  
  Given("the EmailJS request will fail", () => {
    emailJsMode = "failure";
  });
  
  Given("the EmailJS request will be delayed", () => {
    emailJsMode = "delay";
  });
  
  Then("I should see the contact section", () => {
    cy.get(CONTACT)
      .should("exist")
      .and("be.visible");
  });
  
  Then("I should see the contact form", () => {
    cy.get(CONTACT)
      .find("form")
      .should("exist")
      .and("be.visible");
  });
  
  Then("I should see the name or company field", () => {
    cy.get(NAME_OR_COMPANY)
      .should("exist")
      .and("be.visible");
  });
  
  Then("I should see the email field", () => {
    cy.get(EMAIL)
      .should("exist")
      .and("be.visible");
  });
  
  Then("I should see the message field", () => {
    cy.get(MESSAGE)
      .should("exist")
      .and("be.visible");
  });
  
  Then("I should see the submit button", () => {
    cy.get(CONTACT)
      .find('button[type="submit"]')
      .should("exist")
      .and("be.visible");
  });
  
  Then(
    'the name or company field should have type {string}',
    (type: string) => {
      cy.get(NAME_OR_COMPANY)
        .should("have.attr", "type", type);
    },
  );
  
  Then(
    'the email field should have type {string}',
    (type: string) => {
      cy.get(EMAIL)
        .should("have.attr", "type", type);
    },
  );
  
  Then("the message field should be a textarea", () => {
    cy.get(MESSAGE)
      .should("match", "textarea");
  });
  
  Then("the name or company field should be required", () => {
    cy.get(NAME_OR_COMPANY)
      .should("have.attr", "required");
  });
  
  Then("the email field should be required", () => {
    cy.get(EMAIL)
      .should("have.attr", "required");
  });
  
  Then("the message field should be required", () => {
    cy.get(MESSAGE)
      .should("have.attr", "required");
  });
  
  Then(
    'the name or company field should have a maximum length of {string}',
    (maxLength: string) => {
      cy.get(NAME_OR_COMPANY)
        .should("have.attr", "maxlength", maxLength);
    },
  );
  
  Then(
    'the email field should have a maximum length of {string}',
    (maxLength: string) => {
      cy.get(EMAIL)
        .should("have.attr", "maxlength", maxLength);
    },
  );
  
  Then(
    'the message field should have a maximum length of {string}',
    (maxLength: string) => {
      cy.get(MESSAGE)
        .should("have.attr", "maxlength", maxLength);
    },
  );
  
  When(
    "I enter more than 120 characters into the name or company field",
    () => {
      cy.get(NAME_OR_COMPANY)
        .clear()
        .type("A".repeat(150));
    },
  );
  
  When(
    "I enter more than 254 characters into the email field",
    () => {
      const email =
        `${"a".repeat(250)}@example.com`;
  
      cy.get(EMAIL)
        .clear()
        .type(email);
    },
  );
  
  When(
    "I enter more than 5000 characters into the message field",
    () => {
      cy.get(MESSAGE)
        .clear()
        .type("A".repeat(5500), {
          delay: 0,
        });
    },
  );
  
  Then(
    "the name or company field value should not exceed 120 characters",
    () => {
      getFieldValue(NAME_OR_COMPANY).then((value) => {
        expect(value.length).to.be.at.most(120);
      });
    },
  );
  
  Then(
    "the email field value should not exceed 254 characters",
    () => {
      getFieldValue(EMAIL).then((value) => {
        expect(value.length).to.be.at.most(254);
      });
    },
  );
  
  Then(
    "the message field value should not exceed 5000 characters",
    () => {
      getFieldValue(MESSAGE).then((value) => {
        expect(value.length).to.be.at.most(5000);
      });
    },
  );
  
  When(
    "I submit the contact form without filling the fields",
    () => {
      cy.get(CONTACT)
        .find('button[type="submit"]')
        .click();
    },
  );
  
  When(
    "I fill the contact form with an empty name or company",
    () => {
      cy.get(NAME_OR_COMPANY).clear();
  
      cy.get(EMAIL)
        .clear()
        .type(TEST_EMAIL);
  
      cy.get(MESSAGE)
        .clear()
        .type(TEST_MESSAGE);
    },
  );
  
  When("I fill the contact form with an empty email", () => {
    cy.get(NAME_OR_COMPANY)
      .clear()
      .type(TEST_NAME);
  
    cy.get(EMAIL).clear();
  
    cy.get(MESSAGE)
      .clear()
      .type(TEST_MESSAGE);
  });
  
  When("I fill the contact form with an empty message", () => {
    cy.get(NAME_OR_COMPANY)
      .clear()
      .type(TEST_NAME);
  
    cy.get(EMAIL)
      .clear()
      .type(TEST_EMAIL);
  
    cy.get(MESSAGE).clear();
  });
  
  Then("the name or company field should be invalid", () => {
    cy.get(NAME_OR_COMPANY)
      .should("have.prop", "validity")
      .and("have.property", "valid", false);
  });
  
  Then("the email field should be invalid", () => {
    cy.get(EMAIL)
      .should("have.prop", "validity")
      .and("have.property", "valid", false);
  });
  
  Then("the message field should be invalid", () => {
    cy.get(MESSAGE)
      .should("have.prop", "validity")
      .and("have.property", "valid", false);
  });
  
  When(
    'I enter {string} into the email field',
    (email: string) => {
      cy.get(EMAIL)
        .clear()
        .type(email);
    },
  );
  
  Then("the email field should be valid", () => {
    cy.get(EMAIL)
      .should("have.prop", "validity")
      .and("have.property", "valid", true);
  });
  
  When("I fill the contact form with valid data", () => {
    cy.get(NAME_OR_COMPANY)
      .clear()
      .type(TEST_NAME);
  
    cy.get(EMAIL)
      .clear()
      .type(TEST_EMAIL);
  
    cy.get(MESSAGE)
      .clear()
      .type(TEST_MESSAGE);
  });
  
  When("I submit the contact form", () => {
    cy.get(CONTACT)
      .find('button[type="submit"]')
      .click();
  });
  
  Then("the legal consent modal should be visible", () => {
    cy.get(LEGAL_MODAL)
      .should("exist")
      .and("be.visible");
  });
  
  When("I close the legal consent modal", () => {
    cy.get(LEGAL_MODAL)
      .find('button[type="button"]')
      .first()
      .click();
  });
  
  Then("the legal consent modal should not be visible", () => {
    cy.get(LEGAL_MODAL)
      .should("not.exist");
  });
  
  Then("the contact form should remain filled", () => {
    cy.get(NAME_OR_COMPANY)
      .should("have.value", TEST_NAME);
  
    cy.get(EMAIL)
      .should("have.value", TEST_EMAIL);
  
    cy.get(MESSAGE)
      .should("have.value", TEST_MESSAGE);
  });
  
  When("I accept the legal terms", () => {
    cy.get(LEGAL_MODAL)
      .should("be.visible")
      .find("button")
      .last()
      .click();
  });
  
  Then("an EmailJS request should have been sent", () => {
    cy.wrap(null).then(() => {
      expect(emailJsRequestCount).to.equal(1);
    });
  });
  
  Then("no EmailJS request should have been sent", () => {
    cy.wrap(null).then(() => {
      expect(emailJsRequestCount).to.equal(0);
    });
  });
  
  Then("the EmailJS request should contain the name or company", () => {
    const params = getTemplateParams();
  
    expect(params.nameOrCompany)
      .to.equal(TEST_NAME);
  });
  
  Then("the EmailJS request should contain the email", () => {
    const params = getTemplateParams();
  
    expect(params.email)
      .to.equal(TEST_EMAIL);
  });
  
  Then("the EmailJS request should contain the message", () => {
    const params = getTemplateParams();
  
    expect(params.message)
      .to.equal(TEST_MESSAGE);
  });
  
  Then("the EmailJS request should contain a timestamp", () => {
    const params = getTemplateParams();
  
    expect(params.timestamp)
      .to.be.a("string")
      .and.not.be.empty;
  });
  
  Then(
    'the EmailJS request should not contain a "name" field',
    () => {
      const params = getTemplateParams();
  
      expect(params).to.not.have.property("name");
    },
  );
  
  Then(
    'the EmailJS request should not contain a "company" field',
    () => {
      const params = getTemplateParams();
  
      expect(params).to.not.have.property("company");
    },
  );
  
  Then("the contact form should be empty", () => {
    cy.get(NAME_OR_COMPANY)
      .should("have.value", "");
  
    cy.get(EMAIL)
      .should("have.value", "");
  
    cy.get(MESSAGE)
      .should("have.value", "");
  });
  
  Then("the contact success message should be visible", () => {
    cy.get(CONTACT)
      .find('[role="status"]')
      .should("exist")
      .and("be.visible");
  });
  
  Then("the contact error message should be visible", () => {
    cy.get(CONTACT)
      .find('[role="alert"]')
      .should("exist")
      .and("be.visible");
  });
  
  Then("the submit button should be enabled", () => {
    cy.get(CONTACT)
      .find('button[type="submit"]')
      .should("not.be.disabled");
  });
  
  Then(
    "the submit button should be disabled while sending",
    () => {
      cy.get(CONTACT)
        .find('button[type="submit"]')
        .should("be.disabled");
    },
  );
  
  When("I try to submit the contact form again", () => {
    cy.get(CONTACT)
      .find('button[type="submit"]')
      .click();
  });
  
  Then("only one EmailJS request should have been sent", () => {
    cy.wrap(null).then(() => {
      expect(emailJsRequestCount).to.equal(1);
    });
  });
  
  When("I fill the contact honeypot field", () => {
    cy.get(HONEYPOT)
      .invoke("val", "bot-submission")
      .trigger("input");
  });
  
  When(
    "I enter {string} into the name or company field",
    (value: string) => {
      cy.get(NAME_OR_COMPANY)
        .clear()
        .type(value);
    },
  );
  
  When(
    "I enter {string} into the message field",
    (value: string) => {
      cy.get(MESSAGE)
        .clear()
        .type(value);
    },
  );
  
  Then(
    "no script element should exist inside the contact section",
    () => {
      cy.get(CONTACT)
        .find("script")
        .should("not.exist");
    },
  );
  
  Then(
    "no injected HTML element should exist inside the contact section",
    () => {
      cy.get(CONTACT)
        .find("img")
        .should("not.exist");
  
      cy.get(CONTACT)
        .find("script")
        .should("not.exist");
    },
  );
  
  When("I enter control characters into the contact fields", () => {
    const controlCharacters =
      "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007";
  
    cy.get(NAME_OR_COMPANY)
      .clear()
      .type(`QA${controlCharacters}Test`, {
        parseSpecialCharSequences: false,
      });
  
    cy.get(EMAIL)
      .clear()
      .type("qa@example.com");
  
    cy.get(MESSAGE)
      .clear()
      .type(`Message${controlCharacters}Test`, {
        parseSpecialCharSequences: false,
      });
  });
  
  Then(
    "the contact fields should not contain control characters",
    () => {
      const controlCharacterPattern =
        /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/;
  
      cy.get(NAME_OR_COMPANY)
        .invoke("val")
        .should("not.match", controlCharacterPattern);
  
      cy.get(MESSAGE)
        .invoke("val")
        .should("not.match", controlCharacterPattern);
    },
  );
  
  When("I enter Unicode text into the contact fields", () => {
    cy.get(NAME_OR_COMPANY)
      .clear()
      .type("José 日本語 Леонардо");
  
    cy.get(EMAIL)
      .clear()
      .type(TEST_EMAIL);
  
    cy.get(MESSAGE)
      .clear()
      .type("Olá! 日本語 тестe 🚀");
  });
  
  Then("the Unicode text should remain valid contact data", () => {
    cy.get(NAME_OR_COMPANY)
      .should("have.value", "José 日本語 Леонардо");
  
    cy.get(MESSAGE)
      .should("have.value", "Olá! 日本語 тестe 🚀");
  });
  
  Then("the contact data should contain:", () => {
    const contactData = {
      nameOrCompany: TEST_NAME,
      email: TEST_EMAIL,
      message: TEST_MESSAGE,
    };
  
    expect(contactData).to.have.all.keys(
      "nameOrCompany",
      "email",
      "message",
    );
  });
  
  Then(
    "the EmailJS template parameters should contain exactly:",
    () => {
      const params = getTemplateParams();
  
      expect(Object.keys(params))
        .to.have.members([
          "nameOrCompany",
          "email",
          "message",
          "timestamp",
        ]);
    },
  );
  
  Then(
    "the contact section should not have horizontal overflow",
    () => {
      cy.get(CONTACT).then(($contact) => {
        const element = $contact[0];
  
        expect(element.scrollWidth)
          .to.be.at.most(element.clientWidth);
      });
    },
  );