# SampleCrmApp

This project is a sample of using [DaVinci API](https://apidocs.contactcanvas.com/) to integrate a CRM(salesforce) into the [DaVinci Platform](https://www.contactcanvas.com/). This project was original generated with [Create React App](https://github.com/facebook/create-react-app).

This project implements two important features for CRM apps. Screenpop, opening matching records when receiving a phone call, and click to dial, when a phone number is clicked in CRM then start a outbound call. The important files are [App.js](src/App.js) and [bridge.js](public/bridge.js).

To test run the project you need a salesforce organization. If you do not have one you can create a free developer org [here](https://developer.salesforce.com/signup). After that you will have to install and setup the DaVinci managed package, details for this can be found in the setup tab of the Salesforce app in [DaVinci Creators Studio](https://studio.contactcanvas.com).

After the salesforce org is setup you can run the project with `npm start` then in [Creators Studio](https://studio.contactcanvas.com) create an app with the URL pointing to you local server, http://localhost:3000/ by default, and the position set to 'Center(no tabs)'. Now you are ready to test!

Note that:
- You will have to 'Load Unsafe Scripts' since this app is http and salesforce wants everything to be https
    - In chrome this is a shield icon on the right side of the navbar
- This app only works with salesforce classic(e.g. not compatible with lightning)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
