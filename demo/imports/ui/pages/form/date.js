// Helpers date

import { Template } from 'meteor/templating';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Template.dateDemo.helpers({
  schema() {
    return new SimpleSchema({
      demoFieldDate: {
        type: String,
      },
    });
  },
  optionsDate() {
    return {
      element: '#demoFieldDate',
      moment: {
        format: 'DD/MM/YYYY',
      },
      mdDateTimePicker: {
        type: 'date',
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

// if (!ReactiveForms.timeOptions) {
//   ReactiveForms.timeOptions = new ReactiveVar({});
//   ReactiveForms.timeOptions.set({ element: '#demoFieldDate' });
// } else {
//
// }
//
