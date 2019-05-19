// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require rails-ujs
//= require bootstrap
$(document).ready(function() {
    var $category_check_boxes =$("input[name='post[category]']");
    var $tag_check_boxes =$("input[name='post[tag]']");
    $category_check_boxes.click(function () {
        if(this.checked){
            $category_check_boxes.prop('checked', false);
            $(this).prop('checked', true);
            redirectUrl();
        }else{
            $category_check_boxes.prop('checked', false);
            $(this).prop('checked', false);
            redirectUrl();
        }
    });

    $tag_check_boxes.click(function () {
        if(this.checked){
            $tag_check_boxes.prop('checked', false);
            $(this).prop('checked', true);
            redirectUrl();
        }else{
            $tag_check_boxes.prop('checked', false);
            $(this).prop('checked', false);
            redirectUrl();
        }
    });
});
function redirectUrl() {
    var category = $("input[name='post[category]']:checked").val();
    var tag = $("input[name='post[tag]']:checked").val();
    var url = '/posts';
    if(category)
        url = url + '/languages/' + category + '/';
    if(category && tag)
        url += tag;
    else if(tag)
        url += '/tags/' + tag;

    window.location.assign(url);
}