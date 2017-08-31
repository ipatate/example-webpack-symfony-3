// file with boostrap js component required
require('./bootstrap');
// style css for webpack builder
require('../scss/main.scss');

$(() => {
  $('[data-toggle="popover"]').popover();
});
