var playSound = function(soundFile) {
  $("#sound").html("<embed src=\"psv/" + soundFile + ".wav" + "\" hidden=\"true\" autostart=\"true\" />");
};

$(function() {
  $.getJSON("mydata.json", function(data) {
    var html = '';
    $.each(data, function(key, value){
      var sound = '\''+value.sound+ '\'';
      console.log(sound);
      html += '<div id="'+value.category+'" class="category-filter">';
      html += '<div id="'+value.id+'" class="word-element img-button" value="'+value.name+'" onclick="playSound('+sound+')">';
      html += '<div class="word-element-inner">';
      html += '<img src="images/'+value.image+'.png"/>';
      html += '<div class="image-title">'+value.name+'</div>';
      html += '</div></div></div>';
    });
    $('#wordcontainer').html(html);
    $(".word-element").click(function(){
        $('#kuulatekst').val($('#kuulatekst').val()+$(this).attr("value")+" ");
    });
  });
});


$(function(){
  $('#places.topicmenu-element').click(function(){
    $(".category-filter").addClass("hide");
    $("#places.category-filter").removeClass("hide");
  });

  $('#animals.topicmenu-element').click(function(){
    $(".category-filter").addClass("hide");
    $("#animals.category-filter").removeClass("hide");
  });

});





// $(function() {
// $('.topicmenu-element').click(function(){
//   console.log($(this).attr("id"));
//   console.log($(".category-filter").attr("id"));
//      $('.category-filter').each(function() {
//     if($(this).attr("id") != $(".category-filter").attr("id")) {
//       $(".category-filter").addClass("hide");
//     }
//     return false;
//   });
//   });
// });
