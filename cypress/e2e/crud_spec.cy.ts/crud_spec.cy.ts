describe('Linked List Navigation Bar', () => {
  beforeEach(() => {
    // Visit the page where the linked list exists
    // cy.visit('http://localhost:5173/') // Update this to the correct URL for your project
    cy.visit('/books') // Update this to the correct URL for your project
  })

  it('should have a Home link', () => {
    // Check if the Home link exists
    cy.get('nav')
      .find('a[href="/"]') // Locate the anchor tag with href '/'
      .should('be.visible') // Ensure it is visible
      .and('contain', 'Home') // Verify it contains the label 'Home'
  })

  it('should have a Books link', () => {
    // Check if the Books link exists
    cy.get('nav')
      .find('a[href="/books"]') // Locate the anchor tag with href '/books'
      .should('be.visible') // Ensure it is visible
      .and('contain', 'Books') // Verify it contains the label 'Books'
  })
})
