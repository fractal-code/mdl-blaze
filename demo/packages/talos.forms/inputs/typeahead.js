//Typeahead input element

//Register element with ReactiveForms
ReactiveForms.createElement({
  template: 'typeahead',
  validationEvent: 'change'
});

Template.typeahead.onRendered(function () {
  var valueKey, $reactiveElement;
  // Get value key from template data context
  valueKey = this.data.valueKey;
  //Inject data
  Meteor.typeahead.inject();

  //Set input value to data for the chosen value key
  this.$(".typeahead-container-js").on('typeahead:select', function (e, obj) {
    $reactiveElement = $(e.currentTarget).find('.reactive-element');
    $reactiveElement.val(obj[valueKey]);
    //Trigger 'change' event handler for reactive element
    $reactiveElement.trigger('change');
  });
});

Template.typeahead.events({
  'focus .typeahead-input-js': function (e) {
    $(e.currentTarget).parents('.typeahead-container-js').addClass('is-focused is-dirty');
  },
  'blur .typeahead-input-js': function (e) {
    var $currentTarget = $(e.currentTarget);
    $currentTarget.parents('.typeahead-container-js').removeClass('is-focused');
  }
});