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

## Step 1 - Entity Class

Organise all the things in your world into specialised types of a thing called 'Entity'. So Avatar, Obstacle, Environment will all be a kind of Entity.

Create a new class in your javascript file, somewhere near the top.

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

## Step 2 - Classes for your Obstacles

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

## Step 3 - Container and Loop to Update many things

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

## Step 4 - Classes for your other things

Follow a similar pattern to your obstacle with the Environment and Avatar.

You will need to move/adjust your code for each thing.
- Put code you need to setup/initialise your thing into the constructor and/or Reset() method.
- Put code you want to be called from the animate() function in the Update() method.

~~~ javascript
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

If you put an Avatar class together the Update() method is where you will respond to the keyboard input and move, maybe?

If you want them to be updated every time you animate() then either add them to the objects array or call the update() method explicitly.


## Step 5 - Detecting Collision

You will recall from the lecture slides that distance is related to pythagorus theorum. THis is because the coordinates of the objects can be thought of as the corners of a triangle and the hypotenuse the line between them. Recheck the lecture slides for this content if you are unsure.

The following method will calculate (and return) the distance between the poisition of the mesh of the current class (via 'this.') and any arbitrary coordinates.

~~~ javascript

    DistanceTo(x, z) {
        // (xA-xB)²+(yA-yB)²+(zA-zB)² < (rA+rB)²

        let dist = Math.abs ( Math.sqrt (
                        ( ( this.mesh.position.x - x ) * ( this.mesh.position.x - x ) ) +
                        ( ( this.mesh.position.z - z ) * ( this.mesh.position.z - z ) )
                    ) );

        //	console.log("DistanceTo() = " + dist);
        return dist;
    }

~~~

However use distance to detect collision we need to compare it with the sum of the sizes of the two objects being tested.

~~~ javascript

    IsCollidedWith(that) {
        // size + size > distance
        let collidedWith = (this.size + that.size) > this.DistanceTo(that.mesh.position.x,  that.mesh.position.z);
        //	console.log("IsCollidedWith() " + collidedWith + " " + (this.size + that.size));
        return collidedWith;
    }

~~~

you avatar isnt interested in testing collision against one obstacle, but all the obstacles, so we call IsCollidedWith() from within a loop...

~~~ javascript

    CollidedWithObstacle() {
        for(var n=0; n<objects.length; n++) {
            if ( objects[n].collidable == true ) {
                if ( this.IsCollidedWith(objects[n]) == true ) {
                    return true;
                }
            }
        }
        return false;
    }

~~~

Finally in the Update() method of the avatar, we can in turn call this.CollidedWithObstacle() and detect if we have collided.

~~~ javascript

    if ( this.CollidedWithObstacle() )
    {
        console.log(" ------ CRASH ------- ");
    }

~~~

## Exercises

- The Lights and the Camera code can also be wrapped in Classes derived from 'Entity' this will allow us to have an update method for them too if we want to move them about or do other things.
- You could implement a FollowCamera class which uses its update method to access the Avatar's mesh position and move itself accordingly.
