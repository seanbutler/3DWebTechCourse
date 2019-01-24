---
layout: worksheet
title:  "S1 W10 Grouping Meshes"
date:   2017-09-13 23:46:24 +0100
desc:   So you can make some more complicated shapes
---

## Previously on 3DTFTW
- handle the current mode/state of the game
- link it to the gameplay

## Aims and Objectives
We can make more complicated objects in our scene by grouping them together and using the groups inside an entity instead of a mesh.

## Step 0 - Backup Your Work So Far
Make sure you duplicate your project into a new dir and work there so you have a history to go back to if you need to.

## Step 1 - Make a new entity called TreeObstacle
Make a new entity in your file, call it TreeObstacle and make sure it inherits from Entity, add this.size and this.collidable members so later we can make it interact with the player? You may need different variables depending on what you chose for your collision system previously.

Perhaps you end up with some code that looks like this?

~~~ javascript

class TreeObstacle extends Entity {

  constructor(x, y, z) {
      super()
      this.size = 1.0;
      this.collidable = true;
  }

  update() {
      super.update();
  }
}

~~~

Now add a mesh to the constructor, this mesh will get created when the entity is created as per usual.

~~~ javascript

this.geometry = new THREE.ConeGeometry( 0.5, 1, 7, 21);
this.mesh = new THREE.Mesh( this.geometry, this.material );
this.mesh.position.y = 0.75;
this.mesh.scale.set(0.4, 0.5, 0.4);

~~~

Do this __three times__ and rename the mesh so that you have three of them __mesh1, mesh2, and mesh3__.
The more sophisticated programmers among you may have spotted an opportunity to use an array. Go ahead if you want to, its better that way.

Next create a member near the top of the constructor called meshgroup, this will hold each of the meshes.

~~~ javascript

this.meshgroup = new THREE.Group();

~~~

But you have to add them, so underneath each section where you created and initialised mesh1, mesh2, and mesh3 add a line similar to this one below.

~~~ javascript

this.meshgroup.add(this.mesh1);

~~~

This takes the mesh you created and puts it in a container so that the scene can draw them from one command rather than individually. Probably you will use different member variable names.

Finally near the bottom of your constructor instead of adding a mesh to the scene we are going to add a meshgroup instead.

~~~ javascript

scene.add( this.meshgroup );

~~~

Now you have your object, make sure you construct one into your game, you will notice however that its just a cylinder. Go back to the mesh1, mesh2 and mesh3 and adjust the scale and positions so they look like a tree. I suggest you increase the y of the position of two of them and decrease the scale of them as well. That way with some work you will get a decent looking pine tree.

![](../../assets/trees1.png)

The advantage of this approach is taht if we want to we can apply transforms (such as scale or translate) to the entire tree, or to its parts. Which is super convenient when we want to have lots of trees made up of smaller parts.

## Next

Grouping is convenient but isn't very efficient, next time we will look at ways to use groups and similar ideas to make your scene quicker for the computer to draw.

## Exercises

Can you...
- add a trunk to your tree?
- make the tree cone green, but the trunk brown?

Better Yet...
- how about a snowman?
- riding on skiis?
- holding skipoles?
- wearing a scarf?
- as the player's avatar?
