window.addEventListener("message", event => { // start listening for events
    if (event.data.from == 'SampleCrmApp') { // make sure events are from our app
        if (event.data.type == 'Initialize') {
            let sampleCrmAppWindow = event.source;
            sforce.interaction.cti.enableClickToDial(() => { }); // enables click to dial feature in salesforce
            sforce.interaction.cti.onClickToDial(event => { // listen for click to dial events and post them to App.js
                sampleCrmAppWindow.postMessage({
                    from: 'SampleCrmAppBridge',
                    type: 'ClickToDial',
                    phoneNumber: JSON.parse(event.result).number
                }, '*');
            });
        }

        if (event.data.type === 'Screenpop' && event.data.phoneNumber) { // perform a screenpop on provided phoneNumber
            sforce.interaction.searchAndScreenPop(event.data.phoneNumber, '', 'inbound', result => {
                if (result.error) {
                    console.error(`Problem performing screenpop! ${result.error}`);
                } else {
                    console.log('Successful screenpop!');
                }
            });
        }

    }
});
