# Bonsai Writer Product Website Rebuild

This is a (partial) rebuild of the original product website for Bonsai Writer.

I developed it as an exercise for myself, as a kind of “coding kata”. I used:

- [Svelte 5 and SvelteKit](https://svelte.dev)
- UI/Design: [Skeleton](https://www.skeleton.dev) and [Tailwind CSS](https://tailwindcss.com)
- Linting: [ESLint](https://eslint.org)
- Testing: [Vitest](https://vitest.dev) and [Playwrigth](https://playwright.dev)
- CI/CD: [GitLab](https://gitlab.com)
- Deployment/Hosting: [Deno Deploy](https://deno.com/deploy)

## Bonsai Writer?

Bonsai Writer was an innovative text writing software for Linux, macOS, and Windows. It's special power was: Seperation of the strucured text from the design. This applies to the process of writing as well as to the data produced by Bonsai Writer. And in contrast to other approaches that does this, Bonsia Writer provides a rather familiar way of text writing and provides a beautiful, easy to use user interface.

We started Bonsai Writer in 2017, inside the company [SALT AND PEPPER](https://salt-and-pepper.eu). In 2019, we had to stop further development.

## Developing

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

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deploying

For deploying to Deno Deploy you need to setup an account first.

Deployment is usually done by pipeline the runs, when pushing new commits. See [.gitlab-ci-yml](./.gitlab-ci.yml). For authorization you need to create an access token that you provide in GitLab as environment variable `DENO_DEPLOY_TOKEN`.

If you want to deploy from your local machine you can run `npm run deno-deploy`. This will open a website in your browser for authorization. To streamline deployment you can also set the required token as an environment variable on your machine.
