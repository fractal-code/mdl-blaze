// Helpers textInput

import { Template } from 'meteor/templating';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Template.select.helpers({
  selectSchema() {
    return new SimpleSchema({
      demoField: {
        type: String,
      },
    });
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
  selectOptions() {
    return ['Option 1', 'Option 2', 'Option 3'];
  },
});
