// Routes

import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { FlowRouterTitle } from 'meteor/ostrio:flow-router-title';

// Homepage
FlowRouter.route('/', {
  name: 'home',
  title: 'Homepage',
  action() {
    BlazeLayout.render('default', { main: 'homePage' });
  },
});

// Others
FlowRouter.notFound = {
  action() {
    FlowRouter.go('home');
  },
};


// Definition for title
new FlowRouterTitle(FlowRouter); // eslint-disable-line no-new

FlowRouter.globals.push({
  title: 'Loading',
});
