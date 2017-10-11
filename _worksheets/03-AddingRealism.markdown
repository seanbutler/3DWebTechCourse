---
layout: worksheet
title:  "Adding Realism"
date:   2017-09-13 23:46:24 +0100
---

## Previously on 3DTFTW

- More appropriate file structure
- Build a More Complex Scene
- Input & Movement

## Aims and Objectives

- Make a more realistic scene using many atmospheric tools
- Add Fog to the scene
- Add Lights to the scene
- Setup some better materials
- Investigate variations in lighting and for to see how it changes the scene

## Introduction

## Step 1 - Duplicate Previous Project

Take one of your previous project. The one with the interactive box and cylinder on a landscape consisting of a large flat plane.

## Step 2 - Read Up and View Example Materials

Materials are the way we tell computer graphics how a surface responds to lighting. There are different kinds depending on what effect we are looking for. In general though the more realisting, the more expensive it is to compute. NB: by expensive we mean it takes longer for the computer to work out the graphics and so your program will run more slowly.

if you go to threejs.org and within the documentation search for "Material" you should see a long list of Material types:

![](/3DWebTechCourse/assets/threejsorg_material_types.png)

For today I want you to take a close look at the following 4:
- <https://threejs.org/docs/#api/materials/MeshBasicMaterial.combine>
- <https://threejs.org/docs/#api/materials/MeshLambertMaterial.combine>
- <https://threejs.org/docs/#api/materials/MeshPhongMaterial.combine>
- <https://threejs.org/docs/index.html#api/materials/MeshStandardMaterial>

These Materials all make use of this base class for some of their functions:
- <https://threejs.org/docs/#api/materials/Material>

## Step 3 - Populate a Scene

As an experiment, lets put a few (4) toruses/torii in your scene.
<https://threejs.org/docs/index.html#api/geometries/TorusGeometry>
Scale them small enough and space them apart. Position them so they float slightly over the ground.

Apply a different material from the previous step to each one. In each case make sure the objects have their own material variable and you are assigning to it from a different Material Class from the above selection.

Can you see all the shapes? Perhaps not. This is because many of the materials require lights to show in the scene. Perhaps you see your shapes, but they have turned to black silhouettes. OK lets add a light...

## Step 4 - Light Reading (hahaha)

In computer graphics lights are invisible objects which exist in your scene so the renderer can make calculations with the polygons and materials to draw the scene. The positions, colour, intensity and other parameters are all fed into the lighting equations to calculate the colours of the materials.

For now, search for light in the threejs.org documentation, there will appear a long list of lights. We'll only take a look at these ones today. Be aware of the others if you want to do things more interesting later.

- https://threejs.org/docs/index.html#api/lights/AmbientLight
- https://threejs.org/docs/index.html#api/lights/DirectionalLight
- https://threejs.org/docs/index.html#api/lights/PointLight
- https://threejs.org/docs/index.html#api/lights/SpotLight

And the base class from which they get some of their functions
- https://threejs.org/docs/index.html#api/lights/Light


## Step 5 - Simple Ambient Light

Add a simple ambient light to your scene:

~~~ javascript
    var ambientLight = new THREE.AmbientLight( 0x404040 );
    scene.add( ambientLight );
~~~

Can you see your shapes now? Try different colours, and intensities for the light.
0x404040 is the current colour, dim white (grey). What do you have to set it to to make it brighter white light?

Note, the ambient light doesnt have a position, just a colour, this is because it affects ALL the objects and

Can you change the colour? How does it affect the colours of the objects in your scene.


## Step 6 - MORE LIGHTS

TBD

## Step 7 - MOAR LIGHTS

TBD


## Step 4 - Foggy

TBD

Duplicate your project into a new dir/folder.
Leave the ground and cylinder and cube.
Can you make it seem like a very foggy day?

## Step 5 - Nighttime

TBD

Duplicate your project into a new dir/folder.
Leave the ground and cylinder and cube.
Can you make it seem like night time?

## Exercises

### Bizzard / Arctic
### Polluted / Blade Runer
### Alien / Weird
