/* TEST E2E CON CYPRESS PARA LA HOME Y PARA LA PAGINA DE REGION (prueba: North America) */

import { getHeader, getH3, getTableContent,getH5 ,getNavLink } from '../support/app.po';

/*TEST COMPONENTE: RegionsComponent */
describe('GIVEN: the world-app application', ()=> {

  beforeEach(() => {
    cy.visit('/');
  });
  context('WHEN: user visits the Home',()=> {

    it('THEN: should display a header',  () => {
      getHeader().contains('TrainingIT - Proyectos escalables con Angular');
    });//header

    it('THEN: should display an author', () => {
      getH3().contains('Mónica Jiménez');
    });//author

    it('THEN: should display a link to History', () => {
      getNavLink().contains('Ver historial');
    });//link a Historial 

    it('THEN: should display a table with seven regions', ()=> {
      getTableContent().contains('East Asia & Pacific');
      getTableContent().contains('Europe & Central Asia');
      getTableContent().contains('Latin America & Caribbean');
      getTableContent().contains('Middle East & North Africa');
      getTableContent().contains('North America');
      getTableContent().contains('South Asia');
      getTableContent().contains('Sub-Saharan Africa');
      //getTableContent().contains('hola hola hola'); --> Esto no pasa el test --> OK!!
    });//table

  });//context

});//Describe



/*TEST COMPONENTE 1 REGION: RegionITEMComponent */
describe('GIVEN: the world-app application', () => {
  beforeEach(() => cy.visit('/region/NAC'));
  context('WHEN: user visits the region "North America"',() => {
    it('THEN: should display a title', () => {
      getH3().contains('Countries:');
    });//header
    it('THEN: should display a three cards, one for each country', () => {
      getH5().contains('Canada');
      getH5().contains('Bermuda');
      getH5().contains('United States');
      //getH5().contains('Monica Jimenez'); --> Esto no pasa el test --> OK!!
    });//header
  });//context
});//Describe