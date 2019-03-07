---
layout: worksheet
title:  "S2 W06 Animations"
date:   2017-09-13 23:46:24 +0100
desc:   How To Animate Meshes using Three.js
---

## Previously on 3DTFTW

You learned how to make and optimise meshes assembled from several simple simple geometry meshes.

## Aims and Objectives

Today we are going to render and animate meshes and animations created using tools such as maya, blender or clara.io.

## Discussion

Making models with meshs works for only the most rudementary scenes. Also its a faf to create more complicated objects like snowmen or trees programmatically in js. A much better way is to use Blender or Maya or some other modelling package and output a mesh of triangles which can be loaded by the code in one step.

So, these materials are a super simple introduction to loading meshes and displaying them in js using three.js.


## Step 0 - Backup Your Work So Far


Make sure you backup any existing project you are working from. Best to use github as outlined in the earlier session or at least duplicate your project into a new folder and work there so you have a history to go back to if you need to.

[Stork](../../assets/stork.json "Download Me Now")

[Horse](../../assets/horse.json "Download Me Now")

[Centipede](../../assets/centipede.json "Download Me Now")

[Cow](../../assets/cow.json "Download Me Now")

Here are links to some mesh-anim JSON files which work with today's code. They may be the wrong scale or rotation, but you can fix that in your own time. Download the stork and save it somewhere near your working dir.


## Step 1 - Clean out the Avatar Constructor


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


## Step 3 - Setting Up the Animations


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


## Step 4 - Playing the Animation Every Frame


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

## Further work

Here is a [https://clara.io/view/70982f67-b7cf-4f43-8d60-b05a49e8e323](Simple Mesh).
 on [https://clara.io/](clara.io) which can be exported and loaded in a similar way to the bird and stork above.

Difference is you will have to work out how to download it in the right format (JSON) and display it yourself. There is no animation and its not face mapped like the stork and horse.

Its a very similar process to the one described above and clara.io provide a quick example of generic code
for loading simple meshes in three.js.

[https://clara.io/learn/user-guide/data_exchange/threejs_export](Simple Mesh Link).


## Even Further work

http://www.ro.me/

http://www.ro.me/tech/

https://github.com/dataarts/3-dreams-of-black

If you have a nose around inside the github repo for this project you will find some JSON meshes that are licensed as opensource/creative commons which we can therefore use.

https://github.com/dataarts/3-dreams-of-black/tree/master/deploy/files/models

In some cases the models have animations and others they are combined with multiple meshes in each file, but many work just fine. You will have to take a look and see which ones work and may have to do some research to find out how to load them.




## OK, noone is going to get this far...

Here are links to the source code of several tech demos made by the same team. Much more advaneced techniques than we are using, but still interesting and easy to access.

[https://github.com/dataarts/3-dreams-of-black/tree/master/deploy/tech/demos](Advanced Tech Demos)

Includes Shaders, Video, Point Clouds etc
