//Sakshi Bharti 300991470

$(document).ready(function(){

var randomImage = new Array();



randomImage[0] = "images/blank.png";
randomImage[1] = "images/one.png";
randomImage[2] = "images/two.png";
randomImage[3] = "images/three.png";
randomImage[4] = "images/four.png";
randomImage[5] = "images/five.png";
randomImage[6] = "images/six.png";

	var list1 = $('#dicegame1>ul:first');
    var list2 = $('#dicegame2>ul:first');
    
    var firstItem1 = list1.find('li:first');
    var firstItem2 = list2.find('li:first');
    
    firstItem1.clone().appendTo(list1);
    firstItem2.clone().appendTo(list2);
    
	
	var slot1,slot2;

$('#startBtn').click(function() //spin button click
    { 
var i,x,y;
//generation of number on dice
for( i=1; i<7; i++)
{
	x=Math.ceil(Math.random()*i);
    document.getElementById('viewbox1').innerHTML = ('<img src="' + randomImage[x] + '" />');
   y=Math.ceil(Math.random()*i);
    document.getElementById('viewbox2').innerHTML = ('<img src="' + randomImage[y] + '" />');
    
}

document.getElementById('dice1').innerHTML=x;

document.getElementById('dice2').innerHTML=y;

});

  
 });