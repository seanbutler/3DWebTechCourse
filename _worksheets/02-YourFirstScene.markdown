---
layout: worksheet
title:  "A More Complex Scene"
date:   2017-09-13 23:46:24 +0100
---

## Previously on 3DTFTW
- Download and Install Tools
- Download and Three.js code library
- Make a simple project in a dir
- Type in the code which should get you a cube spinning on screen

## Aims and Objectives
- More appropriate file structure
- Build a More Complex Scene
- Core Loop
- Input
- Movement

## Introduction

Last week you built the hello world of graphics, a spinning cube. Seen everywhere since the 1950s.

This week we are going to add more to the scene and as make it interactive! But first, lets re-structure the project slightly by separating the code int different files and making them reference each other

## Step 1 - Duplicate Project

Take Last weeks Project, Duplicate it into a new directory 3DTech/Week2, 3DTFTW/Ex2 or something similar. Its your choice. You should have a single HTML file with html, css and js all embedded.

## Step 2 - Separate CSS File

Usually we don't amalgamate our js, html and css into the same file. In all but the smallest projects its too unwieldy to manage.

Using google search for "how to include a css file in html". Somewhere on the first page you will usually find a link to stack overflow. This is your goto site for programming/tech enginneering knowledge. (Also Mr Doob and Mozilla)

- Create a new file game.css in the same folder/dir as your index.html
- Cut and paste the CSS from your original file into this new file.
- Follow the instructions from the stack overflow and create a link to the css in the new file.
- https://stackoverflow.com/questions/1947878/adding-external-css-in-an-html-file
- Test that your code works.

If your code doesn't work, there are a few possible sources of errors.

- Make sure you don't copy the <script></script> tags around the css.
- Make sure you don't leave the <script></script> tags behind in the HTML.
- Make sure you your filename and relative path to the css is correct.

## Step 3 - Separate JS File

Now we are going to separate out the js so we can more easily manage the project.

Using google search for "how to include js in html page". Find the stackoverflow link.

- Create a new file game.js in the same folder/dir as your index.html
- Cut and paste the js from your original file into this new file.
- Follow the instructions from the stack overflow and create a link to the js in the new file.
- https://stackoverflow.com/questions/196702/where-to-place-javascript-in-an-html-file
- Test that your code works.

If your code doesn't work, there are a few possible sources of errors.

- Make sure you don't copy the <script></script> tags around the css.
- Make sure you don't leave the <script></script> tags behind in the HTML.
- Make sure you your filename and relative path to the css is correct.

## Add a Plane

Goto https://threejs.org/ and select 'documents'. In the search box type 'plane'. Then under geometries select 'PlaneGeometry'. This will take you to a page where you can see a demo of a plane, a source code example of a plane being made, and also a description of the parameters for the function that constructs a plane.

~~~ javascript

    var planeGeometry = new THREE.PlaneGeometry(100, 100, 50, 50);
    var planeMaterial = new THREE.MeshBasicMaterial({color: 0xFF7F00});
    var plane = new THREE.Mesh(planeGeometry,planeMaterial);

    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;

    scene.add(plane);
~~~

You may not see the plane from the above code initially, its too large to show on screen. So, you will have to make the plane small enough to see and not so small its hidden inside your cube.

If you still cant see the plane, check where it is positioned? Perhaps it is out of view of the camera. Move it to the origin of the scene, this is also the middle of the scene and located at coords (0, 0, 0).

~~~ javascript
    plane.position.x = 0;
    plane.position.y = 0;
    plane.position.z = 0;
~~~

Try changing the above code so that the plane is medium, say 5 * 5 and has only 1 subdivision/segments in each direction.

~~~ javascript
    var planeGeometry = new THREE.PlaneGeometry(5, 5, 1, 1);
~~~

Next...

- Move the plane so it is at coordinates 0, 0, 0.
- Scale the plane so it is very large.
- Rotate the plane so it is horizontal.

## Add a Column

Like the sphere, but use new THREE.CylinderGeometry().
Check the documentation to see what the parameters do.
Try to make it 1x1x2 with fewer than 20 sides.

Note: There are lots of other built in geometries to use later.

## Make the Cube Move On Input

Alright. If you put the cylinder in the middle then it may be obscuring your cube from earlier. Lets do something about that.


web browsers provide facilities to interface with the larger operating system. we can tap into these using 'EventListeners'.

There are a  number of events we can listen to in our code, including keydown, keyup, mousemove etc.

The following code declares an event listener which when a key is pressed 'keydown' the function onDocumentKeyDown is called. The event listener is 'attached' to the document object, which in this case is the webpage itself.

You can attach listeners to specific objects within your webpage so the code is called only if the user interacts with that button, div or similar.

~~~ javascript
document.addEventListener("keydown", onDocumentKeyDown, false);
~~~


We need to declare and define the function 'onDocumentKeyDown' this function received as its parameter the event received by the listener. In this way we can attach any functions we write to any of the external events generated by the browser/os.

~~~ javascript

function onDocumentKeyDown(event) {
    var keyCode = event.keyCode;
    // up
    if (keyCode == 87) {
        myCube.position.y += 0.25;
        // down
    } else if (keyCode == 83) {
        myCube.position.y -= 0.25;
        // left
    } else if (keyCode == 65) {
        myCube.position.x -= 0.25;
        // right
    } else if (keyCode == 68) {
        myCube.position.x += 0.25;
        // space
    } else if (keyCode == 32) {
        myCube.position.x = 0.0;
        myCube.position.y = 0.0;
        myCube.position.z = 0.0;
    }
};
~~~

Thats great now our cube should move if we use the keyboard. What are the problems with this approach?

- Can you adjust the code above so that you can move the cube in two directions at the same time?
- What do the numbers mean? Can you change the code so that we refer to words instead of 68, 83 etc?

## Creating an Obstacle Class

Create a class, like the one below. Now instead of creating your column object materials and meshes in the global code make them in the constructor.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

~~~ javascript
class Obstacle {
    constructor() {
        this.geometry = //...
        this.material = //...
        this.mesh = //...

        scene.add( this.mesh );
    }

    update() {
        //...
    }
}
~~~


## Lots of obstacles

Use the new more than once command to instantiate a few columns.
where do they all appear?

Take a look at the following.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

Can you make them appear in random places?


## Array of obstacles

Use a for loop to fill an array of the obstacles you created.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


## Wavy Path

Take a look at the following.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sin

![](./assets/sine_waves_different_frequencies.svg.png)

Can you make them appear in a winding row?
Can you make them appear in 2 winding parallel rows?


## Exercises

Try to do as many of the following as you can.
Use the update function to slide the obstacles or the player along the ground automatically?
Can you use the random numbers to make the obstacles appear with a clear path between them?
