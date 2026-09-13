Feature: Contact form

  Background:
    Given I am on the landing page
    And I scroll to the contact section

  # ============================================================
  # FORM STRUCTURE
  # ============================================================

  Scenario: Display the contact form
    Then I should see the contact section
    And I should see the contact form
    And I should see the name or company field
    And I should see the email field
    And I should see the message field
    And I should see the submit button

  Scenario: Display the correct contact field types
    Then the name or company field should have type "text"
    And the email field should have type "email"
    And the message field should be a textarea

  Scenario: Display the required contact fields
    Then the name or company field should be required
    And the email field should be required
    And the message field should be required

  # ============================================================
  # FIELD LIMITS
  # ============================================================

  Scenario: Enforce contact field maximum lengths
    Then the name or company field should have a maximum length of "120"
    And the email field should have a maximum length of "254"
    And the message field should have a maximum length of "5000"

  Scenario: Prevent the name or company field from exceeding its limit
    When I enter more than 120 characters into the name or company field
    Then the name or company field value should not exceed 120 characters

  Scenario: Prevent the email field from exceeding its limit
    When I enter more than 254 characters into the email field
    Then the email field value should not exceed 254 characters

  Scenario: Prevent the message field from exceeding its limit
    When I enter more than 5000 characters into the message field
    Then the message field value should not exceed 5000 characters

  # ============================================================
  # REQUIRED VALIDATION
  # ============================================================

  Scenario: Reject an empty contact form
    When I submit the contact form without filling the fields
    Then the name or company field should be invalid
    And the email field should be invalid
    And the message field should be invalid
    And the legal consent modal should not be visible

  Scenario: Reject an empty name or company field
    When I fill the contact form with an empty name or company
    Then the name or company field should be invalid
    And the legal consent modal should not be visible

  Scenario: Reject an empty email field
    When I fill the contact form with an empty email
    Then the email field should be invalid
    And the legal consent modal should not be visible

  Scenario: Reject an empty message field
    When I fill the contact form with an empty message
    Then the message field should be invalid
    And the legal consent modal should not be visible

  # ============================================================
  # EMAIL VALIDATION
  # ============================================================

  Scenario: Accept a valid email address
    When I enter "qa@example.com" into the email field
    Then the email field should be valid

  Scenario: Reject an email without an at sign
    When I enter "qa.example.com" into the email field
    Then the email field should be invalid

  Scenario: Reject an email without a domain
    When I enter "qa@" into the email field
    Then the email field should be invalid

  Scenario: Reject an email without a local part
    When I enter "@example.com" into the email field
    Then the email field should be invalid

  Scenario: Reject an email containing spaces
    When I enter "qa user@example.com" into the email field
    Then the email field should be invalid

  # ============================================================
  # CONSENT FLOW
  # ============================================================

  Scenario: Open the legal consent modal before sending
    When I fill the contact form with valid data
    And I submit the contact form
    Then the legal consent modal should be visible

  Scenario: Do not send the form when consent is not accepted
    Given the EmailJS request is being monitored
    When I fill the contact form with valid data
    And I submit the contact form
    And I close the legal consent modal
    Then the legal consent modal should not be visible
    And no EmailJS request should have been sent
    And the contact form should remain filled

  Scenario: Preserve form data when consent is rejected
    When I fill the contact form with valid data
    And I submit the contact form
    And I close the legal consent modal
    Then the contact form should remain filled

  # ============================================================
  # SUCCESSFUL SUBMISSION
  # ============================================================

  Scenario: Send the contact form after accepting the terms
    Given the EmailJS request is being monitored
    And the EmailJS request will succeed
    When I fill the contact form with valid data
    And I submit the contact form
    And I accept the legal terms
    Then an EmailJS request should have been sent

  Scenario: Send the correct contact data
    Given the EmailJS request is being monitored
    And the EmailJS request will succeed
    When I fill the contact form with valid data
    And I submit the contact form
    And I accept the legal terms
    Then the EmailJS request should contain the name or company
    And the EmailJS request should contain the email
    And the EmailJS request should contain the message
    And the EmailJS request should contain a timestamp
    And the EmailJS request should not contain a "name" field
    And the EmailJS request should not contain a "company" field

  Scenario: Clear the form after successful submission
    Given the EmailJS request is being monitored
    And the EmailJS request will succeed
    When I fill the contact form with valid data
    And I submit the contact form
    And I accept the legal terms
    Then the contact form should be empty
    And the contact success message should be visible

  # ============================================================
  # EMAILJS FAILURE
  # ============================================================

  Scenario: Handle an EmailJS submission failure
    Given the EmailJS request is being monitored
    And the EmailJS request will fail
    When I fill the contact form with valid data
    And I submit the contact form
    And I accept the legal terms
    Then the contact error message should be visible
    And the contact form should remain filled

  Scenario: Allow another submission after an EmailJS failure
    Given the EmailJS request is being monitored
    And the EmailJS request will fail
    When I fill the contact form with valid data
    And I submit the contact form
    And I accept the legal terms
    Then the contact error message should be visible
    And the submit button should be enabled

  # ============================================================
  # LOADING / DOUBLE SUBMISSION
  # ============================================================

  Scenario: Disable the submit button while sending
    Given the EmailJS request is being monitored
    And the EmailJS request will be delayed
    When I fill the contact form with valid data
    And I submit the contact form
    And I accept the legal terms
    Then the submit button should be disabled while sending

  Scenario: Prevent duplicate submissions
    Given the EmailJS request is being monitored
    And the EmailJS request will be delayed
    When I fill the contact form with valid data
    And I submit the contact form
    And I accept the legal terms
    And I try to submit the contact form again
    Then only one EmailJS request should have been sent

  # ============================================================
  # HONEYPOT
  # ============================================================

  Scenario: Block a submission when the honeypot is filled
    Given the EmailJS request is being monitored
    When I fill the contact form with valid data
    And I fill the contact honeypot field
    And I submit the contact form
    Then the legal consent modal should not be visible
    And no EmailJS request should have been sent

  Scenario: Allow normal submission when the honeypot is empty
    Given the EmailJS request is being monitored
    And the EmailJS request will succeed
    When I fill the contact form with valid data
    And I submit the contact form
    Then the legal consent modal should be visible

  # ============================================================
  # SECURITY
  # ============================================================

  Scenario: Reject script injection in the name or company field
    When I enter "<script>alert('xss')</script>" into the name or company field
    Then no script element should exist inside the contact section

  Scenario: Reject script injection in the message field
    When I enter "<script>alert('xss')</script>" into the message field
    Then no script element should exist inside the contact section

  Scenario: Reject HTML injection in the contact fields
    When I enter "<img src=x onerror=alert('xss')>" into the name or company field
    And I enter "<img src=x onerror=alert('xss')>" into the message field
    Then no injected HTML element should exist inside the contact section

  Scenario: Handle control characters in contact fields
    When I enter control characters into the contact fields
    Then the contact fields should not contain control characters

  Scenario: Handle Unicode input safely
    When I enter Unicode text into the contact fields
    Then the Unicode text should remain valid contact data

  # ============================================================
  # CONTACT DATA CONTRACT
  # ============================================================

  Scenario: Preserve the contact data contract
    When I fill the contact form with valid data
    Then the contact data should contain:
      | field |
      | nameOrCompany |
      | email |
      | message |

  Scenario: Preserve the EmailJS parameter contract
    Given the EmailJS request is being monitored
    And the EmailJS request will succeed
    When I fill the contact form with valid data
    And I submit the contact form
    And I accept the legal terms
    Then the EmailJS template parameters should contain exactly:
      | field |
      | nameOrCompany |
      | email |
      | message |
      | timestamp |

  # ============================================================
  # RESPONSIVENESS
  # ============================================================

  Scenario: Prevent horizontal overflow on mobile
    Given I use a mobile viewport
    Then the contact section should not have horizontal overflow

  Scenario: Prevent horizontal overflow on desktop
    Given I use a desktop viewport
    Then the contact section should not have horizontal overflow