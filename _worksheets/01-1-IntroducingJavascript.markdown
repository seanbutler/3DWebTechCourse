---
layout: slides
title:  "Introducing Javascript"
date:   2017-09-13 23:46:24 +0100
---


# Introducing Javascript


## Aims & Objectives
- Understand Why Javascript
- Why do people dislike it?
- Review The Differences from other Languages
- Be Familiar Enough to Migrate
- Review Several Common Pitfalls/Gotchas for new js programmers

## Javascript for Java Programmers

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

## General syntax

- Similar Yet Different
- Derived from Java and C so should be familiar to _anyone_ coming from those languages.
- There are several important differences from how you might expect a language of this heritage to behave.


## Why Javascript?

- Javascript is the most popular programming language today
- There is a runtime environment, development environment and debugger on every desktop machine everywhere
- Javascript is different from _whatever you were using before_
- May cause pain, but there is pain for all new language learning
- Javascript is the language built into web pages
- The internal model of web pages (DOM) sucks
- The DOM is big and complicated, vendors implemented it differently and its not completely standard

## The Good


## The Bad Parts


## The Global Namespace



## Equals

- ==
- !==
- ===
- !==


## with statement



## eval

- major security problem
- you pass control of your program to the contents of a string variable
- so you have to up things in place to stop malicious code getting in there
- don't


## continue

- continue jumps back to the top of a loop
- refactor it out
- simpler & singular, and overall easier to read
- express your branches separately from the loop itself


## switch fallthrough

- generally not needed
- only use if you have to
- most switches are expected to not fall through, so if you do, then make sure you announce it clearly
- refactor it out



## Blockless Statements

- if, while, do, for statements take a block
- blocks can be singles lines or other statements without the { }
- this can lead to some confusing issues

## Main Differences Between Javascript and Java

## Built In Types

## Numbers

## Strings

## Prototype Objects rather than classes

a set of idioms for encapsulation that rely on the dynamic nature of the language. es2016 introduces class syntax for the traditional approach.

## Untyped variables

var & hoisting
es2016 introduced let





- https://www.d.umn.edu/~gshute/webdev/javascript/javascript.xhtml
- http://blog.angular-university.io/javascript-for-java-developers/
- http://blog.firetree.net/2005/06/16/object-orientated-javascript/



## Discussion

As for web browsers, both Google Chrome and Mozilla Firefox have excellent WebGL support. Google Chrome has a particularly helpful set of built-in developer tools that can greatly simplify the workflow process, such as a console that can be used for debugging and inspecting Javascript values and objects, and Workspace settings that allow you to edit and save source files from within the browser. More details can be found at the Chrome DevTools site.

Tip: It is also possible to write code using Three.js entirely online, using services such as cloud9 or jsFiddle. This option is typically only used for sharing examples or demonstrations with small amounts of code.

(from: https://gamedevelopment.tutsplus.com/articles/how-to-learn-threejs-for-game-development--gamedev-11787)

## Step 5
- I'm assuming you know html and css at this point.

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
