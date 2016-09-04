// Helpers typeahead

import { Template } from 'meteor/templating';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Template.typeAhead.helpers({
  schema() {
    return new SimpleSchema({
      defaultOutgoingNumber: {
        type: String,
        regEx: /^\+?[0-9]{3}-?[0-9]{6,12}$/,
      },
    });
  },
  demoData() {
    return {
      target: 'test',
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
