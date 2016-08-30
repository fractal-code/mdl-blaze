// Text input element

import { Template } from 'meteor/templating';
import { ReactiveForms } from 'meteor/templates:forms';

ReactiveForms.createElement({
  template: 'textInput',
  validationEvent: 'input',
});

Template.textInput.helpers({
  see(a) {
    console.log(a);
  },
});
