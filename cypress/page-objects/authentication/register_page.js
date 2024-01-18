/// <reference types="cypress" />

export function navigate() {
  cy.visit('register')
}

export function enterFirstName(firstName) {
  cy.get('#firstname').type(`${firstName}`)
}

export function enterLastName(lastName) {
  cy.get('#lastname').type(`${lastName}`)
}

export function enterUserName(userName) {
  cy.get('#userName').type(`${userName}`)
}

export function enterPassword(password) {
  cy.get('#password').type(`${password}`)
}

//https://stackoverflow.com/questions/58684920/cypress-testing-a-contact-form-with-google-recaptcha
export function checkCaptcha() {
  cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()
}

export function clickRegister() {
  cy.get('#register').click()
}

export function backToLogin() {
  cy.get('#gotologin').click()
}
