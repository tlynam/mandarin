// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function() {
  $(".english_phrase").click(function() {
    $(".chinese_translations").toggle()
  })

  $("#pinyin_attempt").keypress(function (e) {
   var key = e.which;
   if(key == 13)  // the enter key code
    {
      if($("#pinyin_attempt").val().toLowerCase() === $(".pinyin_translation").text().trim()) {
        $(".pinyin_success").css('display', 'inline');
        $(".pinyin_failure").hide()
      } else if($("#pinyin_attempt").val().toLowerCase() === $(".pinyin_translation_no_accent").text().trim()) {
        $(".pinyin_success").css('display', 'inline');
        $(".pinyin_failure").hide()
      } else {
        $(".pinyin_success").hide()
        $(".pinyin_failure").css('display', 'inline');
      }
    }
  })

  $("#simplified_attempt").keypress(function (e) {
   var key = e.which;
   if(key == 13)  // the enter key code
    {
      if($("#simplified_attempt").val() === $(".simplified_translation").text().trim()) {
        $(".simplified_success").css('display', 'inline');
        $(".simplified_failure").hide()
      } else {
        $(".simplified_success").hide()
        $(".simplified_failure").css('display', 'inline');
      }
    }
  })
})
