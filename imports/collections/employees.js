// Declare our collection
import { Mongo } from 'meteor/mongo';

// Create and export collection
export const Employees = new Mongo.Collection('employees');
