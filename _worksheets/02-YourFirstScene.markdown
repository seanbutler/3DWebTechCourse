---
layout: worksheet
title:  "Your First Scene"
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

This week we are ging t add mre t the scene and as make it interactive! But first, ets structure the prject sighty by separating the cde int different fies and making them reference each ther

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

Goto https://threejs.org/ and select 'documents'. In the search box type 'plane'.

~~~ javascript

var planeGeometry = new THREE.PlaneGeometry(60,20,1,1);
var planeMaterial = new THREE.MeshBasicMaterial({color: 0xcccccc});
var plane = new THREE.Mesh(planeGeometry,planeMaterial);

plane.rotation.x =- 0.5 * Math.PI;

plane.position.x = 15;
plane.position.y = 0;
plane.position.z = 0;
scene.add(plane);

~~~


## Add a Sphere

## Add a Column

## Make the Sphere Move On Input




## Adding More Columns

## Making All the Columns Move

## Exercises

Try to do as many of the following as you can.
- Change the Columns for Cones
- Colour Them Green
- Try the obstacles in different positions
