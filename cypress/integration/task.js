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

            const logIn= cy.get('.text-success')
            logIn.should('have.attr', 'id', 'loginstatus')
            .contains('Welcome, myUsername!')
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

            const badLogin= cy.get('.text-danger')
            badLogin.should('have.attr', 'id', 'loginstatus')
            .contains('Invalid username/password')
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

            const logOut= cy.get('.text-info')
            logOut.should('have.attr', 'id', 'loginstatus')
            .contains('User logged out.')

    })
})
