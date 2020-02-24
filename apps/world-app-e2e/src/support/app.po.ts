//test home
export const getHeader = () => cy.get('h1');

export const getH3 = () => cy.get('h3'); // also for test Region Page

export const getTableContent = () => cy.get('table').get('tbody').get('td');

export const getH5 = () => cy.get('h5'); //Country name in Region Page
