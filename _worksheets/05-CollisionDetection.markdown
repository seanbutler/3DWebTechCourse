---
layout: worksheet
title:  "05 Collision Detection"
date:   2017-09-13 23:46:24 +0100
---

## Previously on 3DTFTW
- Shadows for More Realistic lighting
- Atmospheric Effects

## Aims and Objectives
Organising Our Code A Little
Detecting Collision Between Player and Obstacles


## Introduction

## Step 1

~~~ javascript
class Entity {
	constructor() {
	}

	Update() {
	}

	Reset() {
	}
}
~~~

## Step 2

~~~ javascript

class Obstacle extends Entity {
	constructor() {

        //	console.log("Obstacle() constructor");

        super();

		this.size = 10;
		this.collidable = true;

		this.geometry = new THREE.CylinderGeometry( //... );
		this.material = new THREE.MeshLambertMaterial(//... );
		this.mesh = new THREE.Mesh( // etc );

		this.mesh.position.x = 0;
		this.mesh.position.y = 0;
		this.mesh.position.z = 0;

		scene.add( this.mesh );
		this.Reset();

	}

	Reset() {
        super.Reset();

		this.mesh.position.x = // random position etc ;
		this.mesh.position.y =  // random position etc ;
		this.mesh.position.z =  // random position etc ;
	}

	Update() {
	}
}

~~~


## Step 3

Make sure you have a container into which you store

~~~ javascript

var objects = [];

~~~

Make a loop and create a numnber of obstacles.
Push the obstacles into the container

~~~ javascript

for ( /* make a loop do it a few times */) {
    var obstacle = new Obstacle();
    objects.push(obstacle);
}

~~~

Add the following to your animate() function and then you will visit the Update method of each object in turn.

~~~ javascript

for (obj of objects) {
    obj.Update();
}

~~~



~~~
class Avatar extends Entity {
	constructor(newMesh) {
		super();
    }

    Reset() {
    }

    Update() {
    }
~~~


## Exercises
