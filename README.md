# Remix Experimental

This repo is just a space for me to experiment with and learn Remix.

Main goals are to compare how Remix works with client-side and server-side components. How it works compared to other frameworks / libraries such as Next JS. Look into how easy it is to deploy and run on AWS (mostly it's SSR that could get interesting). Finally explore how it handles being used in a micro frontend architecture.

The basic premise of this app is to grab some data from airtable and display. In this case as a Flash Card type of app.

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```

## Additional config

### Tailwind

Follow the remix setup guidelines https://remix.run/docs/en/v1/guides/styling#tailwind-css
