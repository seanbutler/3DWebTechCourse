---
layout: worksheet
title:  "06 Inside Meshes"
date:   2017-09-13 23:46:24 +0100
desc: "Use loops to access the internals of a mesh and change them about"

---

## Previously on 3DTFTW
- Recap Organising Our Code and World Objects
- Recap Storing Objects in a container and updating them en-masse
- Detecting Collision Between Player and Obstacles

## Aims and Objectives
- Altering the internal vertices of a mesh to add more visual interest

## Introduction

## Step 0 -
Remember each week you should duplicate your project into a new dir/folder so that when you make changes you can always revert to an earlier version.

## Step 1 - Class
Review the Ground Plane you made before. If you havn't already, then wrap it in a class of its own.
Perhaps you have something a bit like this...

~~~ javascript

	class Environment extends Entity{
		constructor() {
			super();

			this.size = 0;
			this.collidable = false;

			this.geometry = new THREE.PlaneGeometry( 500, 500, 50, 50 );
			this.material = new THREE.MeshBasicMaterial({color: 0xFF7F00});
			this.mesh = new THREE.Mesh( this.geometry, this.material );

			this.mesh.position.x = this.mesh.position.y = this.mesh.position.z = 0;

	        this.mesh.rotation.set(Math.PI * -0.5, 0, 0);
			scene.add( this.mesh );
		}

	    Update() {
			//...
	    }
	}

~~~

## Step 2 - Lets add a little visual noise and move the vertices a little

Each of the geometry's you have created is an array of points and an array of faces which are used to draw the mesh. Right now, we don't need to know exactly how the vertices and faces are draw but that they are stored in an array internally.  You have done arrays before, so you already have the skills necessary. You can access them using a for loop like you would any other array.

So, inside your Environment/GroundPlane class create a for loop in the constructor. The for loop will pass over the geometry.vertices array. You will need to use 'this.' to access the geometry if it is a member of your class.

~~~ javascript

	for ( var i = 0; i < this.geometry.vertices.length; i ++ ) {

	}

~~~~

Now inside this loop we shall use 'i' to count up to the number of vertices stored in the array using the square brackets '[]'. These will allow you to visit each element of the array in turn as the for loop causes the variable 'i' to increase in value. Put these lines below inside the body of the loop so they are executed many times as 'i' increases up to vertices.length.

~~~ javascript

	var vertex = this.geometry.vertices[i];
	vertex.x += ( Math.random() * 30 ) - 15;
	vertex.y += ( Math.random() * 30 ) - 15;

~~~~

Do they look any different?

## Step 3 - Add Colour Variations to the Faces

Similar to the array of vertices, the geometry also contains an array of faces, which are little sets of vertices with colour and other data attached.
So, put another for loop in the constructor. This time, make it count from zero to this.geometry.faces.length

~~~ javascript

	for ( var i = 0, l = this.geometry.faces.length; i < l; i++ ) {

	}

~~~

This is similar to what you did for your Obstacles/Entities previously.

The code below creates a temporary local variable to reference the current face in the array. We can then create a random colour for each vertex. Put this inside the loop you just made.

~~~ javascript

	var face = this.geometry.faces[ i ];
	face.vertexColors[ 0 ] = new THREE.Color().setRGB( Math.random(),
	 													Math.random(),
														Math.random());
	face.vertexColors[ 1 ] = new THREE.Color().setRGB( Math.random(),
														Math.random(),
														Math.random());
	face.vertexColors[ 2 ] = new THREE.Color().setRGB( Math.random(),
														Math.random(),
														Math.random());

~~~

How does your scene look now? Perhaps the colours are chaotic and garish. If you like change the values in the setRGB calls to something fitting with your scene.

## Step 4 - Perhaps you need more faces in your landscape?

For the small scenes we have been making so far, the small ground plane is fine. If you intend to expand your scenes into a race to the sun style game, then you may need to stretch the ground plane out a bit. Take a look at the code below to tweak your geometry, to add many more polygons and to stretch it out into the distances.

~~~ javascript

    this.geometry = new THREE.PlaneGeometry( 500, 10000, 5, 100 );

~~~

If you are unsure why this code achieves this then consult the PlaneGeometry instructions on Mr.Doob's website. Read the descriptions of the parameters for the PlaneGeometry constructor.


## Exercises

- Can you add a little vertical offset into the vertices so that the landscape is uneven?

- Perhaps you have a road running down the centre of your landscape? Can you use loops and other algebra to make patterns in the landscape?

- Perhaps you have a river running down the centre of your landscape. Can you use sin or cos to make it weave?
