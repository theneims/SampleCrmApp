/**
 * This file communicates between the Salesforce opencti api and the CRM application.
 */
window.addEventListener('message', event => {
  // start listening for events
  if (event.data.from === 'SampleCrmApp') {
    console.log(`Bridge: Event raised ${event.data.type}`);
    // make sure events are from our app
    if (event.data.type === 'Initialize') {
      console.log(`Bridge: Initializing Bridge Events`);
      // let sampleCrmAppWindow = event.source;

      sforce.opencti.enableClickToDial({
        callback: function(result) {
          if (result.success) {
            console.log('Bridge: Click to dial enabled successfully.');
          } else {
            console.log('Bridge: Click to dial failed to enable.');
          }
        }
      }); // Enables click to dial feature in salesforce.

      sforce.opencti.onClickToDial({
        listener: async function clickToDialListener(payload) {
          event.source.postMessage(
            {
              from: 'SampleCrmAppBridge',
              type: 'ClickToDial',
              phoneNumber: payload.number
            },
            '*'
          );
          console.log(`Bridge: Dialing ${payload.number}`);
        }
      }); // listens for click to dial events in salesforce and then sends them to the api.
    }

    if (event.data.type === 'Screenpop' && event.data.phoneNumber) {
      // This api call searches for a record of a phone number and screen pops to it if it exists
      // or it opens a new account window and populates the phone number field with the given number.
      sforce.opencti.searchAndScreenPop({
        deferred: false,
        searchParams: event.data.phoneNumber,
        callType: sforce.opencti.CALL_TYPE.INBOUND,
        defaultFieldValues: { Phone: event.data.phoneNumber }
      });
    }

    if (event.data.type === 'toggleClickToDial') {
      console.log(`Bridge: toggling click to dial`);
      clickToDial();
    }
  }
});

function clickToDial() {
  sforce.opencti.enableClickToDial({
    callback: function(result) {
      if (result.success) {
        console.log('Bridge: Click to dial enabled successfully.');
      } else {
        console.log('Bridge: Click to dial failed to enable.');
      }
    }
  }); // Enables click to dial feature in salesforce.
}
