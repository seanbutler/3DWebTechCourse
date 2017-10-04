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

## Step 1 - Dupliate Project

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

Now we are going to separate out the js so we can more easily manage the project.

Using google search for "how to include js in html page". Find the stackoverflow link.


- Create a new file game.js in the same folder/dir as your index.html
- Cut and paste the js from your original file into this new file.
- Follow the instructions from the stack overflow and create a link to the js in the new file.
- https://stackoverflow.com/questions/196702/where-to-place-javascript-in-an-html-file
- Test that your code works.

If your code doesn't work, there are a few possible sources of errors.

- Make sure you don't copy the <script></script> tags around the css.
- Make sure you don't leave the <script></script> tags behind in the HTML.
- Make sure you your filename and relative path to the css is correct.


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
