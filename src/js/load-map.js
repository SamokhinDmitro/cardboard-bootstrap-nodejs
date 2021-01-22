$(document).ready(function(){
   let feedback = $('#offer');
   let feedbackTop = feedback.offset().top;

   $(window).bind('scroll', function () {
      if(pageYOffset > feedbackTop){

          $('body').append('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_iXeN3kLnDFVtsSZ_WDovLQquXGBncMM&callback=initMap"\n' +
              '        async defer></script>');
          $(window).unbind('scroll');
      }
   });
});
