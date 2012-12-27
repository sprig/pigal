$(function(){

  var viewportHeight = $(window).height();
  var viewportWidth = $(window).width();
  $('#image_container').css({
    width: viewportWidth,
    height: viewportHeight
  });

  $.ajax({
    url: '/get_proxied_json?' + encoded_source_urls,
    dataType: 'json',
    success: function(data){
      $(data).each(function(index,element){
        $('#image_container').append(
          $('<div />').css({
            backgroundImage: "url('" + element.img_url +"')",
            width: viewportWidth,
            height: viewportHeight
          })
        );
      });
    },
    complete: function(){
      $('#image_container').cycle('fade')
    }
  });

});