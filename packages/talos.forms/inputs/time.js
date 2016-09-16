// Time input

import { Template } from 'meteor/templating';
import { ReactiveForms } from 'meteor/templates:forms';
import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  jquery: '2.2.4',
}, 'talos:forms');

const $ = require('jquery');

ReactiveForms.createElement({
  template: 'timeInput',
  validationEvent: 'blur',
});

Template.timeInput.onRendered(function () {console.log('test');
  $('[data-time="pick-a-time"]').lolliclock({ autoclose: true });
});
