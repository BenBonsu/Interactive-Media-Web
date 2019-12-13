console.log('Javascript is working');
//Ben_Click.js
//var xbtn = document.createElement("BUTTON");
var bgx;
var bgy;
var bgz;
var bgColor;
var windowWidth;
var windowHeight;

//
window.onload = function(){
	$('#Button1').click(random_bg_color);
	$('#Button1').on({
		click: function () {
			stepTwo();
		}
	})
};
//On window load button 1 becomes able to change the bakground and runs step 2
function random_bg_color() {
	var bgx = Math.floor(Math.random() * 256);
	var bgy = Math.floor(Math.random() * 256);
	var bgz = Math.floor(Math.random() * 256);
	var bgColor = "rgb(" + bgx + "," + bgy + "," + bgz + ")";
 	console.log(bgColor);
	document.body.style.background = bgColor;
}
console.log('Javascript is still working');
// New Button Functions ---------------------------------------
//***************************************************************************
function stepTwo() {
	$('.intro').hide();
	var newButton2 = $('<button id="Button2" > Click here now </Button>');
	$(newButton2).css('position', 'absolute');
	$(newButton2).css('top', '300px');
	$(newButton2).css('left', '300px');

	$('body').append(newButton2);
	$('#Button2').click(random_bg_color);
	Switch2();
	
}
// Step two starts once button 1 is pressed and hidden which adds a new button with attributes
//***************************************************************************
function Switch2 () {
	$('#Button2').click(random_bg_color);
	$('#Button2').on({
		click: function(){
			stepThree();
		}
	})
}

//***************************************************************************
function stepThree() {
	$('#Button2').hide();
	var newButton3 = $('<button id="Button3" > Click now here! </Button>');
	$(newButton3).css('position', 'absolute');
	$(newButton3).css('top', '600px');
	$(newButton3).css('left', '600px');
	
   	$('body').append(newButton3);
   	$('#Button3').click(random_bg_color);
   	
   	Switch3();
 }
  console.log('Javascript is still working yes indeed');

//***************************************************************************

function Switch3 () {
	$('#Button3').click(random_bg_color);
	$('#Button3').on({
		click: function(){
			stepFour();
		}
	})
}
//***************************************************************************

 function stepFour() {
 	$('#Button3').hide();
	var newButton4 = $('<button id="Button4"> Click Once More! </Button>');
	$(newButton4).css('position', 'absolute');
	$(newButton4).css('top', '200px');
	$(newButton4).css('left', '500px');

	$('#Button4').click(random_bg_color);
  	$('body').append(newButton4);
  	Switch4();
 }
console.log('Javascript is still working GREAT!');

//***************************************************************************

function Switch4 () {
	$('#Button4').click(random_bg_color);
	$('#Button4').on({
		click: function(){
			stepFive();
		}
	})
}
//***************************************************************************
 function stepFive() {
 	$('#Button4').hide();
	var newButton5 = $('<div class="test"><button id="Button5" draggable="true" onDragStart="drag(event)"> DRAG ME! </Button></div>');
	$(newButton5).css('position', 'absolute');
	$(newButton5).css('top', '500px');
	$(newButton5).css('left', '300px');

var newBox = $('<div id="div1" onDrop="drop(event)" onDragOver="allowDrop(event)"></div>');

$(newBox).css ('float','left');
$(newBox).css ('width','100px');
$(newBox).css ('height','35px');
$(newBox).css ('margin','10px');
$(newBox).css ('padding','10px');
$(newBox).css ('border','1px solid black');

 	$('body').append(newButton5);
  	$('body').append(newBox);
	$('#Button5').click(random_bg_color);
	$('.test').draggable();

  	//stepFour();
 }
 // **********************DRAG FUNCTIONS ************************
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  // location.reload();
  window.open('http://google.com', '_top');
}
 // **********************DRAG FUNCTIONS ************************



console.log('Javascript is Awesome!');


//***************************************************************************

//Variables for box
//var vertpos;
//var horzpos;
//var buttpos = [x, y];
//Math.floor(Math.random() * 11);	  // returns a random integer from 0 to 10
//function getRndInteger(min, max) {
 // return Math.floor(Math.random() * (max - min) ) + min;/
//}
//
//$("button").click function(){
//	alert(hello)
//	}

//-----------------------------------------------------------------------------------------------------
// FOR RANDOM BUTTON LOCATION COME BACK LATER
// function randnum(value){
// 	var number = Math.random() * value;
// 	number = Math.floor(number);
// 	return number;
// 	console.log (number)
// }

// 		var topPos = randnum(windowHeight);
// 		var leftPos = randnum(windowWidth);
// 	windowWidth = $(window).width();
// 	windowHeight = $(window).height(); 
//-----------------------------------------------------------------------------------------------------