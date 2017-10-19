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

## Step 3 - Experiment with the colours

Take some time to change the colours of your lights. Also the colours of your materials. As we discussed last week the material and the light work together to create the final colours. The same is true of shadows.

## Step 4 - Spotlights

Swap your directional light out for a spotlight. You dont have to delete the old code, just comment it out and replace it with the spotlight instead.

~~~ javascript

var light = new THREE.SpotLight( 0xffffff, 1, 1000 );

light.position.set( 0, 100, 0 );
light.castShadow = true;

light.shadow.mapSize.width = 255;
light.shadow.mapSize.height = 255;

light.shadow.camera.near = 1;
light.shadow.camera.far = 255;

scene.add( light );

~~~

Do you notice anything different about the shadows? Compare the positions of the shadows in the new scene with those that were being created before.
The extra parameters we supply are

- shadow.mapsize.width and height : these control the resolution of the shadow created. The shadow map is the rectangular buffer (like a texture) into which the shadows are calculated. Increasing these values gives better shadows. Naturally this comes at the cost of speed. They take longer to calculate. Remember there are two numbers so the speed decrease is proportional to the area which is the width x height. So it can get slow/big pretty quick. It pays to keep these values as low as you can stand.

- light.shadow.camera.near and far : from the light position these two values define the volume within which obstacles must be to cast shadows. try experimenting with these values. shrink them and some of your torii should stop casting shadows. Again it pays to keep these values large enough to enclose the objects you need but small enough to exclude those for which you dont want to calculate shadows.

## Exercises
