---
layout: worksheet
title:  "01 Tooling Up & Getting Started"
date:   2017-09-13 23:46:24 +0100
desc: "Where on the Web can we get it and where should we start"
---

## Aims & Objectives
- Discover Three.js
- Possibly Download and Install Some Tools
- Download and Three.js Code Library
- Make a simple Project in a Dir/Folder
- Type in the code which should get you a something on screen
- Celebrate!

## Introduction

### What is Javascript

Three.js is a Javascript library for creating 3d graphics on web pages.

Javascript is a language the computer can understand which programmers use to make the instructions which tell the computer what to do.

Unlike HTML/CSS which you are probably familiar with, Javascript is active rather than static. HTML/CSS describe the content and style of a document, the webpage. Javascript on the other hand is actively interpreted by the machine and changes the internal state of that machine, causing it to do different things depending on circumstances.

Javascript libraries are text files which contain code other programmers have written and made available for you to use. The functions in this code from elsewhere can be reference from your code saving you the time and energy of making them yourself.

### Javascript Programming

For javascript development, the only requirements are a text editor and a web browser. Specialist programmer Text editors have features such as syntax highlighting/folding, bracket matching, a document map, and so on - such as Notepad++ or Sublime Text - and will provide a better user experience than the built in text editor that comes with the OS.

You cannot use Word or Pages or similar. A wordprocessor creates a document with lots of extra data in it for formatting which make it unsuitable for interpretation as a program.

## Step 1 - Discover Three.js

Please visit <https://threejs.org/> the home of three.js on the web. There you can find an array of featured projects, the api documentation, lots of examples, forums, links to recommended books and websites.

![](/3DWebTechCourse/assets/threejs.png)

**Keep this bookmarked somewhere convenient. Over the rest of the module you will visit this website many times.**

Please take some time to review a few of the featured projects. You will get a feel for the possibilities that are achievable using three.js and webgl.

- <http://www.georgeandjonathan.com/#1>
- <http://mrdoob.com/files/temp/xplsv_obsidian/>
- <http://ericrius1.github.io/IndrasNet/public/>

### Boring Corporate Stuff

High Quallity Car Visualisation
- <https://renaultespace.littleworkshop.fr/>

This example is a simple header integrated with the webpage.
- <https://panic.com/transmit/>

### More Fun Game Like Stuff

In this mesh viewer music is played and the camera follows a spline around the scene to give the feel of a driver in the cockpit of the hovercar.
- <https://phoboslab.org/wipeout/>

This one is similar but a real game.
- <http://hexgl.bkcore.com/>

Pong or Somesuch
- <https://www.cubeslam.com/qucjla>


### Documentary Type Articles

- <https://www.nationalgeographic.com/science/2016/11/exploring-mars-map-panorama-pictures/>

If you find any more serious factual web pages that make good use of 3d tech like webgl can you let me know please and we will add it here?


### Interactive Art & Toys

Again, take a look around the web let me know what you can find and we'll put them here for everyone to see.


Q. Given what you've seen. What possibilities are _you_ interested in making?

Q. As we have close integrated access to all the other web technologies, what other interesting things could we do with that 3D rendering?

While you think about those questions, move on through the next few steps.

## Step 2 - Installing Tools

If you are using one of the lab machines on campus or are already doing js dev, then these tools will likely already be installed.

### Download and Install Chrome

Please visit <https://www.google.com/chrome/> where you will see a large blue button. Download and install Chrome by following the instructions.

![](/3DWebTechCourse/assets/getchrome.png)

You may use other browsers, all the major ones have the necessary debugging and inspection tools built in. It doesn't however make the course simpler to administer if we all use the same tools.

### Use Github for Backups

If you are using linux or one of the lab machines on campus then various text/cli git clients should already be installed.

Signup for Github (Educational for Privacy)
![](/3DWebTechCourse/assets/githubwecme.png)

You dont have to, but consider making yourself a project to keep your work in. We recommend you make a project for every piece of work you carry out. Keep your work there and push/sync all the changes you make. If you get in a pickle then you can roll back and get your earlier work.

You can of course use a USB stick and keep your work backed up on that. Just dont lose it.

The easiest and simplest way to access github and use it to keep your code backed up and secure is Github Desktop Client.

Download and Install Github Desktop Client: https://desktop.github.com/
![](/3DWebTechCourse/assets/getgthubdesktp.png)

Again, this is optional, but the best way. Later in your career if you continue to work in design tech you will use tools like this and their more complicated cousins.

### Choose a Text Editor

Download and Install Atom or similar. Feel free to use whatever text editor you like.
https://atom.io/
https://code.visualstudio.com/
![](/3DWebTechCourse/assets/getatm.png)


### Local Web Server for Testing

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


## Step 3 - Where are you going to put the files

Create a project dir call it "3dtech/wk1/ex1" or something similar.

The lab machines will hold your files for 24 hours but you must copy them to your home directory, onedrive, or a USB if you want to keep them longer. (Consider github above, it will be really useful later when you have to work in groups.)

Please visit <https://threejs.org/> follow the link on the left hand side to the source code on github

![](/3DWebTechCourse/assets/threejsorg.png)

This will take you to github where the files for the library are freely available.

![](/3DWebTechCourse/assets/githubthreejs.png)

near the top of the list of files and dirs should be a dir called 'build'

![](/3DWebTechCourse/assets/githubthreejs2.png)

download the three.js and three.min.js files. put them in a sub dir called js of your project dir .

## Step 4 - Making a simple html page to hold your work

make a index.html file and __type, not copy__ the following code...

~~~ html
    <!DOCTYPE html>
    <html>
        <head>
    		<title>Hello World</title>
    	</head>

    	<body>
            <p>Hello World</p>
            <script>
                <!-- YOUR CODE WILL GO IN HERE -->
            </script>
    	</body>
    </html>
~~~    

save your file and see if you can open it in a web browser on your machine. on linux with firefox you can browse right to it via the file finder, on OSX its allegedly the same. on windows you might have to run a server locally.

chrome apparently has a security measure so it doesn't let you run local code, there is a command line flag. google is your friend, try 'command line flags chrome open browse local files'

make sure you can open it in a web browser on your machine before advancing. this way if your code in the next section has problems or errors you know its because of what happened next. you should see 'Hello World' in the top left hand corner of the window.

![](/3DWebTechCourse/assets/HelloWorld.png)


if not, go back and check your code. check the dir/folder structure. check your url and make sure you have reached the correct index.html in the directory you made earlier.

## Step 5 - Include The Three.js Library in Your Project

take a look at the following code before we type it in lets have a read.

~~~ javascript
    <script src="js/three.min.js"></script>
~~~

its a really good habit when writing code to try to read and understand what it is going to do. either visualise or imagine or step through. once you run it with the computer you will have this memory to refer to and then start to model the code based on the differences between what you expected and what you got. keep doing it as a habit and you will get better over time.

__type, not copy__ it inside the header of the html we put in the index.html file from earlier.

Q. what does the above code do?

A. This code tells the browser to open the file and interpret it as javascript. which means the browser will begin to follow the instructions in a regular manner within the context of the current webpage. i say this in particular because the javascript can be used to investigate or update the web page. data stored in the web page can be read and written by the script. it can be made to do various things in partnership with the webpage, the two go together with the page as the io and the js as the logic.


## Step 6 - Simplest Possible Application Actually Does Nothing At All

To draw some 3d graphics on a 2d screen and have complete control over everything programmatically we need at a minimum three ingredients.

### scene
- something that holds a set of software objects which are going to be part of the scene, such as rectangles, points, meshes, lights, etc. each can be constructed to appear as anything we like. You can think of this as a stage on which the scenery will appear.

### camera
- this is where we imagine the observer (in our case the user) to be, it holds the position and a kind of simple virtual lens called a frustrum. its used to give the programmer control over what the user can actually see.

### renderer
- This visits at all the objects within the scene and looks at the numbers associated with each such as position, size, scale, color etc. It also examines the camera and the numbers associated with that especially position and field of view. All od this data is combined and used to construct a representation of a 3d environment which is then 'projected' which is a form of flattening so it can be drawn on a 2d plane, the domElement.

~~~ javascript
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75,
                        window.innerWidth/window.innerHeight,
                        0.1, 1000 );

    camera.position.z = 2;

    var renderer = new THREE.WebGLRenderer();

    renderer.setSize( window.innerWidth,
                        window.innerHeight );
    document.body.appendChild( renderer.domElement );

    renderer.render(scene, camera);    
~~~

Q. what does the above code do?

A. Creates 3 variables scene, camera and renderer. Associates the renderer with the webpage that the via a dom Element. The render is then asked to draw the scene from the perspective of the camera.

Q. What will you see when you run it?

A. Nothing! We have put all the infrastructure in place, but our scene is empty.

## Step 7 - Making a 3d Object and adding it to the scene

~~~ javascript
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshNormalMaterial();
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
~~~

Add the above code to your project after 'document.body.appendChild' and before 'renderer.render'.

![](/3DWebTechCourse/assets/square.png)

If you dont see something like this:
- check your code is identical to that above
- check the locations of your files

If you are using chrome or firefox, open the inspector and go to the console to see if it has generated any errors.

| Browser | Keys |
|---|---|
|Chrome | Ctrl Shift I |
|Firefox |Ctrl Shift I|
|Safari  |? |
|Edge    |? |


## Step 8 - Making a 3d Object and adding it to the scene

~~~ javascript
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshNormalMaterial();
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
~~~

Add the above code to your project after 'document.body.appendChild' and before 'renderer.render'.

![](/3DWebTechCourse/assets/square.png)

If you dont see something like this:
- check your code is identical to that above
- check the locations of your files


## Step 9 - Making Things Move

~~~ javascript

~~~

Add the above code to your project after .

![](/3DWebTechCourse/assets/cube.png)

If you dont see something like this:
- check your code is identical to that above
- check the locations of your files

If you are using chrome or firefox, open the inspector and go to the console to see if it has generated any errors.




## Step 10

Try to do as many of the following as you can.

- Change the size of your cube
- Move the cube around
- Add in some more cubes
- Add in some other shapes too
