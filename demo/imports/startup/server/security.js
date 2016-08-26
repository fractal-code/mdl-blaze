// Implement security defaults

import { Meteor } from 'meteor/meteor';
import { BrowserPolicy } from 'meteor/browser-policy-common';

// Allow rules for Browser Policy
BrowserPolicy.content.allowOriginForAll('fonts.googleapis.com');
BrowserPolicy.content.allowOriginForAll('fonts.gstatic.com');
BrowserPolicy.content.allowOriginForAll('*.stripe.com');
BrowserPolicy.content.allowOriginForAll('res.cloudinary.com');
BrowserPolicy.content.allowOriginForAll('www.google-analytics.com');
BrowserPolicy.content.allowOriginForAll('stats.g.doubleclick.net');
BrowserPolicy.content.allowOriginForAll('www.google.com.au');
BrowserPolicy.content.allowInlineStyles();
