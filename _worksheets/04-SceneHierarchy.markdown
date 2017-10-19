---
layout: worksheet
title:  "04 Shadows and The Scene Hierarchy"
date:   2017-09-13 23:46:24 +0100
---

## Previously on 3DTFTW

- Make a more realistic scene using many atmospheric tools
- Add Fog to the scene
- Add Lights to the scene
- Setup some better materials
- Investigate variations in lighting and for to see how it changes the scene

## Aims and Objectives

Like most sessions we are going to investigate more than one issue.
- Shadows for More Realistic lighting
- A Scene Hierarchy (Objects with Children)

## Introduction

Shadows are self explanatory, we give the renderer some information about the accuracy and extent of the shadows we want then it will calculate them for specific lights.

The scene hierarchy is a little more subtle, all the objects in your scene can be arranged in a parent child structure, a bit like a family tree. This gives us a certain flexibility when we want to do things (more later).

## Step 0 - Setup

Clone your code from where you got to last time into a new project directory. Perhaps you now have a scene with several floating objects over flat (ish) landscape? Take a look at last weeks worksheet and see where you got to.


## Step 1 - Four Floating Objects

Create yourself a scene with a ground plane, like we have used before, and this time instead of cubes or spheres create a few TorusKnotGeometry shapes floating above the ground plane.

<https://threejs.org/docs/#api/geometries/TorusKnotGeometry>

Make the ground plane 200x200 and put it at the origin.
Make the torii float about 30 or 40 above the plane and about 20 apart.

Do you see something like this?

![](../../assets/TorusFour.PNG)

If your torii are flat shaded, then make sure you use a LambertMaterial instead of a BasicMaterial.

~~~ javascript

  material = new THREE.MeshLambertMaterial( {color: 0xCCCCCC } );

~~~

Where is your light positioned? For now we'll just use a regular directional light which illuminates the entire scene.

<https://threejs.org/docs/#api/lights/DirectionalLight>

Position it above the floating shapes, so they look like they are lit from above.

~~~ javascript

  var light = new THREE.DirectionalLight( 0xffffff, 1, 100 );

  light.position.set( 0, 100, 0 );
	scene.add( light );

~~~


## Step 2 - Adding some fake shadows



You should now see some shadows below your objects.

![](../../assets/TorusFourShadow.PNG)

## Step 3 -


## Exercises
