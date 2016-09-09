// Helpers typeahead

import { Template } from 'meteor/templating';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Template.typeAhead.onCreated(function () {

});

Template.typeAhead.helpers({
  schema() {
    return new SimpleSchema({
      demoField: {
        type: String,
        regEx: /^\+?[0-9]{3}-?[0-9]{6,12}$/,
      },
    });
  },
  numbersList() {
    return [{
      number: '61283180767',
      displayName: 'Forward to Yaser',
    }];
  },
  typeaheadOptions() {
    return {
      name: 'demoField',
      valueKey: 'number',
      description: 'This is a demo',
      'data-source': 'numbersList',
      'data-template': 'numberForwardItem',
      'data-value-key': 'number',
    };
  },
  action() {
    return function (els, callbacks, changed) {
      console.log('[forms] Action running!');
      console.log('[forms] Form data!', this);
      console.log('[forms] HTML elements with `.reactive-element` class!', els);
      console.log('[forms] Callbacks!', callbacks);
      console.log('[forms] Changed fields!', changed);
      callbacks.success(); // Display success message.
      callbacks.reset();   // Run each Element's custom `reset` function to clear the form.
    };
  },
});
