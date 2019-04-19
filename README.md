# SampleCrmApp

This project is a sample of using [DaVinci API](https://apidocs.contactcanvas.com/) to integrate a CRM(salesforce) into the [DaVinci Platform](https://www.contactcanvas.com/). This project was original generated with [Create React App](https://github.com/facebook/create-react-app).

This project implements two important features for CRM apps. Screenpop, opening matching records when receiving a phone call, and click to dial, when a phone number is clicked in CRM then start a outbound call. The important files are [App.js](src/App.js) and [bridge.js](public/bridge.js).

To test run the project you need a salesforce organization. If you do not have one you can create a free developer org [here](https://developer.salesforce.com/signup). After that you will have to install and setup the DaVinci managed package, details for this can be found in the setup tab of the Salesforce app in [DaVinci Creators Studio](https://studio.contactcanvas.com).

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

## Running Sample CRM App locally:
* Open a terminal window and navigate inside the folder that contains the Sample CRM App and enter these commands.
* cd SampleCRMApp/
* npm start
* The SampleCRMApp will run on localhost:3000

## Creating the Applications in Studio

* Open the creators studio (https://studio.contactcanvas.com) and navigate to the Edit Apps Section
* Create a new app with the name “SampleCRMApp”
* Navigate to the configurations of the app you just created and enter the url configuration as (localhost:3000)
* Set the position to 'Center (no tabs)'


## Integrating with SalesForce

* Install the DaVinci App for SalesForce (https://login.salesforce.com/packaging/installPackage.apexp?p0=04t0g000000RaCh)
* Edit Softphone Layout: 
	* Type softphone layouts in the Setup Quick Find
	* Click the Menu Link that appears for softphone layouts
	* Click Continue button to pass by the help screen
	* In the work area, click the New button
	* Enter a Name for your new layout
	* Click the Is Default Layout check box
	* Save

* Edit Call Centers
    * Once the App is installed, users must be added to the Salesforce Call Center:
	* Log into Salesforce with administrative privileges
	* Navigate to Setup
	* Type call centers in the quick find
	* Click the Call Centers menu link that appears
	* Click Continue button to pass by the help screen (To learn more about Salesforce Call Centers, select the links provided)
	* Click AMC Salesforce CallCenter (Do Not click Edit)
	* Click the Manage Call Center Users button
	* Click Add More Users button
	* Follow the instructions to filter users and click the Find button (Having agents in specific Profiles, Roles, Departments, etc.. helps with adding agents)
	* Select the users for this call center and click the Add to Call Center button

Classic:
    The above users will now see the Phone Icon in the Utility Bar (Bottom Right)

Lightning:
    Type app manager in the Setup Quick Find
	Click the Menu Link that appears for App Manager
	Edit a Lightning App that requires the Phone
	Click the Utility Bar under APP SETTINGS
	Search for Open CTI Softphone and click the utility bar item that appears
	Change Panel Width to 360
	Save
Agents will now have the Phone panel menu button on the bottom left
