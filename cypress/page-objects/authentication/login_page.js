/// <reference types="cypress" />

export function navigate() {
  cy.visit('login')
}

// export function enterUsername(username) {
//   cy.get('#userName').type(username)
// }

// export function enterPassword(password) {
//   cy.get('#password').type(password)
// }

export function enterCredentials(username, password) {
  cy.get('#userName').type(username)
  cy.get('#password').type(password)
}

export function clickLogin() {
  cy.get('#login').click()
}

export function clearUsername() {
  cy.get('#userName').clear()
}

export function clearPassword() {
  cy.get('#password').clear()
}

export function clickNewUser() {
  cy.get('#newUser').click()
}