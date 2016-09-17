// Text input element

import { ReactiveForms } from 'meteor/templates:forms';
import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

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
  rendered() {
    // const dialog = new mdDateTimePicker.default({
    //   type: 'date',
    // });
    // $('[data-date="mdDateTimePicker"]').click(() => {
    //   dialog.toggle();
    // });

    const dialog = new mdDateTimePicker.default({
      type: 'date',
    });
    $('#demoFieldDate').click(() => {
      dialog.toggle();
    });
    dialog.trigger = document.getElementById('demoFieldDate');
    document.getElementById('demoFieldDate').addEventListener('onOk', (event) => {
      $(event.target).val(dialog.time.format('DD/MM/YYYY'));
    });
  },
});
