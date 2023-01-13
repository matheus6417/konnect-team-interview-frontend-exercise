### Screen Record

[konnect-team-interview-frontend.webm](https://user-images.githubusercontent.com/20672249/212342023-13b1c586-e7ae-42fe-9b8b-2ea2cf2b5fae.webm)

### ✨ Main Features 

Implemented features (besides exercise requirements), and items that were mentioned in Panel 1 interview

- Persistency between pages (going back from a service, keeps last page view, search term)
- Search debounced to avoid several api calls
- Loading skeleton components
- UI feedback for loading, empty, error
- Pagination behaviour (reseting on search, loading state)
- Card is not clicable - only title and versions button (as mentioned, we could have multiple actions in one card, like, clicking on a developer avatar)
- Styles mainly in sass
- Not used any kong components - added generic components (button, input) with enough props and features for the assignment.
- Server endpoint for fetching a single service by id
- Truncating card descriptions, formatting service metrics.
- File based routing
- Used script setup and Auto-import of components and main vue & vueUse api - keeping better readability.
- No media queries for responsive behaviour - used flexbox, grid layout and container queries - so the components have more flexibility of positioning.
- Typescript validation with io-ts

### ❌ Items NOT implemented (from Panel 1 discussion)

Items that were not required:

- i18n internationalization
- Accessibility coverage
- Main page URL query search
- Offline capabilities

Items nice-to-have but not implemented due limited time:

- Keyboard navigation
- Breadcrumbs
- "New Service" popup/sidepanel
- Search cache
- Search input validation (min length, etc)
- e2e tests
- Animation & transitions of cards, and navigation
- better mobile version for top-bar with hamburguer menu

### 📌 Considerations & Trade-offs

1. Started the assignment collecting assets and defining the main styles for the app, considering that I would not use Kong design assets/components.
    
However I noticed that the figma design had some inconsistencies, so for each one I hade to make a decision:

Ideally I would have asked for clarification, and exchange feedback with the Designer, push to document and use the shared design system and values. For this exercise I decided to go with my best judgement, as follows:

- Spacing: Usually I expect that the spacing goes by multiple of a base even unit (8px, 16px, 24px, etc). In the design, there were some cases where the spacing was something unique, or odd. I decided to use the closest value multiple of the base unit I defined as 16px.
- Fonts: The mock had a lot of different font sizes, (10,12,13,14,15,16,20px...) I decided to use the closest range of fonts possible to keep the consistency.
- Colors: The mock had a lot of different similar colors, more than the present on kong design assets. I decided to use the closest range of colors possible to keep the consistency.
- I extracted the figma icons and created single components with custom props. Ideally we would have a shared set of icons with customizations capabilities.
- I didn't understand how the Version HTTP/REST flag would work on the the app, because it looks like a button/clicable tag, so I just rendered it as is using the service provided data.

Some issues with the figma were found, like:
- overflowing elements:

![image](https://user-images.githubusercontent.com/20672249/212356726-271eab61-d81e-49e6-8c3a-df6f0068d676.png)

- elements leaking outside of the figma frame:

![image](https://user-images.githubusercontent.com/20672249/212356883-7bf5ec2d-b2f5-4ac9-a0a4-8cb09df996ee.png)

![image](https://user-images.githubusercontent.com/20672249/212356967-d0dc68df-9a4b-451c-9da3-94a06ba33af9.png)


2. The google doc [requirements gathering](https://docs.google.com/document/d/1AIXTtrEMZBnfoLYXDlBYiEB-BTk7XNt2QlY7jWYdPv0/edit#) has some wording inconsistency with the README requirements:

- In docs, If not configured, show ‘Is Pending’ - In FIGMA we only have UI for 'In progress'. I decided to use 'In progress'.
- In docs, the main page primary button is called "Create Service Package", in FIGMA is '+ Service Package'. I've used '+ Service Package'


3. The server didn't provide an endpoint for fetching a single service, so I implemented one.


---

# Original Assignment README:

Please take the time to read through all of the sections below; we want you to do great! :rocket:

Feel free to reach out to your recruiting contact with any questions or concerns.

## Goal

Modify the provided Vue 3 app to match [this mock](https://www.figma.com/file/swzJVL624G434CVdWi3FLv/Core-UI-Team-Project) as closely as possible while utilizing best-practices to improve the codebase and implement the functional requirements outlined below.

- The provided exercise files are a starting point and they have room for improvement; feel free to modify
- Don't treat the mock as gospel -- if you see things that don't make sense, ask questions or implement what you think is right
- In the exercise you are utilizing a local API; however, you should code your submission as if you are using a production API

### Links

- Figma Mock: <https://www.figma.com/file/swzJVL624G434CVdWi3FLv/Core-UI-Team-Project>

## Functional Requirements

- Vue 3 and TypeScript
- User should be able to view the name, a brief description, versions available, and other info shown in the mock for services
- User should be able to search for services ([See search endpoint details below](#searching-the-services-endpoint))
- User should be able to click on a service to view more details
- User should be able to paginate through services (client-side implementation)
- The create Service Package button doesn't have to be operable -- interacting with this elements could do nothing, could be fully implemented (stretch goal), or something in between
- Please update the `README` in the project with a section to describe your design considerations, assumptions, and trade-offs made during this exercise. Also feel free to include any notes about your submission

## Additional Considerations (if applicable)

- Routing and views (e.g. navigating to a given service from its card)
- The UI should be responsive and look great at different browser viewport sizes
- Pixel-perfect implementation
- State management with Pinia
- [Component Tests](#run-component-tests-with-cypress-component-testing) and/or [Unit Tests](#run-unit-tests-with-vitest)
- Other items covered in your Panel 1 interview

## Evaluation

We will review your code for quality and your ability to talk through it, how you approach the UI, and what tradeoffs you make. Specifically we'll be looking at the following:

- How closely your implementation matches the design along with the other [Functional Requirements](#functional-requirements)
- Code quality, including appropriate componentization and modularity
- TypeScript usage
- Coding (and Vue) best-practices
- How you dedicate the allotted time to focus on your strengths
- Code coverage, if applicable

## How to submit the project

You have up to a week to complete the exercise, but we don't expect you to spend more than a few hours on it.

When it's ready, please send your recruiter a link to the source code in a GitHub repository (no Pull Requests).

---

## Project Setup

```sh
yarn install --frozen-lockfile
```

### Compile and Hot-Reload for Development

Start the backend:

```sh
yarn server
```

Separately, start the frontend:

```sh
yarn dev
```

## Searching the services endpoint

The local API is available at `http://localhost:4001` after running `yarn server`.

Searching this endpoint is supported by passing a query string with a value to search with (case-insensitive): `/api/services?q={value}`

**Note**: The search endpoint evaluates all property values as a `string` to determine a match.

### Searchable properties

The search endpoint is configured to search the following fields for each service within the JSON response:

```ts
{
  id: string;
  name: string;
  description: string;
  type: string;
}
```

### Search example

If I wanted to search for a service with "dogs" in the service name, I would pass the name in the query string:

```sh
GET: /api/services?q=dogs
```

### Lint with ESLint

```sh
# Run the linter
yarn lint

# Fix linting errors
yarn lint:fix
```

### Build and Minify for Production

```sh
yarn build
```

### Run Component Tests with [Cypress Component Testing](https://docs.cypress.io/guides/component-testing/introduction)

Component test files must be located in the `/src/` directory and have a filename format of `*.cy.ts`

```sh
# Run component tests
yarn test:component

# or run the component tests in the Cypress UI
yarn test:component:open
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

Unit test files must be located in the `/src/` directory and have a filename format of `*.spec.ts`

```sh
# Run unit tests
yarn test:unit

# or run unit tests and view in the Vitest UI
yarn test:unit:ui

# or view test coverage via Vitest
yarn test:unit:coverage
```

### Committing Changes

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

At Kong, we utilize [Conventional Commits](https://www.conventionalcommits.org/) in all of our repositories. [Commitizen](https://github.com/commitizen/cz-cli) can be used to to help build and enforce commit messages.

If you're unfamiliar, it is **recommended** to use the following command in order to create your commits:

```sh
yarn commit
```

This will trigger the Commitizen interactive prompt for building your commit message.
