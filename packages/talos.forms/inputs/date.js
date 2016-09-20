// Text input element

import { Template } from 'meteor/templating';
import { ReactiveForms } from 'meteor/templates:forms';
import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
import { Tracker } from 'meteor/tracker';

checkNpmVersions({
  'md-date-time-picker': '2.2.0',
}, 'talos:forms');

checkNpmVersions({
  jquery: '2.2.4',
}, 'talos:forms');

const mdDateTimePicker = require('md-date-time-picker');
const $ = require('jquery');

ReactiveForms.createElement({
  template: 'dateInput',
  validationEvent: 'input',
});

Template.dateInput.onRendered(() => {
  const timeOptions = Template.currentData().options;

  if (!timeOptions.mdDateTimePicker.type) timeOptions.mdDateTimePicker.type = 'date';
  // Create new Date dialog
  const dialog = new mdDateTimePicker.default(timeOptions.mdDateTimePicker);

  // Get field options
  Tracker.autorun(() => {
    // If options exist:
    // 1 - Add the event handler to toggle the dialog
    // 2 - Attach the input to the trigger (for the onOk to work)
    // 3 - Add event onOk to get the date
    if (timeOptions) {
      $(timeOptions.element).click(() => {
        dialog.toggle();
      });

      dialog.trigger = $(timeOptions.element)[0];

      $(timeOptions.element).on('onOk', (event) => {
        $(event.target).val(dialog.time.format(timeOptions.moment.format));
      });
    }
  });
});
