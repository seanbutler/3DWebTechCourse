---
layout: worksheet
title:  "9 Gameflow and Dialogs"
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

![](../../assets/Dialog1.PNG)

![](../../assets/Dialog2.PNG)

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

you may not see your dialog. in the code above display is set to none in the css. try setting display to block as you write the html/css. remember to set it back afterwards because we need it to disappear, but still be in the file.


## Step 3 - Making an Object To Manage the Game Flow

next we are going to make a class which will control the state of the game and the user interface.

~~~ javascript

	class GameFlow {
		constructor() {
		}

		Update() {
		}
	}

~~~

make sure you instantiate the class using the 'new' keyword and assigning it to a variable.

~~~ javascript

	var gameFlow = new GameFlow();

~~~

next, in your animate() function call the Update() method of your gameFlow object.

~~~ javascript

	function animate() {
		// some code here...
		gameFlow.Update();
		// other code here...
	}

~~~

## Step 4 - Using a Switch Statement to control the flow

somewhere near the top of your file declare some constants like this. these values are for the stages your game can be in.

~~~ javascript

	GameFlowState = {

		UNKNOWN : 0,
		INITIALISE : 1,
		GAMESTART: 2,
	    GAMEPLAY : 3,
		TALLY: 4
	};

~~~

now inside the constructor of your gameFlow object create a  variable currentState and set it to INITIALISE.

~~~ javascript

	this.currentState = GameFlowState.INITIALISE;

~~~

add a switch statement to the Update() method. a switch is a bit like an 'if' except you can choose between many choices.

~~~ javascript

	switch ( this.currentState ) {

		case GameFlowState.INITIALISE:
		break;

		case GameFlowState.ETC:
		break;

		// and so on, make a case/break for each of the GameFlowState values.
	}

~~~

we are going to use this to hold the code for each phase of the game.

## Step 5 - Initialise the Game

into your initialise state of the gameflowmanager, add the following code, which does two things:

the first part adds a callback to wait for the player to click on a specific button.

the second part makes the intro user interface visible and updates the gameflow state to UNKNOWN, which has no code associated with it.

~~~ javascript

	document.getElementById("intro_ok_button").onclick = function () {
		document.getElementById("intro_ui").style.display = 'none';
		gameFlow.currentState = GameFlowState.GAMESTART;
	}

	document.getElementById("intro_ui").style.display = 'block';
	gameFlow.currentState = GameFlowState.UNKNOWN;

~~~

## Step 6 - Start The Gameplay

into the GAMESTART state of the gameflow manager, add this code.
it initialises the avatar's sheilds and sets the current gameflow state to GAMEPLAY.

~~~ javascript

	avatar.shields = 100;
	gameFlow.currentState = GameFlowState.GAMEPLAY;

~~~


## Step 7 - Monitor the Sheilds During GAMEPLAY

the following code, watches the avatar's shields, as soon as it reaches zero or below, then the current state is set to TALLY

~~~ javascript

	if ( avatar.shields <= 0 )
	{
		gameFlow.currentState = GameFlowState.TALLY;
	}

~~~

You should add this to a GAMEPLAY state of the gameflow manager


## Step 8 - Tally Screen Overlay

This code is very similar to the INITIALISE gameflow state, except it adds a callback to a tally button and makes the tally ui visible. It should go in the GameFlowState.TALLY section of the switch statement.

~~~ javascript

	document.getElementById("tally_ok_button").onclick = function () {
		document.getElementById("tally_ui").style.display = 'none';
		gameFlow.currentState = GameFlowState.INITIALISE;
	}

	document.getElementById("tally_ui").style.display = 'block';
	gameFlow.currentState = GameFlowState.UNKNOWN;

~~~


## Step 9 - Keyboard Input

You may have noticed that the little player ship is still being controlled  even though the ui overlays are over the gameplay. We should add some code to ignore input at these during these states.

add a variable to your keyboard code:

~~~ javascript

	var taking_input = false;

~~~

now depending on how you implemented your keyboard code, use this variable and an if statement to make the keyboard code ignore input.

~~~ javascript

	if ( taking_input == true ) {
		return //? ;
	} else {
		return //? ;
	}

~~~

finally in each of the gameflow states where you throw up the user interface overlays, set this variable to true or false to use or stop using the keyboard.



## Exercises

- can you make the avatar react when it collides with an obstacle?
- have you reached the end of the environment yet, how might you have an infinite environment?
