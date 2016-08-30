// Text input element

import { ReactiveForms } from 'meteor/templates:forms';

ReactiveForms.createElement({
  template: 'textInput',
  validationEvent: 'blur',
});
