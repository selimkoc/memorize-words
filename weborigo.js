var img = ['happy.jpeg','nice.jpeg','friend.jpeg','explosion.jpeg','carrot.jpeg',
'car.jpeg','soldier.jpeg','fear.jpeg','relativity.jpeg','book.jpeg',
'earth.jpeg','speedlimit.jpeg'];

var en =['happy','nice','friend','explosion','carrot','car','soldier',
'fear', 'relativity','book','earth','speed limit'];

var sr = [
'srecan','lijepo','prijatelju','eksplozija','sargarepa','auto','vojnik',
'strah','relativnost','knjiga','zemlja','ogranicenje brzine'
];
$( document ).ready(function() {

function get_random (list) {
  return Math.floor((Math.random()*list.length));
}

function get_item()
{
  itemIndex =get_random(img)
  languageIndex = get_random(['en','sr']);

  $('.image').html('<img src="./assets/images/'+img[itemIndex] +'"/>');

  if (languageIndex == 0)
        {
              keyword = en[itemIndex];
              answer  = sr[itemIndex];
        } else
              {
                  keyword = sr[itemIndex];
                  answer  = en[itemIndex]
              }
  $('.keyword').html(keyword);
  $('.total').html(  parseInt($('.total').html())+1    );

}

get_item();

// Triggering check on enter
$("input[name=keyword]").on("keydown", function(event) {
  if(event.which == 13)
  $( ".check" ).trigger( "click" );
});


$( ".check" ).click(function() {


  enteredValue = $( "input[name=keyword]" ).val();

  if (enteredValue==answer){
    $('.correct').html(  parseInt($('.correct').html())+1    );
    // Remove item from indexes of arrays
     img.splice(itemIndex,1);
     en.splice(itemIndex,1);
     sr.splice(itemIndex,1);
     // game over page refreshes for new game
     if (!(img.length)) {
       alert('Game Over'); location.reload();
     }
  }
   else {
   $('.wrong').html(  parseInt($('.wrong').html())+1    );
   }
   // Reset input box to empty
   $( "input[name=keyword]" ).val('');
   get_item();
});

});
