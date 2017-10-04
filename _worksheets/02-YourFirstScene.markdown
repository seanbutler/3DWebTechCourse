---
layout: worksheet
title:  "Your First Scene"
date:   2017-09-13 23:46:24 +0100
---

## Previously on 3DTFTW
- Download and Install Tools
- Download and Three.js code library
- Make a simple project in a dir
- Type in the code which should get you a cube spinning on screen

## Aims and Objectives
- Build a More Complex Scene
- Separate Tech into HTML, CSS and JS files
- Core Loop
- Input
- Movement

## Introduction

Last week you built the hello world of graphics, a spinning cube. Seen everywhere since the 1950s.

## Step 1 - New Project

Take Last weeks Project, Duplicate it into a new directory 3DTech/Week2, 3DTFTW/Ex2 or something similar. Its your choice.

You should have a single HTML file with html, css and js all embedded.

## Step 2 - Separate CSS File

Usually we don't amalgamate our js, html and css into the same file. In all but the smallest projects its too unwieldy to manage.

Using google search for "how to include a css file in html". Somewhere on the first page you will usually find a link to stack overflow. This is your goto site for programming/tech enginnering knowledge. (Also Mr Doob and Mozilla)

- Create a new file game.css in the same folder/dir as your index.html
- Cut and paste the CSS from your original file into this new file.
- Follow the instructions from the stack overflow and create a link to the css in the new file.
- https://stackoverflow.com/questions/1947878/adding-external-css-in-an-html-file
- Test that your code works.

If your code doesn't work, there are a few possible sources of errors.

- Make sure you don't copy the <script></script> tags around the css.
- Make sure you don't leave the <script></script> tags behind in the HTML.
- Make sure you your filename and relative path to the css is correct.


## Step 3 - Separate JS File

Q. Given what you've seen. What possibilities are __you__ interested in making?

Q. As we have close integrated access to all the other web technologies, what other interesting things could we do with that 3D rendering?

While you think about those questions, move on through the next few steps.

## Step 2 - Download and Install Chrome

If you are using one of the lab machines on campus then chrome should already be installed.

Otherwise, please visit <https://www.google.com/chrome/> where you will see a large blue button. Download and install Chrome by following the instructions.

![](/3DWebTechCourse/assets/getchrome.png)

You may use other browsers, all the major ones have the necessary debugging and inspection tools built in. It doesn't however make the course simpler to administer if we all use the same tools.

## Step 3 Github for Backups

This step is optional. If you are using one of the lab machines on campus then various git clients should already be installed.

Signup for Github (Educational for Privacy)
![](/3DWebTechCourse/assets/githubwecme.png)

You dont have to, but consider making yourself a project to keep your work in. We recommend you make a project for every piece of work you carry out. Keep your work there and push/sync all the changes you make. If you get in a pickle then you can roll back and get your earlier work.

You can of course use a USB stick and keep your work backed up on that. Just dont lose it.

## Step 3.5

The easiest and simplest way to access github and use it to keep your code backed up and secure is Github Desktop Client.

Download and Install Github Desktop Client: https://desktop.github.com/
![](/3DWebTechCourse/assets/getgthubdesktp.png)

Again, this is optional, but the best way. Later in your career if you continue to work in design tech you will use tools like this and their more complicated cousins.

## Step 4 - Text Editor
Download and Install Atom or similar. Feel free to use whatever text editor you like.
https://atom.io/
https://code.visualstudio.com/
![](/3DWebTechCourse/assets/getatm.png)


## Step 5

Running a simple web server locally on your machine. Its doesnt let us install software, so we have various choices.

#### built into the OS

Some operating systems have simple web servers built into the file browser/desktop just double click on the index.html
it may work for you, you might have to visit your preferences and switch it on (dont ask me how).

#### python

If you are on a mac or linux machine you most likely already have python installed.

in a terminal/xterm/console

~~~ javascript
    python -m SimpleHTTPServer
~~~

#### mongoose

download and install mongoose from here: https://cesanta.com/binary.html
can be installed in the user space, and run directly. pretty simple, you should be able to work it out. run it once an you have a web server running on your machines. you can use this in the labs or at home very easily. once its running you can see your local server if you point your browser at localhost:8080

## Step 6

- create a project dir call it "3dtech/wk1/ex1" or something similar
- go to Please visit <https://threejs.org/> follow the link to the source code on github and scroll down to usage, there you will find instructions on how to get a three.hs library file for use in your own projects.
- download the three.js file
- put them in a sub dir of your project dir

##  Step 7

make a index.html file and type in, not copy the following code...

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

## Step 8

take a look at the following code __type, not copy__ it into the script tags of the html we put in the index.html file from earlier.

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

you will need to patch up the filename of the library so it refers to the file you downloaded from the internet and saved locally

If it doesnt work, check your spelling. Check the locations of your files.
If you are using chrome, open the inspector and go to the console to see if it has generated any errors.


## Notes

### Debugging Support in Browser

As for web browsers, both Google Chrome and Mozilla Firefox have excellent WebGL support. Google Chrome has a particularly helpful set of built-in developer tools that can greatly simplify the workflow process, such as a console that can be used for debugging and inspecting Javascript values and objects, and Workspace settings that allow you to edit and save source files from within the browser. More details can be found at the Chrome DevTools site.


### Online Code Editing


It is also possible to write code using Three.js entirely online, using services such as cloud9 or jsFiddle. This option is typically only used for sharing examples or demonstrations with small amounts of code.

https://gamedevelopment.tutsplus.com/articles/how-to-learn-threejs-for-game-development--gamedev-11787


## Step 9

Try to do as many of the following as you can.

- Change the colour of your cube
- Change the size of your cube
- Move the cube around
- Add in some more cubes
- Try the cubes in different positions ( a grid, random)
