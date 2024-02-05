describe('index page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('index page', () => {
    cy.url()
      .should('eq', 'http://localhost:1977/')
  })
})
