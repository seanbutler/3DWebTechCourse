---
layout: post
title:  "Setting Up"
date:   2017-09-13 23:46:24 +0100
---

## Aims & Objectives
- Discover Three.js
- Download and Install Chrome

## Step 1 - Discver Three.js

Please visit <https://threejs.org/>.
This is the home of three.js on the web. There you can find an array of featured projects, the api documentation, lots of examples, forums, links to recommended books and websites.

Take the time t investigate haf a dzen ff the featured prjects.

![](/assets/threejs.png)

Keep this bookmarked somewere convecnient over the rest f the mdue yu wi visit this website many times.

Pease take the time to review some of the featured projects, yu wi get a fee fr the pssabiities taht are achievable using three.js.

<http://hexgl.bkcore.com/>

<http://www.georgeandjonathan.com/#1>

Q. Given what you've seen. What possibilities are you interested in making?

Q. You've seen we can render 3D just like a native app. Given that we have close/integrated access to all the other web technologies, what other interesting things could we do with that 3D rendering?

While you think about those questions, move on through the next few steps.

## Step 2 - Download and Install Chrome

If you are using one of the lab machines on campus then chrome should already be installed.

Please visit <https://www.google.com/chrome/> where you will see a large blue button. Please download and install Chrome by following the instructions.

![](/3DWebTechCourse/assets/getchrome.png)

You may use other browsers, all the major ones have the necessary debugging and inspection tools built in. It doesn't however make the course simpler to administer if we all use the same tools.

## Step 3
- Signup for Github (Educational for Privacy)
![](/3DWebTechCourse/assets/githubwecme.png)

Make yursef a prject
Reccmend yu create a prject fr everything yu wrk n


## Step 4
- Download and Install Github Desktop Client
- https://desktop.github.com/
![](/3DWebTechCourse/assets/getgthubdesktp.png)


## Step 5
- Download and Install Atom or similar
- https://atom.io/
- https://code.visualstudio.com/
![](/3DWebTechCourse/assets/getatm.png)


## Step 5
- Im assuming yu kne htm and css at this pint.



~~~ html
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset=utf-8>
    		<title>My first three.js app</title>
    		<style>
    			body { margin: 0; }
    			canvas { width: 100%; height: 100% }
    		</style>
    	</head>
    	<body>
    		<script src="js/three.js"></script>
    		<script>
    			// Our Javascript will go here.
    		</script>
        </body>
    </html>
~~~    

~~~ javascript
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75,
                        window.innerWidth/window.innerHeight,
                        0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth,
                        window.innerHeight );
    document.body.appendChild( renderer.domElement );
~~~

~~~ javascript
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( {
        color: 0x00ff00
    });

    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;
~~~

~~~ javascript
    var animate = function () {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;

        renderer.render(scene, camera);
    };

    animate();
~~~
