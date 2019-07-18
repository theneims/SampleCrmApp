import React, { Component } from 'react';
import './App.css';
import {
  initializeComplete,
  loadBridgeScripts,
  registerOnInteraction,
  clickToDial,
  getPresence,
  registerOnPresenceChanged
} from '@amc-technology/davinci-api';

/**
 * This is a React Based CRM Application Sample Template for DaVinci Creators Studio
 * using Salesforce Lightning.
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  interactions = {};
  clickToDial = false;

  constructor() {
    super();
    this.initializeAMC();
  }

  /**
   * This function loads all of the bridge scripts associated with Salesforce
   *
   * @memberof App
   */
  async initializeAMC() {
    console.log('CRM: Loading bridgeScripts');
    let salesforceOrg = 'https://na132.salesforce.com';
    await loadBridgeScripts([
      `${window.location.origin}/bridge.js`,
      salesforceOrg + '/support/console/44.0/integration.js',
      salesforceOrg + '/support/api/44.0/lightning/opencti_min.js'
    ]);

    console.log('CRM adding event listener');
    window.addEventListener('message', event => {
      // This listens for events from the Bridge, add other events to listen to here
      if (event.data.from === 'SampleCrmAppBridge') {
        console.log(`Caught Bridge Event`);
        if (event.data.type === 'ClickToDial' && event.data.phoneNumber) {
          // clickToDial() sends out a call to any app listening through the DaVinci api.
          clickToDial(event.data.phoneNumber);
          console.log(`CRM: Caught click to dial ${event.data.phoneNumber}`);
        }
      }
    });

    window.parent.postMessage(
      {
        // initialize bridge.js
        from: 'SampleCrmApp',
        type: 'Initialize'
      },
      '*'
    );

    // registerInteraction() handles events that are triggered by a change in an interaction.
    await registerOnInteraction(interaction => {
      if (!this.interactions[interaction.interactionId]) {
        // first time seeing this interaction
        this.interactions[interaction.interactionId] = interaction; // mark that we have seen it
        window.parent.postMessage(
          {
            // tell bridge.js to perform a screenpop
            from: 'SampleCrmApp',
            type: 'Screenpop',
            phoneNumber: interaction.details.getPhone().Value
          },
          '*'
        );
      }
    });

    await initializeComplete();
  }

  render() {
    return <div>CRM App</div>;
  }
}

export default App;
