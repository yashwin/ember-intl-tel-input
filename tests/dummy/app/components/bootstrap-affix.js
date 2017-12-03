import Component from '@ember/component';
import { computed } from '@ember/object';
import $ from 'jquery';

export default Component.extend({

  /**
   * @property after
   * @type String|jQuery|Node
   * @default null
   */
  after: null,

  /**
   * @property autoPosition
   * @type Boolean
   * @default false
   */
  autoPosition: false,

  /**
   * @property initialOffsetTop
   * @type Number
   */
  initialOffsetTop: null,

  /**
   * @property offsetTopFunc
   * @type Function
   */
  offsetTopFunc: computed('after', function() {
    var self = this;

    return function() {
      var $after = $(self.get('after')).eq(0);

      if (0 === $after.length) {
        return self.get('initialOffsetTop');
      }

      return $after.offset().top + $after.outerHeight();
    };
  }),

  /**
   * @property offsetTop
   * @type Number
   * @default 10
   */
  offsetTop: 10,

  /**
   * @property affixedOffsetTop
   * @type Number
   */
  affixedOffsetTop: computed('after', function() {
    var $after = $(this.get('after')).eq(0);

    if (0 === $after.length) {
      return this.get('offsetTop');
    }

    return this.get('initialOffsetTop') - ($after.offset().top + $after.outerHeight());
  }),

  didInsertElement: function() {
    var self = this;

    self.set('initialOffsetTop', self.$().offset().top);

    if (true === self.get('autoPosition')) {

      self.$()
        .on('affix.bs.affix affixed.bs.affix', function() {
          self.$().css('top', self.get('affixedOffsetTop'));
        })
        .on('affixed-top.bs.affix', function() {
          self.$().css('top', '');
        });
    }

    self.$().affix({
      offset: {
        top: self.get('offsetTopFunc'),
      },
    });
  },

});
