import 'bootstrap'; // eslint-disable-line

require('../scss/main.scss');

const $ = require('jquery');

$(() => {
  $('[data-toggle="popover"]').popover();
});
