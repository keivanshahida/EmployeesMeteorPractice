import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

	return (
		<div>Hello there!</div>
	);
};

// After Meteor loads in the browser, render my app to the ReactDOM
Meteor.startup(() => {
	//React render call
	ReactDOM.render(<App />, document.querySelector('.container'));
});