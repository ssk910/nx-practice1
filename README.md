# nx-practice1

This project is generated to study [Nx](https://nx.dev).

## Packages

- **commonlib**: A library
- **demoapp**: An application that consumes `commonlib`

## Nx CLI

### create empty workspace

  ```bash
  npx create-nx-workspace@latest --preset=core
  ```

### create app/lib

- create TypeScript based **application** in current workspace
  ```bash
  nx generate @nrwl/node:app <APP_NAME>
  ```

- create TypeScript based **library** in current workspace
  ```bash
  nx generate @nrwl/node:lib <LIB_NAME>
  ```

### config lint

- check if workspace configuration is ok
  ```bash
  nx workspace-lint
  ```

### build

- build all
  ```bash
  nx run-many --target=build --all
  ```
  The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a
  production build.

### Development server

(Not for this project)
Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will
automatically reload if you change any of the source files.

### Running unit tests

(Not for this project)

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

### Running end-to-end tests

(Not for this project)

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

### Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.
