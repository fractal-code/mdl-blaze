// Text input element

import { Template } from 'meteor/templating';
import { ReactiveForms } from 'meteor/templates:forms';
import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
import $ from 'jquery';

checkNpmVersions({
  'md-date-time-picker': '2.2.0',
}, 'talos:forms');

checkNpmVersions({
  jquery: '3.1.1',
}, 'talos:forms');

const mdDateTimePicker = require('md-date-time-picker');


ReactiveForms.createElement({
  template: 'dateInput',
  validationEvent: 'change',
  validationValue(el, clean, template) {
    return new Date($(el).attr('data-value'));
  }
});

Template.dateInput.onRendered(function () {
  const $reactiveElement = this.$('.reactive-element');

  const timeOptions = Template.currentData().options;

  if (!timeOptions.mdDateTimePicker.type) timeOptions.mdDateTimePicker.type = 'date';
  const dialog = new mdDateTimePicker.default(timeOptions.mdDateTimePicker);

  this.autorun(() => {
    // If options exist:
    // 1 - Add the event handler to toggle the dialog
    // 2 - Attach the input to the trigger (for the onOk to work)
    // 3 - Add event onOk to get the date
    if (timeOptions) {
      this.$(timeOptions.element).click(() => {
        dialog.toggle();
      });

      dialog.trigger = this.$(timeOptions.element)[0];

      $(timeOptions.element).on('onOk', (event) => {
        this.$(event.target)
          .val(dialog.time.format(timeOptions.moment.format))
          .parent()
          .addClass('is-dirty');

        // Save date
        // Trigger 'change' event handler for reactive element
        $reactiveElement
          .attr('data-value', dialog.time.toDate())
          .trigger('change');
      });
    }
  });
});
