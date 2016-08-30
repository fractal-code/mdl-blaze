// Auth input element

import { ReactiveForms } from 'meteor/templates:forms';

ReactiveForms.createElement({
  template: 'authInput',
  validationEvent: 'input',
});
