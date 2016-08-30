// Helpers Home page

import { Template } from 'meteor/templating';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Template.homePage.helpers({
  schema() {
    return new SimpleSchema({
      demo: {
        type: String,
        label: 'Demo',
      },
    });
  },
});
