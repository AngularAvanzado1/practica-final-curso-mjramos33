# Práctica para curso avanzado de Angular

## Requerimientos funcionales

Explorar la información abierta y disponible en el [API del Banco Mundial](https://datahelpdesk.worldbank.org/knowledgebase/articles/898581-api-basic-call-structures).


### Home page

- Ver regiones geográficas continentales:

- A partir de : http://api.worldbank.org/v2/region/?format=json

- Filtrando para ver aquellas que tengan `id` numérico

- Navegar hacia la página de una región: `region/:code`

### Página para una región continental

- Ver los datos básicos del continente y los países pertenecientes.

- A partir de : http://api.worldbank.org/v2/region/ECS/country?per_page=1000&format=json

- Navegar hacia la página de un país: `country/:id`

### Página para un país

- Ver los datos básicos de un país

- A partir de : http://api.worldbank.org/V2/country/ESP?format=json

- Navegar hacia su región continental : `region/:code`

---

## Requerimientos NO funcionales

## Mínimo

- Mono repositorio generado con las herramientas de [Nx.dev](https://nx.dev/angular) --> OK

- AL menos una aplicación y una librería

- Testing unitario de al menos un componente y un servicio

- Testing _e2e_ de una página

- Uso de la estrategia de detección de cambios **_OnPush_**.

- Uso del patrón _Container Presenter_.

## Plus

- Almacén centralizado del estado mediante **_NgRx_**.

- Características **_PWA_**

- Traducible

## Extra

- Una landing page _SEO friendly_ generada con **_SSR_** que muestre la lista de continentes.

- Un _**WebComponent**_ con datos de un según su código. `<wbde-country id="ESP"></wbde-country>`

- Una aplicación web estándar (sin Angular) que use el anterior componente.


--------------------------------------------------------------
- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@practica-final-curso-mjramos33/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

