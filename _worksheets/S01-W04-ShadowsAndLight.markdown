---
layout: worksheet
title:  "S1 W4 Shadows and Light"
date:   2017-09-13 23:46:24 +0100
desc: "Getting Shadows Working Nicely"

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

Switch off any fog you have for now, we'll add it back in later.


## Step 1 - Four Floating Objects

Create yourself a scene with a ground plane, like we have used before, and this time instead of cubes or spheres create a few TorusKnotGeometry shapes floating above the ground plane.

<https://threejs.org/docs/#api/geometries/TorusKnotGeometry>

Make the ground plane 200x200 and put it at the origin.
Make the torii float about 30 or 40 above the plane and about 20 apart.

Do you see something like this?

![](../../assets/TorusFour.PNG)

If your torii are flat shaded, then make sure you use a LambertMaterial instead of a BasicMaterial.

<https://threejs.org/docs/#api/materials/MeshLambertMaterial>

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

Do you see any shadows in your scene? Here is an example of some code which casts shadows from a directional light.

<https://threejs.org/docs/#api/lights/shadows/DirectionalLightShadow>

The renderer needs to have shadows switched on.
~~~ javascript

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

~~~

Make sure the object's meshes themselves have shadows switched on.

~~~ javascript

  yourMesh.castShadow = true;
  yourMesh.receiveShadow = true;

~~~

If you have encapsulated them in a class dont forget the this. pointer. Also notice there is a flag for casting and a flag for receiving shadows. You can set them independantly for different effects and for optimisation. You may only need cast shadow on your entities to produce a nice result.

The ground plane or environment also needs to be part of the shadow system. If we assume its the ground for now and all lights will be above it then it doesnt need to cast shadows only receive them.

~~~ javascript

  yourMesh.castShadow = false;
  yourMesh.receiveShadow = true;

~~~

Can you see some shadows yet? Perhaps you can see a tiny little square shadow below your object, much too small to be realistic. Directional Lights don't have a volume attached to them, so they cast light over the whole scene.

To make shadow calculations sensible we have to create a volume to describe what can take part in the shadow calculations. This is called the shadow camera, because like the main camera it is used in projection maths. For now understand that you are defining a box attached to the light that sets a large enough volume for the shadows to occur within.

~~~ javascript

    // the map size is the texture/buffer used to store the shadows
    // therefore smaller is faster, and bigger is better quality
    light.shadow.mapSize.width = 128;
    light.shadow.mapSize.height = 128;

    // shadow camera is to create a box within which shadows are calculated
    light.shadow.camera.near = 1;
    light.shadow.camera.far = 20;

    light.shadow.camera.left     = -3;
    light.shadow.camera.right    =  3;
    light.shadow.camera.top      =  3;
    light.shadow.camera.bottom   = -3;

    // the shadow map is stretched to fit the shadow camera box

~~~

You should now see some shadows below your objects. If not try messing about with the object positions, or the shadow camera sizes.

![](../../assets/TorusFourShadow.PNG)

## Step 3 - Shadow Quality and Speed

The extra parameters we supply are:

- shadow.mapsize.values

these control the resolution of the shadow created. The shadow map is the rectangular buffer (like a texture) into which the shadows are calculated. Increasing these values gives better shadows. Naturally this comes at the cost of speed. They take longer to calculate. Remember there are two numbers so the speed decrease is proportional to the area which is the width x height. So it can get slow/big pretty quick. It pays to keep these values as low as you can stand.

- light.shadow.camera.values

from the light position these values define the volume within which obstacles must be to cast shadows. try experimenting with these values. shrink them and some of your torii should stop casting shadows. Again it pays to keep these values large enough to enclose the objects you need but small enough to exclude those for which you dont want to calculate shadows.

- Experiment with the shadow.mapSize values, what happens to the shadows if you make them 64, 32, 8?
- Experiment with the shadow.camera, left, right, top, bottom values, what happens to the shadows if you make them  much much larger? Once you have made them larger, try a large value in the mapSize. Make them small again, try a small value in the mapSize.

In general its efficient to have the minimum number of lights you need for your scene. Also keep the shadow map size as small as your quality sensibilities allow. Finally make the shadow volume only cover the elements in your scene for which you must have a shadow. Perhaps just the area near the player's character?

## Step 4 - Experiment with the colours

Take some time to change the colours of your lights. Also the colours of your materials. As we discussed last week the material and the light work together to create the final colours. The same is true of shadows.

## Exercises

try making a scene with your cylinders and cubes and whatnot on a flat plane. then using shadows can cast a nice golden hour sunset light across the scene and make it cast shadows to match?

alternatively, white ground, white background, white fog. add in some green cones for trees and cast a harsh blue white light across the scene.
