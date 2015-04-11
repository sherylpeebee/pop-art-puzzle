'use strict'

$(document).ready(init);

var images = [];
// var images =['/assets/jimi1.jpeg', '/assets/jimi2.jpeg', '/assets/jimi3.jpeg', '/assets/jimi4.jpeg', '/assets/jimi5.jpeg', '/assets/jimi6.jpeg', '/assets/jimi7.jpeg', '/assets/jimi8.jpeg'];

for(var i=1; i<=12; i++){
  images.push('/assets/jimis/jimi' + i + '.jpeg');
}

function init(){
  $('td').click(flip);
  $('#cheat').click(cheat);

}
function flip(){
  var randomImage = _.sample(images);
  $(this).css('background-image', 'url(' + randomImage + ')');
}



function cheat(){
    $('#box1').css('background-image', 'url(http://localhost:3002/assets/jimis/jimi1.jpeg)');
    $('#box2').css('background-image', 'url(http://localhost:3002/assets/jimis/jimi2.jpeg)');
    $('#box3').css('background-image', 'url(http://localhost:3002/assets/jimis/jimi3.jpeg)');
    $('#box4').css('background-image', 'url(http://localhost:3002/assets/jimis/jimi4.jpeg)');
    $('#box5').css('background-image', 'url(http://localhost:3002/assets/jimis/jimi5.jpeg)');
    $('#box6').css('background-image', 'url(http://localhost:3002/assets/jimis/jimi6.jpeg)');
    $('#box7').css('background-image', 'url(http://localhost:3002/assets/jimis/jimi7.jpeg)');
    $('#box8').css('background-image', 'url(http://localhost:3002/assets/jimis/jimi8.jpeg)');
    $('#box9').css('background-image', 'url(http://localhost:3002/assets/jimis/jimi9.jpeg)');
    $('#box10').css('background-image', 'url(http://localhost:3002/assets/jimis/jimi10.jpeg)');
    $('#box11').css('background-image', 'url(http://localhost:3002/assets/jimis/jimi11.jpeg )');
    $('#box12').css('background-image', 'url(http://localhost:3002/assets/jimis/jimi12.jpeg)');
    alert('BOOOOO, YOU CHEATED!!');
    }




// if( ($('#box1').css('background-image') === 'url(http://localhost:3000/assets/jimis/jimi1)' &&
//   $('#box2').css('background-image') === 'url(http://localhost:3000/assets/jimis/jimi2)' &&
//   $('#box3').css('background-image') === 'url(http://localhost:3000/assets/jimis/jimi3)' &&
//   $('#box4').css('background-image') === 'url(http://localhost:3000/assets/jimis/jimi4)' &&
//   $('#box5').css('background-image') === 'url(http://localhost:3000/assets/jimis/jimi5)' &&
//   $('#box5').css('background-image') === 'url(http://localhost:3000/assets/jimis/jimi6)' &&
//   $('#box6').css('background-image') === 'url(http://localhost:3000/assets/jimis/jimi7)' &&
//   $('#box7').css('background-image') === 'url(http://localhost:3000/assets/jimis/jimi8)' &&
//   $('#box8').css('background-image') === 'url(http://localhost:3000/assets/jimis/jimi9)' &&
//   $('#box8').css('background-image') === 'url(http://localhost:3000/assets/jimis/jimi9)' &&
//   $('#box8').css('background-image') === 'url(http://localhost:3000/assets/jimis/jimi9)' &&
//   $('#box8').css('background-image') === 'url(http://localhost:3000/assets/jimis/jimi9)' &&
// ){
//   alert("winner");
// for(var i =0; i<9; i++){
//   var randomNum=Math.floor(Math.random()*10);
//   console.log(randomNum);
// when number is generated, assign clicked 'this' with corresponding class


// var firstGen = [];
// for(var i =0; i<8; i++){
// firstGen.push(Math.random());
// }
// var secondGen = firstGen.map(function(i) {
//    return i * 10;
// });
//
// }
