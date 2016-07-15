// Only executed on the server
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';

//Use faker and lodash for fake data generation
import _ from 'lodash';
import { image, helpers } from 'faker';

Meteor.startup(() => {
	//Great place to generate data

	//Check if data exists in collection 
	const numberRecords = Employees.find({}).count();
	if(!numberRecords) {
		//Generate some data
		_.times(5000, () => {
			const { name, email, phone } = helpers.createCard();
			
			Employees.insert({
				name, email, phone,
				avatar: image.avatar()
			});
		});
	}

	// Add a limit statement to limit number of employees displayed
	Meteor.publish('employees', function(){
		return Employees.find({}, {limit: 20});
	});
});

//DONT FORGET meteor remove autopublish