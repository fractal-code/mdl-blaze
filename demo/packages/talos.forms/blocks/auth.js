//Auth form block

ReactiveForms.createFormBlock({
  template: 'authFormBlock',
  submitType: 'normal'
});

Template.authFormBlock.helpers({
  authInProgress: function () {
    return Meteor.loggingIn();
  }
});

Template.authFormBlock.events({
  //Highlight focused row
  'focus .auth-textfield': function (e) {
    $(e.currentTarget).parent('.auth-row').addClass('is-active');
  },
  //Remove highlight from row on blur
  'blur .auth-textfield': function (e) {
    $(e.currentTarget).parent('.auth-row').removeClass('is-active');
  }
});