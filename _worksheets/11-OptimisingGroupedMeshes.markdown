---
layout: worksheet
title:  "S1 W11 Optimising Grouped Meshes"
date:   2017-09-13 23:46:24 +0100
desc:   Optimise near the end of your project
---

## Previously on 3DTFTW

You made more complicated objects from simple geometry.

## Aims and Objectives

To make sure our more complicated meshes are being drawn in an efficient way.

## Discussion

Computers are good at doing the same thing again and again, especially simple things.

Drawing hardware, particularly the low powered variety, is also fastest when it does the same thing lots and lots of times. In simple terms this is because each time we ask the machine to draw it sets up the drawing context and then draws. Sometimes, setting up the context takes more time than the actual drawing itself.

You may think about this in terms of selecting a new paint every time you want to make a mark in a painting. Often we paint the mid tones before adding low lights and highlights afterwards. Generally we load the brush with paint, then make several marks in that colour before selecting a new paint.

When considering hardware rendering remember that switching to another material is a slow operation, like moving to the palette, loading a brush with paint and returning to the canvas.

## Step 0 - Backup Your Work So Far

Make sure you duplicate your project into a new dir and work there so you have a history to go back to if you need to.

## Step 1 - This time merge several geometries into one

Using the tree class you made previously, this time instead of making three meshes we are going to make one material and one geometry.

~~~ javascript

this.material = new THREE.MeshStandardMaterial();
this.geometry = new THREE.Geometry();

~~~

Now create three cone geometries, instead of the three meshs from before. Each time merge the new geometry with the original.

~~~ javascript

this.geom1 = new THREE.ConeGeometry( 0.25, 0.5, 7);
this.geom1.translate(0, 0.75, 0);
this.geometry.merge(this.geom1)

this.geom2 = new THREE.ConeGeometry( 0.333, 0.75, 7);
this.geom2.translate(0, 0.4, 0);
this.geometry.merge(this.geom2)

this.geom3 = new THREE.ConeGeometry( 0.5, 1, 7);
this.geom3.translate(0, 0.0, 0);
this.geometry.merge(this.geom3)

~~~

Finally create the mesh in the usual way, using the combined geometry.

~~~ javascript

this.mesh = new THREE.Mesh(this.geometry, this.material);

~~~

![](../../assets/trees2.png)

If you are combining meshes they should use the same material for optimal rendering. You can of course put meshes with different materials in the same entity.

## Exercises

- If you made any other entities with meshs made of several parts, apply the same technique to optimise those too.
