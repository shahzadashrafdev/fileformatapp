$(function () {
  $(".filelist").sortable();
  $(".filelist").disableSelection();
  $(".range-list-custom").sortable();
  $(".range-list-custom").disableSelection();
});

$(".sidebar-hide i.bi-chevron-left").on("click", function (e) {
  e.preventDefault();
  $(".sidebar-hide .bi-chevron-left").addClass("d-none");
  $(".sidebar-hide .bi-chevron-right").removeClass("d-none");
  $(".sidesticky").toggleClass("stickyoff");
  $(".sidebarfeatures").toggleClass("slideoff");
});

$(".sidebar-hide i.bi-chevron-right").on("click", function (e) {
  e.preventDefault();
  $(".sidebar-hide i.bi-chevron-right").addClass("d-none");
  $(".sidebar-hide i.bi-chevron-left").removeClass("d-none");
  $(".sidesticky").toggleClass("stickyoff");
  $(".sidebarfeatures").toggleClass("slideoff");
});

$(".up-addfile").on("click", function (e) {
  e.preventDefault();
  $(".dropfilebox").removeClass("d-none");
});
$(".cancelupload").on("click", function (e) {
  e.preventDefault();
  $(".dropfilebox").addClass("d-none");
});
$("#file-upload").change(function () {
  $(".sidebar-hide .bi-chevron-left").addClass("d-none");
  $(".sidebar-hide .bi-chevron-right").removeClass("d-none");
  $(".sidesticky").toggleClass("stickyoff");
  $(".sidebarfeatures").toggleClass("slideoff");
});

$("#more-file-upload").change(function () {
  $(".dropfilebox").addClass("d-none");
  $(".processmsg").removeClass("d-none");
  setTimeout(function () {
    $(".processmsg").addClass("d-none");
  }, 3000);
});

$(".btn-process").on("click", function (e) {
  e.preventDefault();
  $(".sidebar-hide i.bi-chevron-right").addClass("d-none");
  $(".sidebar-hide i.bi-chevron-left").removeClass("d-none");
  $(".sidesticky").toggleClass("stickyoff");
  $(".sidebarfeatures").toggleClass("slideoff");
  $(".addfilesection").addClass("d-none");
  $(".progressbar").removeClass("d-none");
  setTimeout(function () {
    $(".progressbar").addClass("d-none");
    $(".fileprocessdownload").removeClass("d-none");
  }, 5000);
});

$(".main-uplink").on("click", function (e) {
  e.preventDefault();
  $(".up-link .img1").toggleClass("d-none");
  $(".up-link .img2").toggleClass("d-none");
  $("#uploadfilepath").toggleClass("showbox");
});
$(".email-link").on("click", function (e) {
  e.preventDefault();
  $("#sharefilepath").removeClass("showbox");
  $(".share-file-link .slink1").removeClass("d-none");
  $(".share-file-link .slink2").addClass("d-none");

  $(".email-link .email1").toggleClass("d-none");
  $(".email-link .email2").toggleClass("d-none");
  $("#emailfilepath").toggleClass("showbox");
});
$(".share-file-link").on("click", function (e) {
  e.preventDefault();
  $("#emailfilepath").removeClass("showbox");

  $(".email-link .email1").removeClass("d-none");
  $(".email-link .email2").addClass("d-none");

  $(".share-file-link .slink1").toggleClass("d-none");
  $(".share-file-link .slink2").toggleClass("d-none");
  $("#sharefilepath").toggleClass("showbox");
});
$(".sidelinkbtn").click(function (e) {
  e.preventDefault();
  $(".sidelinkbtn .img1").toggleClass("d-none");
  $(".sidelinkbtn .img2").toggleClass("d-none");
  $(".popover-tag-side").toggleClass("showbox");
  $("#emailfilepath").removeClass("showbox");
  $("#sharefilepath").removeClass("showbox");
});
 $('.rotatebtn').on('click', function(e){
   e.preventDefault();
   $(this).closest('.filebox').find('.fileboximg img').toggleClass('rotatepdf');
 })

 $('.extractmode #radio4').change(function() {
  $('.extract-all').toggleClass('d-none')
  $('.extract-select').toggleClass('d-none')
});
$('.extractmode #radio3').change(function() {
  $('.extract-all').toggleClass('d-none')
  $('.extract-select').toggleClass('d-none')
});



$('.rangemode #radio1').change(function() {
  $('.range-list-custom').toggleClass('d-none')
  $('.range-list-fixed').toggleClass('d-none')
});
$('.rangemode #radio2').change(function() {
  $('.range-list-custom').toggleClass('d-none')
  $('.range-list-fixed').toggleClass('d-none')
});
