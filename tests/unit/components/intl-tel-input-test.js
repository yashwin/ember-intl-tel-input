/* global emberIntlTelInputConfig */

import { moduleForComponent, test } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';
import sinon from 'sinon';
import { run } from '@ember/runloop';
import jQuery from 'jquery';

moduleForComponent('intl-tel-input', 'Unit | Component | intl-tel-input', {
  unit: true,
  beforeEach() {
    sinon.spy(jQuery.fn, 'intlTelInput');
  },
  afterEach() {
    jQuery.fn.intlTelInput.restore();
  }
});

test('it renders', function(assert) {
  assert.expect(4);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');

  var element = component.$()[0];
  assert.equal(element.tagName.toLowerCase(), 'input');
  assert.equal(element.type.toLowerCase(), 'tel');
});

test('setupIntlTelInput', function(assert) {
  assert.expect(1);

  this.render();
  assert.ok(jQuery.fn.intlTelInput.called, 'intlTelInput called');
});

test('properties binded to plugin', function(assert) {
  assert.expect(1);

  var component = this.subject();
  component.setProperties({
    allowDropdown: 'allow dropdown',
    autoHideDialCode: 'auto hide dial code',
    autoPlaceholder: 'auto placeholder',
    customPlaceholder: 'custom placeholder',
    dropdownContainer: 'dropdown container',
    excludeCountries: ['co', 'es'],
    formatOnDisplay: 'format on display',
    geoIpLookup: 'geo ip lookup',
    initialCountry: 'us',
    nationalMode: 'national mode',
    numberType: 'MOBILE',
    onlyCountries: ['us'],
    preferredCountries: ['us'],
    separateDialCode: 'separate dial code'
  });

  this.render();

  assert.deepEqual(jQuery.fn.intlTelInput.args[0][0], {
      allowDropdown: 'allow dropdown',
      autoHideDialCode: 'auto hide dial code',
      autoPlaceholder: 'auto placeholder',
      customPlaceholder: 'custom placeholder',
      dropdownContainer: 'dropdown container',
      excludeCountries: ['co', 'es'],
      formatOnDisplay: 'format on display',
      geoIpLookup: 'geo ip lookup',
      initialCountry: 'us',
      nationalMode: 'national mode',
      numberType: 'MOBILE',
      placeholderNumberType: 'MOBILE',
      onlyCountries: ['us'],
      preferredCountries: ['us'],
      separateDialCode: 'separate dial code',
      utilsScript: emberIntlTelInputConfig.utilsScript || ''
    }, 'intlTelInput called with arguments');
});

test('it syncs the component value to the input value', function(assert) {
  assert.expect(3);

  var component = this.subject();
  this.render();

  run(() => {
    component.set('value', 'old value');
  });

  var el = component.$();

  assert.equal(el.val(), 'old value');

  run(() => {
    el.val('new value');
    el.change();
  });

  return wait().then(() => {
    assert.equal(el.val(), 'new value');
    assert.equal(component.get('value'), 'new value');
  });
});

test('isValidNumber', function(assert) {
  assert.expect(1);

  var component = this.subject();
  component.set('initialCountry', 'us');
  component.set('value', '12065555555');
  this.render();

  return wait().then(() => {
    assert.ok(component.get('isValidNumber'), 'isValidNumber');
  });
});

test('selectedCountryData', function(assert) {
  assert.expect(1);

  var component = this.subject();
  component.set('onlyCountries', ['us']);
  component.set('initialCountry', 'us');
  this.render();

  assert.deepEqual(component.get('selectedCountryData'), {
    'areaCodes': null,
    'dialCode': '1',
    'iso2': 'us',
    'name': 'United States',
    'priority': 0
  });
});

test('extension', function(assert) {
  assert.expect(1);

  var component = this.subject();
  component.set('numberFormat', 'E164');
  component.set('value', '+12065555555 ext. 12345');
  this.render();

  assert.equal(component.get('extension'), '12345');
});

test('number', function(assert) {
  assert.expect(1);

  var component = this.subject();
  component.set('initialCountry', 'us');
  component.set('numberFormat', 'E164');
  component.set('value', '1 206 555 5555 ext. 12345');
  this.render();

  return wait().then(() => {
    assert.equal(component.get('number'), '+12065555555');
  });
});
