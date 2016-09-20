// Helpers textInput

import { Template } from 'meteor/templating';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Template.timeDemo.helpers({
  schema() {
    return new SimpleSchema({
      demoFieldTime: {
        type: String,
        label: 'Demo',
      },
    });
  },
  optionsTime() {
    return {
      element: '#demoFieldTime',
      moment: {
        format: 'LT',
      },
      mdDateTimePicker: {
        type: 'time',
      },
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
