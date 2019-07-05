import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  initializeComplete,
  loadBridgeScripts,
  registerOnInteraction,
  clickToDial,
  setAppHeight
} from '@amc-technology/davinci-api';

class App extends Component {
  interactions = {};

  constructor() {
    super();
    this.initializeAMC();
    setAppHeight(100);
  }

  async initializeAMC() {
    console.log('CRM awaiting bridgeScripts');
    await loadBridgeScripts([
      'https://na82.salesforce.com/support/api/25.0/interaction.js',
      `${window.location.origin}/bridge.js`
    ]);

    console.log('CRM adding event listener');
    window.addEventListener('message', event => {
      if (event.data.from === 'SampleCrmAppBridge') {
        if (event.data.type === 'ClickToDial' && event.data.phoneNumber) {
          clickToDial(event.data.phoneNumber);
          console.log(event.data.phoneNumber);
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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
