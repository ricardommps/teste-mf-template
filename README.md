# collabra-mf-template

## What is this?

The microfrontend that runs inside the ["collabra-mf-dashboard"](https://github.com/collabratech/collabra-mf-dashboard)

## How does it work?

[Full article](https://single-spa.js.org/docs/recommended-setup)

This repository is a javascript project that creates a javascript bundle that is an in-browser javascript module (explanation on youtube / bilibili). The currently deployed version of the in-browser module can be seen at https://collabramf.blob.core.windows.net/mf-dashboard/importmap-stg.json.

This project uses [React](https://reactjs.org) and was created with the [create-single-spa](https://single-spa.js.org/docs/create-single-spa) CLI. It uses webpack and babel.

Whenever a pull request is merged to master, [CircleCI builds and deploys the project](https://circleci.com/gh/react-microfrontends/navbar). The ["workflows" view](https://circleci.com/gh/react-microfrontends/workflows) (pictured below) can be seen if you are logged into CircleCI. Deployments for this in-browser module are completely independent of deployments for any other module.

![image](https://user-images.githubusercontent.com/5524384/75210801-5ba02700-573f-11ea-8064-46af165cba0a.png)

## Local development

[Full documentation](https://single-spa.js.org/docs/recommended-setup#local-development)

Tutorial video: [youtube](https://www.youtube.com/watch?v=vjjcuIxqIzY&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=4) / [bilibili](https://www.bilibili.com/video/av83617789/)

There are two ways to do local development. It is preferred to do one module at a time, whenever possible.

### One module at a time

```sh
yarn
yarn start
```

Note that you may use whichever port you would like to. Go to https://localhost:8000/collabra-mf-listing-site-now.js and verify that you are able to load the file without any SSL problems. To solve SSL problems, see [these instructions](https://improveandrepeat.com/2016/09/allowing-self-signed-certificates-on-localhost-with-chrome-and-firefox/).

Now, go to https://gentle-river-08872aa1e.azurestaticapps.net/ls/customize/:orderID. In the browser console, run the following:

```js
localStorage.setItem("devtools", true);
```

Refresh the page. Click on the tan / beige rectangle:

![image](https://user-images.githubusercontent.com/5524384/75211359-e46b9280-5740-11ea-80bb-974846df414b.png)

Set an [import map override](https://github.com/joeldenning/import-map-overrides/) to `8000`.

![image](https://user-images.githubusercontent.com/5524384/75211553-7e333f80-5741-11ea-97d6-d3d86ffd1826.png)

Refresh the page. Your local code for this module will now be running on https://gentle-river-08872aa1e.azurestaticapps.net/ls/customize/:orderID. You may make changes locally and refresh the page to see them.

### All modules together

Run the collabra-mf-dashboard project locally:

cd ["collabra-mf-dashboard"](https://github.com/collabratech/collabra-mf-dashboard)

```
yarn
yarn start
```

Now follow the steps above for "One module at a time" for each of the modules you wish to work on.
