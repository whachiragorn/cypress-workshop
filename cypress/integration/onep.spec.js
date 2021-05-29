describe('My First Unit Test', function() {
    it('Login CMS KM', () => {
        cy.visit('http://onepkm.wisdomcloud.net/onep/cms/login')
        cy.get('#username-input').type('onep-admin@wisdomvast.com')
        cy.get('#password-input').type('password')
        cy.get('#login-button').click()
        .contains('เข้าสู่ระบบ')
    });
})
