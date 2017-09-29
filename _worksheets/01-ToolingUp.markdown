---
layout: post
title:  "Tooling Up & Getting Started"
date:   2017-09-13 23:46:24 +0100
---

## Aims & Objectives
- Discover Three.js
- Download and Install Tools
- Download and Three.js code library
- Make a simple project in a dir
- Type in the code which should get you a cube spinning on screen
- Celebrate


## Introduction

Three.js is a Javascript library, which means setting up your development environment is very easy. Javascript the only requirements are a text editor and a web browser. That being said, text editors with features such as syntax highlighting/folding, bracket matching, a document map, and so on - such as Notepad++ or Sublime Text - will provide a better coding experience.

## Step 1 - Discover Three.js

Please visit <https://threejs.org/>.

This is the home of three.js on the web. There you can find an array of featured projects, the api documentation, lots of examples, forums, links to recommended books and websites.

![](/3DWebTechCourse/assets/threejs.png)

Keep this bookmarked somewhere convenient. Over the rest of the module you will visit this website many times.

Please take the time to review a few of the featured projects. You will get a feel for the possabilities tha are achievable using three.js and webgl.

<http://hexgl.bkcore.com/>

<http://www.georgeandjonathan.com/#1>

Q. Given what you've seen. What possibilities are you interested in making?

Q. Aw we have close integrated access to all the other web technologies, what other interesting things could we do with that 3D rendering?

While you think about those questions, move on through the next few steps.

## Step 2 - Download and Install Chrome

If you are using one of the lab machines on campus then chrome should already be installed.

Otherwise, please visit <https://www.google.com/chrome/> where you will see a large blue button. Download and install Chrome by following the instructions.

![](/3DWebTechCourse/assets/getchrome.png)

You may use other browsers, all the major ones have the necessary debugging and inspection tools built in. It doesn't however make the course simpler to administer if we all use the same tools.

## Step 3
- Signup for Github (Educational for Privacy)
![](/3DWebTechCourse/assets/githubwecme.png)

Make yourself a project. We recommend you make a project for every piece of work you carry out. Keep your work there and push/sync all the changes you make. If you get in a pickle then you can roll back and get your earlier work.

## Step 4
- Download and Install Github Desktop Client
- https://desktop.github.com/
![](/3DWebTechCourse/assets/getgthubdesktp.png)


## Step 5
- Download and Install Atom or similar
- https://atom.io/
- https://code.visualstudio.com/
![](/3DWebTechCourse/assets/getatm.png)


## Step 6

#### built into the OS

some operating systems have them built into the file browser/desktop just double click on the index.html
it may work for you, you might have to visit your preferences and switch it on (dont ask me how).

#### python

in a terminal/xtern/console

~~~ javascript
python -m SimpleHTTPServer

~~~


#### mongoose

donwload and install mongoose from here: https://cesanta.com/binary.html
can be installed in the user space, and run directly.
looks pretty simple, you should be able to work it out.



## Step 5

- create a project dir call it "3dtech/wk1/ex1" or something similar
- go to github and download the three.js files from mr doob
- put them in a sub dir of your project dir

##  Step 6

- make a index.html file and type in, not copy the following code...

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
    		<script src="pathtomy-threedotjsfile"></script>
    		<script>
    			// Our Javascript will go here.
    		</script>
        </body>
    </html>
~~~    

## Step 7

take a look at the following code type, not copy it into the script tags of the html we put in the index.html file from earlier.

~~~ javascript
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75,
                        window.innerWidth/window.innerHeight,
                        0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth,
                        window.innerHeight );
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( {
        color: 0x00ff00
    });

    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    var animate = function () {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;

        renderer.render(scene, camera);
    };

    animate();
~~~


## Notes


### Debugging Support in Browser

As for web browsers, both Google Chrome and Mozilla Firefox have excellent WebGL support. Google Chrome has a particularly helpful set of built-in developer tools that can greatly simplify the workflow process, such as a console that can be used for debugging and inspecting Javascript values and objects, and Workspace settings that allow you to edit and save source files from within the browser. More details can be found at the Chrome DevTools site.


### Online Code Editing


It is also possible to write code using Three.js entirely online, using services such as cloud9 or jsFiddle. This option is typically only used for sharing examples or demonstrations with small amounts of code.

https://gamedevelopment.tutsplus.com/articles/how-to-learn-threejs-for-game-development--gamedev-11787
