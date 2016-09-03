// Select input element


Template.selectInput.events({
  'click .js-select-item': function (e, tmpl) {
    var $selectInput = tmpl.$('.js-select-input');
    //Set select input value
    $selectInput.val($(e.currentTarget).text());
    //Emit change event
    $selectInput.trigger('change');
  },
  'focus .js-select-input': function (e) {
    $(e.currentTarget).parents('.js-select-input-container').addClass('is-focused is-dirty');
  },
  'blur .js-select-input': function (e) {
    var $currentTarget = $(e.currentTarget);
    $currentTarget.parents('.js-select-input-container').removeClass('is-focused');
  }
});