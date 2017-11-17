---
layout: worksheet
title:  "07 HTML HUD"
date:   2017-09-13 23:46:24 +0100
desc:   Dont forget its a web page, we can access the HTML just like any other js
---

## Previously on 3DTFTW
- Altering the internal vertices of a mesh to add more visual interest

## Aims and Objectives
- create some HUD elements in the web page
- update them from within Javascript using data from the 3d scene

![](../../assets/PRG_HUD.PNG)

## Step 0 -
Make sure you duplicate your project into a new dir and work there so you have a history to go back to if you need to.

## Step 1 - HTML DIVS for the HUD
update the html to include a couple of divs with some text in them. make sure each div has a unique ID, something like hud_distance and hud_shields

also we need to do some styling to make it overlay the canvas. try the following css as your starting point, it should make sure your renderer's dom object fills the screen and that the hud elements are nicely placed in the top corners.

~~~ html

    body {
        font-size: 3vw;
        font-family:  monospace;
        width: 100%;
        height: 100%;

        margin: 0;
        border: 0;
        padding: 0;

        display: block;
        position: fixed;

        top: 0;
        left: 0;
        z-index: -9999;
    }

    #hud_distance{
        display: block;
        position: fixed;

        top: 5%;
        right: 5%;
        z-index: 0;
    }

    #hud_shields {
        display: block;
        position: fixed;

        top: 5%;
        left: 5%;
        z-index: 0;
    }

~~~


## Step 2 - Nice Fonts
You probably want to style them, so they look nice, google fonts <https://fonts.google.com>is a good place to go. If you are doing a space age scene, then Offside is a nice font. Choose something you like that fits with your aesthetic, you can always change it later.

Add something like this to the html in the header section

~~~ html
<link href="https://fonts.googleapis.com/css?family=Offside" rel="stylesheet">
~~~

Add this to the body section of a css file. reference the css in the html.

~~~ html

    font-family: 'Offside', cursive;

~~~

If you are unsure of how to proceed with the above step, check out w3schools online or try google.

## Step 3 - Updating the HTML from the JS

This code does two main things. the LHS finds the piece of the web page DOM which has the id hud_distance, and its internal HTML, which is the code in the web page between the div tags. In the earlier step you put some text in there.

The RHS retrieves the position of the box or whatever you are drawing as your avatar and scales it from metres to km then limits the decimal places and appends a kilometer sign.

~~~ javascript

    document.getElementById('hud_distance').innerHTML = (this.mesh.position.z/1000).toFixed(2) + " km";

~~~

Add the above code to the Update() method of your avatar class.

## Step 3 - A more complicated HUD example

add a shields member to the constructor of your Avatar

~~~ javascript

    this.shields = 100;

~~~

during the Update() method, find the hud_shields part of the DOM and update it to hold the value this.shields

~~~ javascript

    document.getElementById('hud_shields').innerHTML = (this.shields).toFixed(2) + " %";

~~~

previously you wrote some collision code to test if the player had collided with an obstacle. Update it to include the following lines as the collision test within the avatar.

~~~ javascript

    if ( this.CollidedWithObstacle() )
    {
        this.shields--;
        console.log("BANG");
    }

~~~

## Exercises

- can you make the avatar react when it collides with an obstacle?
- have you reached the end of the environment yet, how might you have an infinite environment?
