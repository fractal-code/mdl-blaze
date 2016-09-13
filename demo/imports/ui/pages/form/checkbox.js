// Helpers textInput

import { Template } from 'meteor/templating';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Template.checkboxDemo.helpers({
  schema() {
    return new SimpleSchema({
      demoCheckbox: {
        type: String,
      },
    });
  },
  optionsCheckbox() {
    return [
      { field: '1', description: 'Description 1' },
      { field: '2', description: 'Description 2' },
    ];
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
