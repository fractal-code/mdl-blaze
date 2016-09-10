// Select input element

import { Template } from 'meteor/templating';
import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  jquery: '2.2.4',
}, 'talos:forms');

const $ = require('jquery');

Template.selectInput.events({
  'click .js-select-item'(e, tmpl) {
    const $selectInput = tmpl.$('.js-select-input');
    // Set select input value
    $selectInput.val($(e.currentTarget).text());
    // Emit change event
    $selectInput.trigger('change');
  },
  'focus .js-select-input'(e) {
    $(e.currentTarget).parents('.js-select-input-container').addClass('is-focused is-dirty');
  },
  'blur .js-select-input'(e) {
    const $currentTarget = $(e.currentTarget);
    $currentTarget.parents('.js-select-input-container').removeClass('is-focused');
  },
});
