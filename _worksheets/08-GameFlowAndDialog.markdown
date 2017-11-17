---
layout: worksheet
title:  "07 Gameflow and Dialogs"
date:   2017-09-13 23:46:24 +0100
desc:   Your game will need a UI, some dialog boxes and
---


## Previously on 3DTFTW
- create some HUD elements in the web page
- update them from within Javascript using data from the 3d scene

## Aims and Objectives
- write a class to handle the current mode/state of the game
- make it hide and show some html ui elements
- link it to the gameplay via the avatar and keyboard

![](../../assets/PRG_HUD.PNG)

## Step 0 -
Make sure you duplicate your project into a new dir and work there so you have a history to go back to if you need to.

## Step 1 - HTML and CSS for the dialogs

we are going to need some HTML for the user interface. so lets create a dialog box to go over the gameplay. build a div in the body of the html file. You can put whatever text you like inside it for now.

~~~ javascript

	<div class = "ui_overlay" id = "intro_ui">
        <h1>SUPER FUN GAME TIME</h1>
		<ul>
			<li>How Far Can You Get Before Your Ship Is Destroyed?</li>
			<li>fly fly fly</li>
			<li>fast fast fast</li>
		</ul>

		<div class = "clickable_group">
			<button class = "clickable" id = "intro_ok_button">Got It!</button>
		</div>
	</div>

~~~

now, duplicate this and make another div, this time set its id to "tally_ui" and set the id of the button to "tally_ok_button".

you can of course change the text so its clearly a game over screen rather than an intro screen.

make a css file and link your html to it in the normal way.

 ~~~ javascript

 .ui_overlay {
     position: absolute;
     font-size: 2vw;
     color: white;
     background-color: rgba(0,0,0,0.5);
     padding: 3vh 0 3vh 2vw;
     width: 50vw;
     margin-top: 10vh;
     margin-left: 25vw;

     display: none;
 }

 .clickable_group {

     position: absolute;
     display: block;
     right:      3vw;
     bottom:     3vh;
     padding: 1vh 1vw 1vh 1vw;
 }

 .clickable {
     outline:            0;
     color:              white;
     background-color:   transparent;
     border:             0.2vw solid white;

     font-size:          2vh;
     padding:            1vh 1vw 1vh 1vw;
     border-radius:      3vw;
 }

 .clickable:hover {
     background-color:   white;
     color: rgba(0,0,0,1);
     border: 0.2vw solid white;
 }

 .clickable:active {
     outline: 0;
     color: orange;
     background-color: white;
     border: 0.2vw solid white;
 }

~~~

## Step 2 - Hide the UI

you may not see your dialog, if display is set to none in the css. if this is the case try setting display to block as you write the html/css. remember to set it back afterwards because we need it to disappear, but still be in the file.


## Step 3 - Updating the HTML from the JS


## Step 4 - A more complicated HUD example


## Exercises

- can you make the avatar react when it collides with an obstacle?
- have you reached the end of the environment yet, how might you have an infinite environment?
