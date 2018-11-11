---
layout: worksheet
title:  "3 Adding Atmosphere"
date:   2017-09-13 23:46:24 +0100
desc: "Make a more realistic scene using many lights and fog"
---

## Previously on 3DTFTW

- More appropriate file structure
- Build a More Complex Scene
- Basic Input & Movement

## Aims and Objectives

- Make a more realistic scene using many atmospheric tools
- Setup some better materials
- Add Lights to the scene
- Add Fog to the scene
- Investigate variations in lighting and for to see how it changes the mood

## Introduction

## Step 1 - Duplicate Previous Project

Take one of your previous project. The one with the interactive box and cylinder on a landscape consisting of a large flat plane.

## Step 2 - Read Up and View Example Materials

Materials are the way we tell computer graphics how a surface responds to lighting. There are different kinds depending on what effect we are looking for. In general though the more realistic, the more expensive it is to compute. NB: by expensive we mean it takes longer for the computer to work out the graphics and so your program will run more slowly.

if you go to threejs.org and within the documentation search for "Material" you should see a long list of Material types:

So far you have been using Mesh Normal Material

![](../../assets/MeshNormalMaterial.png)

Which is pretty, but not at all realistic. What this material does is say the direction of the face at this point, its XYZ, is translated into RGB to make the colour of that point.


For today I want you to take a close look at the following 3:
- <https://threejs.org/docs/#api/materials/MeshBasicMaterial.combine>
- <https://threejs.org/docs/#api/materials/MeshLambertMaterial.combine>
- <https://threejs.org/docs/#api/materials/MeshPhongMaterial.combine>


<!-- - <https://threejs.org/docs/index.html#api/materials/MeshStandardMaterial> -->

![](../../assets/MeshBasicMaterial.png)
![](../../assets/MeshLambertMaterial.png)

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

- <https://threejs.org/docs/index.html#api/lights/AmbientLight>
- <https://threejs.org/docs/index.html#api/lights/DirectionalLight>
- <https://threejs.org/docs/index.html#api/lights/PointLight>
- <https://threejs.org/docs/index.html#api/lights/SpotLight>

And the base class from which they get some of their functions
- <https://threejs.org/docs/index.html#api/lights/Light>

## Step 5 - Simple Ambient Light

Add a simple ambient light to your scene:

Ambient lights are generally used to light a scene where we want a base light with a similar effect everywhere. Sort of like the light from the sky.

~~~ javascript
    var ambientLight = new THREE.AmbientLight( 0x404040 );
    scene.add( ambientLight );
~~~

Can you see your shapes now? Try different colours, and intensities for the light.
0x404040 is the current colour, dim white (grey). What do you have to set it to to make it brighter white light?

Note, the ambient light doesn't have a position, just a colour, this is because it affects ALL the objects in the scene. Can you change the colour? How does it affect the colours of the objects in your scene.

## Step 6 - Directional Lights

Next we can add a directional light.

~~~ javascript
    var light = new THREE.DirectionalLight( 0xff0000, 2 );
    light.position.set( 100, 0, -100 );
    light.castShadow = false;
    scene.add( light );
~~~

Can you tell which way the light is facing?

Now add a second directional light to your scene.
- Make sure they are spaced apart in different locations.
- Make the lights have different colours.
You may need to move them around to get a nice lighting effect.

## Step 7 - Different Kinds of Lights

There are still two kinds of light to investigate. Here is a good demo of a spot light.
<https://threejs.org/examples/?q=light#webgl_lights_spotlight>

Because of its similarity to shaded lamps, the spotlight is most useful for interior scenes. The point light too is similar to a lightbulb, but without a shade.
- https://threejs.org/docs/index.html#api/lights/PointLight
- https://threejs.org/docs/index.html#api/lights/SpotLight

If you choose to investigate these, perhaps you add some walls and a floor using planes then reduce or remove the ambient light from the scene.

Take a look at this example, it has several coloured point lights. You could easily create nice magical or particle effects with a few point lights.

<https://threejs.org/examples/?q=light#webgl_lights_pointlights>

## Step 8 - Foggy

Check this out...

<https://threejs.org/examples/?q=fog#webgl_geometry_terrain_fog>

Now duplicate your project into a new dir/folder.
- Leave the ground and cylinder and cube.
- Leave the ambient light, but remove all the others.

Go here <https://threejs.org/docs/index.html> and search for fog.

https://threejs.org/docs/index.html#api/scenes/Fog
https://threejs.org/docs/index.html#api/scenes/FogExp2

Can you make it seem like a foggy day?
 - Don't use the exponential fog for a very foggy scene, save that for subtle atmospheric effects.

## Step 9 - Nighttime

Tweak the fog AND light parameters to make it seem like a night time scene from a film. We should still be able to see everything clearly though.

## Step 10 - Try Some Variations

Again, Duplicate Your project and make some new scenes. Tweak the lighting and fog parameters to create the following scenes, you may need to change the colours of the objects too to make a nice scene.

- Arctic Blizzard
- Polluted Sci-Fi
- Weird Alien World
- Underwater
- Or Whatever else you can think of
