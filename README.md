# Bonsai Writer Website Rebuild

This is a (partial) rebuild of the original product website for Bonsai Writer.

I developed it as an exercise for myself, as a kind of “coding kata”.

## Features

- Linting and formatting for code quality
- Build process for production-ready assets
- Deployment to a cloud platform using Deno

## Technologies used

- [Svelte 5 and SvelteKit](https://svelte.dev)
- UI/Design: [Skeleton](https://www.skeleton.dev) and [Tailwind CSS](https://tailwindcss.com)
- Linting: [ESLint](https://eslint.org)
- Testing: [Vitest](https://vitest.dev) and [Playwrigth](https://playwright.dev)
- CI/CD: [GitHub](https://github.com), [GitLab](https://gitlab.com)
- Deployment/Hosting: [Deno Deploy](https://deno.com/deploy)

## Bonsai Writer

Bonsai Writer was an innovative text writing software for Linux, macOS, and Windows. It's special power was: Seperation of the strucured text from the design. This applies to the process of writing as well as to the data produced by Bonsai Writer. And in contrast to other approaches that does this, Bonsia Writer provides a rather familiar way of text writing and provides a beautiful, easy to use user interface.

We started Bonsai Writer in 2017, inside the company [SALT AND PEPPER](https://salt-and-pepper.eu). In 2019, we had to stop further development.

## Getting started

### Installation and running dev server locally

Install dependencies:

```bash
npm install
```

Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Running tests

There are Unit and E2E tests. To run them all with:

```bash
npm run test
```

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deploying

For deploying to Deno Deploy you need to setup an account first.

### From your local machine

If you want to deploy from your local machine you can run `npm run deno-deploy`. This will open a website in your browser for authorization. To streamline deployment you can also set the required token as an environment variable on your machine.

### GitHub Actions and GitLab CI/CD

Ensure that you have the necessary permissions and configurations set up in GitHub or GitLab. This includes providing the access token from Deno Deploy as a variable with key `DENO_DEPLOY_TOKEN`.

Pushes to any branch trigger the pipeline to lint, test and deploy. Pushes to the the `main` branch are deployed to production.
