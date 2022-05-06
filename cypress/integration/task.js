describe('My test', () => {
    it ('Visits log in', () => {
        cy.visit('http://uitestingplayground.com/sampleapp')
            const usernameInput = cy.get('input[name="UserName"]')
            usernameInput.should('have.attr', 'placeholder', 'User Name')
            usernameInput.type('myUsername')
         
            const passwordInput = cy.get('input[name="Password"]')
              .should('have.attr', 'placeholder', '********')
              .type('pwd')

              cy.get('.btn').click()
    })
    it ('Visits bad log in', () => {
        cy.visit('http://uitestingplayground.com/sampleapp')
            const usernameInput = cy.get('input[name="UserName"]')
            usernameInput.should('have.attr', 'placeholder', 'User Name')
            usernameInput.type('myUsername')
         
            const passwordInput = cy.get('input[name="Password"]')
              .should('have.attr', 'placeholder', '********')
              .type('badPassword')

              cy.get('.btn').click()
    })
    it ('Visits log out', () => {
        cy.visit('http://uitestingplayground.com/sampleapp')
            const usernameInput = cy.get('input[name="UserName"]')
            usernameInput.should('have.attr', 'placeholder', 'User Name')
            usernameInput.type('myUsername')
         
            const passwordInput = cy.get('input[name="Password"]')
              .should('have.attr', 'placeholder', '********')
              .type('pwd')

              cy.get('.btn').click()
              cy.get('.btn').click()

    })
})
