// Text input element

import { Template } from 'meteor/templating';
import { ReactiveForms } from 'meteor/templates:forms';

ReactiveForms.createElement({
  template: 'sliderInput',
  validationEvent: 'input',
});

Template.slideInput.helpers({
  getOptions(options) {
    return options;
  },
});
