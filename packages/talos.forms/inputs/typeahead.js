// Typeahead input element

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Blaze } from 'meteor/blaze';
import { ReactiveForms } from 'meteor/templates:forms';
import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  jquery: '2.2.4',
}, 'talos:forms');

const $ = require('jquery');

ReactiveForms.createElement({
  template: 'typeahead',
  validationEvent: 'change',
});

Template.typeahead.onRendered(function () {
  let valueKey = null;
  let $reactiveElement = null;

  // Get value key from template data context
  valueKey = this.data.valueKey;

  // Inject data
  Meteor.typeahead.inject();

  // Set input value to data for the chosen value key
  this.$('.typeahead-container-js').on('typeahead:select', (e, obj) => {
    $reactiveElement = $(e.currentTarget).find('.reactive-element');

    $reactiveElement.val(obj[valueKey]);
    // Trigger 'change' event handler for reactive element
    $reactiveElement.trigger('change');
  });
});

Template.typeahead.helpers({
  getOptions(options) {
    const typeaheadOptions = options;

    // If we don't receive a valid template, use the default
    if (!(Template[typeaheadOptions['data-template']] instanceof Blaze.Template)) {
      typeaheadOptions['data-template'] = 'defaultTypeahead';

      if (typeaheadOptions['data-value-key'] !== 'data') {
        throw new Meteor.Error('If no template is passed, use \'data\' for \'data-value-key\'');
      }
    }
    return typeaheadOptions;
  },
});

Template.typeahead.events({
  'focus .typeahead-input-js'(event) {
    $(event.currentTarget)
      .parents('.typeahead-container-js')
      .addClass('is-focused is-dirty');
  },
  'blur .typeahead-input-js'(event) {
    const $currentTarget = $(event.currentTarget);
    $currentTarget
      .parents('.typeahead-container-js')
      .removeClass('is-focused');
  },
});
