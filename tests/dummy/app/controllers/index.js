import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({

  geoIpLookupFunc: function(callback) {
    $.getJSON('https://ipinfo.io/')
     .always(function(resp) {
       if (!resp || !resp.country) {
         callback('');
       }

       callback(resp.country);
     });
  },

});
