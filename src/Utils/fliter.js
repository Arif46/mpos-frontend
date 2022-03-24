import Vue from 'vue'
import moment from 'moment'
import i18n from '../i18n'
import Store from '../store/index'

function formatNumber (value) {
  return Number(value).toLocaleString()
}
const formatForDate = 'DD/MM/YYYY'

function dateFormat (value, format = formatForDate) {
    require('moment/min/locales.min.js')
    moment.locale(i18n.locale)
    return moment(value).format(format)
}
function convertName(str) {
  var i, frags = str.split('_');
  for (i=0; i<frags.length; i++) {
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
  }
  return frags.join(' ');
}

Vue.filter('convertName', function (value) {
  return convertName(value)
})

Vue.filter('dateFormat', function (value) {
  return dateFormat(value)
})


export { dateFormat, convertName }
