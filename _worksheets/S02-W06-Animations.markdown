---
layout: worksheet
title:  "S2 W06 Animations"
date:   2017-09-13 23:46:24 +0100
desc:   How To Animate Meshes using Three.js
---

## Previously on 3DTFTW

You made learned how to optimise meshes made from several simple simple geometry meshes.

## Aims and Objectives

To load up a mesh from an external source.

## Discussion

Making models with meshs works for only the most rudementary scenes. Also its a faf to create more complicated objects like snowmen or trees programmatically in js. A much better way is to use Blender or Maya or some other modelling package and output a mesh of triangles which can be loaded by the code in one step.

So, these materials are a super simple introduction to loading meshes and displaying them in js using three.js.

## Step 0 - Backup Your Work So Far

Make sure you backup any existing project you are working from. Best to use github as outlined in the earlier session or at least duplicate your project into a new folder and work there so you have a history to go back to if you need to.

![](../../assets/json_mesh_anim.zip)

Here is a link to a zip which countains some mesh-anim JSON files which work with today's code. They may be the wrong scale or rotation, but you can fix that in your own time.


## Step 1 -

So, using the code from earlier in the module when you had 3 torii spinning in front of a camera and could move one object around. Dive into the avatar and strip out the constructor, so it now looks like this.

~~~ javascript

constructor(x, y, z) {
    super()

    this.x = x;
    this.y = y;
    this.z = z;

}

~~~

## Step 2 - Loading A Mesh

Loading Meshes requires using code to parse a datafile. We are going to focus on the JSON fileformat because its closely associated with Three.js.

The steps are as follows, in the constructor of the class you want to have a mesh, create a local variable and instantiate a THREE.JSONLoader.

~~~ javascript

var meshLoader = new THREE.JSONLoader();

~~~

Because we want to load a file and its coming from a webserver it may take some time (an unknown amount of time) we dont want to pause our local webpage code. This means it must be loaded loaded asyncronously in parallel with the webpage.

The mesh loader takes care of this. But we have to tell it what to do with the file when it arrives. So as well as the filename we pass it a function (a callback) which is local to the constructor and is called once the file loading is complete.

~~~ javascript

meshLoader.load( "assets/stork.json", (geometry) => {
    // nothing here
} );

~~~

In the above fragment the => is used to indicate that the next block is an anonymous function which is executed within the local context, in this whichever instance of the class Avatar. These kinds of anonymous functions are sometimes called lambdas. (geometry) is its parameter list.

But Still this callback does nothing. So lets have it setup the Material, generate a mesh, position it and add it to the scene. I happen to know that the example meshes have vertex coloring so we set up the material to use the colors from the mesh to colour the faces of the mesh, Super cool low poly flat shaded look is popular this decade (also cheaper and faster to make).

Add in this code inside the callback.

~~~ javascript

var material = new THREE.MeshLambertMaterial( {
    vertexColors: THREE.FaceColors,     // use colors from the geometry
});

this.mesh = new THREE.Mesh( geometry, material );

this.mesh.position.x = this.x;
this.mesh.position.y = this.y;
this.mesh.position.z = this.z;

scene.add(this.mesh);

~~~

Step 3 - Setting Up the Animations

Run this and you should have large bird on screen.

![](../../assets/staticbird.png)

Nice, but birds dont glide all the time, they flap their wings yes?

~~~ javascript

    this.mixer = new THREE.AnimationMixer( this.mesh );
    this.prevMixerTime = Date.now();
    this.clip = THREE.AnimationClip.CreateFromMorphTargetSequence( 'motion', geometry.morphTargets, 30 );
    this.mixer.clipAction(this.clip).setDuration(1).play();

~~~

A mixer object allows us to manage meshes and animations together it takes one or more animations and does calculations 'mixes them' to apply the animation to the mesh and phase or blend between them etc.

 We use the real time to sync the process so that the animation is blended in smaller or larger increments as the framerate might vary.

However that only initialises the animation, each frame the game is rendered we must update the animation and specifically tell it we want the next portion of the data.

Step 4 - Playing the Animation Every Frame

Add this method to the avatar it calls update on the mixer with the elapsed time, since it was last called. This allows the animation to know how much time has passed and so how to calculate the new positions of the vertices.

~~~ javascript

    animate() {
        if (this.mixer) {
            var time = Date.now();
            this.mixer.update((time - this.prevMixerTime) * 0.001);
            this.prevMixerTime = time;
        }
    }

~~~

Do all that and you should have an animating mesh on screen. Whoot!


![](../../assets/flappybird.png)
