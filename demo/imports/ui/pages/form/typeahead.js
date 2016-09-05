// Helpers typeahead

import { Template } from 'meteor/templating';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Template.typeAhead.helpers({
  schema() {
    return new SimpleSchema({
      demoField: {
        type: String,
        regEx: /^\+?[0-9]{3}-?[0-9]{6,12}$/,
      },
    });
  },
  demoData() {
    return [{
      ownerId: '8uzejCnAqKETaq5LX',
      logo: 'https://res.cloudinary.com/talos/image/upload/wusuxelomwxvu7ixmdcb.jpg',
      balance: 7288.939999999998,
      autoRecharge: true,
      rechargeAmount: '$25',
      minimumBalance: '$50',
      createdAt: 'Fri May 27 2016 15:37:13 GMT+1000 (AEST)',
      stripeCustomerId: 'cus_8Wh5fRKTZmuaZf',
      name: 'Talos',
      country: 'Australia',
    }];
  },
  numbersList() {
    return [{
      country: 'AUSTRALIA',
      number: '61283180767',
      prefix: '283',
      region: 'Sydney, AUSTRALIA',
      sms_enabled: 'false',
      type: 'fixed',
      voice_enabled: 'true',
      organisationId: 't86q2asj2itPjZHe4',
      outgoing: true,
      startTime: '9:00 AM',
      endTime: '9:00 AM',
      answerAction: 'Forward call',
      noAnswerAction: 'Send to voicemail',
      busyAction: 'Send to voicemail',
      ofbAction: 'Forward call',
      createdAt: 'Fri May 27 2016 15:42:16 GMT+1000 (AEST)',
      displayName: 'Forward to Yaser',
      answerConfig: '61450177237',
      ofbConfig: '61450177237',
      isConfigured: true,
      noAnswerConfig: 'Irish voicemail',
      busyConfig: 'Irish voicemail',
    }];
  },
  typeaheadOptions() {
    return {
      name: 'demoField',
      valueKey: 'number',
      description: 'Enter outgoing number',
      source: 'numbersList',
      template: 'numberForwardItem',
      key: 'number',
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
