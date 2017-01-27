// Select input element

import { Template } from 'meteor/templating';
import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
import $ from 'jquery';

checkNpmVersions({
  jquery: '3.1.1',
}, 'talos:forms');

ReactiveForms.createElement({
  template: 'selectInput',
  validationEvent: 'change',
  validationValue(el, clean, template) {
    return $(el).attr('data-val');
  }
});

Template.selectInput.onRendered(function () {
  const getmdlSelect = {
    defaultValue: {
      width: 300,
    },
    addEventListeners(dropdown) {
      const input = dropdown.querySelector('input');
      const list = dropdown.querySelectorAll('li');
      const menu = dropdown.querySelector('.mdl-js-menu');

      // show menu on mouse down or mouse up
      input.onkeydown = function (event) {
        if (event.keyCode == 38 || event.keyCode == 40) {
          menu['MaterialMenu'].show();
        }
      };

      // return focus to input
      if (!menu) return;
      menu.onkeydown = function (event) {
        if (event.keyCode == 13) {
          input.focus();
        }
      };

      [].forEach.call(list, function (li) {
        li.onclick = function () {
          input.value = li.textContent;
          dropdown.MaterialTextfield.change(li.textContent); // handles css class changes
          setTimeout(function () {
            dropdown.MaterialTextfield.updateClasses_(); // update css class
          }, 250);

          // update input with the "id" value
          input.dataset.val = li.dataset.val || '';

          if ("createEvent" in document) {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", false, true);
            input.dispatchEvent(evt);
          } else {
            input.fireEvent("onchange");
          }
        };
      });
    },
    init(selector, widthDef) {
      const dropdowns = document.querySelectorAll(selector);

      [].forEach.call(dropdowns, (i) => {
        getmdlSelect.addEventListeners(i);
        const width = widthDef ? widthDef : (i.querySelector('.mdl-menu') && i.querySelector('.mdl-menu').offsetWidth ? i.querySelector('.mdl-menu').offsetWidth : getmdlSelect.defaultValue.width);
        i.style.width = width + 'px';
      });
    },
  };

  getmdlSelect.init('.getmdl-select');
  document.addEventListener('DOMNodeInserted', function (ev) {
    if (ev.relatedNode.querySelectorAll('.getmdl-select').length > 0) {
      componentHandler.upgradeDom();
    }
  }, false);
});

Template.selectInput.events({
  'click .js-select-item'(e, template) {
    const $selectInput = template.$('.js-select-input');
    // Set select input value
    $selectInput.val($(e.currentTarget).text());

    // Emit change event
    $selectInput.trigger('change');
    template.$('.reactive-element').trigger('change');
  },
  'focus .js-select-input'(e) {
    $(e.currentTarget)
      .parents('.js-select-input-container')
      .addClass('is-focused is-dirty');
  },
  'blur .js-select-input'(e) {
    const $currentTarget = $(e.currentTarget);
    $currentTarget
      .parents('.js-select-input-container')
      .removeClass('is-focused');
  },
});
