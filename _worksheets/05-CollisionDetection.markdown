---
layout: worksheet
title:  "05 Collision Detection"
date:   2017-09-13 23:46:24 +0100
---

## Previously on 3DTFTW
- Shadows for More Realistic lighting
- Atmospheric Effects

## Aims and Objectives
- Recap Organising Our Code and World Objects
- Recap Storing Objects in a container and updating them en-masse
- Detecting Collision Between Player and Obstacles

## Step 1

Organise all the things in your world into specialised types of a thing called 'Entity'. So Avatar, Obstacle, Environment will all be a kind of Entity.

Create a new class in your javascript file, somewhere near the top.

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

Make sure it still compiles.

## Step 2

Create a new class, 'Obstacle' which extends 'Entity' this means that if we like we can ask Obstacle to do anything that Entity can do to. We say it is derived from Entity.

This is similar to a specific car with REG ABC 123X being derived from the type 'Astra' which in turn is derived from the type 'Vauxhall' and 'Car' and 'Vehicle' and so on.

The Obstacle class should follow the same structure as the Entity class...

~~~ javascript

    class Obstacle extends Entity {
    	constructor() {
            //	console.log("Obstacle() constructor");
            super();
    	}

    	Reset() {
            super.Reset();
    	}

    	Update() {
            super.Update();
    	}
    }

~~~

Notice the super() and super. code, These call functions in the Entity class we defined earlier. Currently its empty. In this way we can make all the types of objects share code from one root or parent class.

Take the code your columns or whatever shape you are using, so that they are also wrapped in the obstacle class.

## Step 3

Make sure you have a container into which you store

~~~ javascript

    var objects = [];

~~~

Make a loop and create a number of obstacles.
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


## Step 4

Follow a similar pattern to your obstacle with the Environment and Avatar.

You will need to move/adjust your code for each thing.
- Put code you need to setup/initialise your thing into the constructor and/or Reset() method.
- Put code you want to be called from the animate() function in the Update() method.

~~~
    class MY_CLASS_NAME_HERE extends Entity {
    	constructor(newMesh) {
    		super();
        }

        Reset() {
            super.Reset();
        }

        Update() {
            super.Update();

        }
    }
~~~

If you put a PlaneGeometry into the Environment class, perhaps its methods are empty except for the constructor?

If you put an Avatar class together the Update() method is where you will respond to the keyboard input and move.


## Step 5





## Exercises
