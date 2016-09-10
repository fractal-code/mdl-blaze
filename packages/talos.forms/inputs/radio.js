// Radio input element

import { ReactiveForms } from 'meteor/templates:forms';

ReactiveForms.createElement({
  template: 'radioInput',
  validationEvent: 'change',
});
