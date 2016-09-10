//Text input element

import { ReactiveForms } from 'meteor/templates:forms';

ReactiveForms.createElement({
  template: 'timeInput',
  validationEvent: 'blur',
});
