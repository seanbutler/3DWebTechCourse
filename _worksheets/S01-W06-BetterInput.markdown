---
layout: worksheet
title:  "S1 W6 Better Input System & the Service Pattern"
date:   2017-09-13 23:46:24 +0100
desc: "Move all keyboard Input, store it and share data across the entities"

---

## Previously on 3DTFTW

- Nice scene with objects, lights and similar
- Recap Storing Objects in a container and updating them en-masse
- Detecting Collision Between Player and Obstacles

## Aims and Objectives

You may remember to make your objects move previously you had to keep pressing the key again and again. That is great for typing style input, but for real-time games we need an object to move when you start pressing a key and continue the movement until you release the same key.

To achieve this we will create a system which listens to the keyboard, and stores the not the keydown and keyup events, but instead stores the result of these events on the change in keyboard state. Which means a key down will set the element in an array which corresponds to that key to 'true' and a key up event will set the element in an array which corresponds to that key to 'false'.

So if you press Spacebar the 32nd element of the array is set to true. If you release the Spacebar the 32nd element is set to false.

32 is the code generated by the Spacebar, every key has a unique number.

This way we can have a single event to store the updated keyboard state but lots of different entities can examine the data.

## Step 1 - A Game Engine is made of Services

Create a new class in your javascript file, somewhere near the top.

~~~ javascript

    class Service{
        constructor(){
        }

        Update(){
        }
    };

~~~

This is the base for the Service class, you wont create any of these directly, but will derive from it when we want to add functionality to the main loop that exists as part of the engine rather than as part of the entities. Notice it uses the Update() method pattern.

## Step 2 - One Service takes care of the Keyboard for us

Next create another class KeyboardService which is derived from the Service. This holds an array which will be used to store information about all the keys on the keyboard. Also provide a method which allows other code to get the keys status.

~~~ javascript

    class KeyboardService extends Service{
        constructor(){
            super();
            this.keys=[];
        }

        Update(){
        }

        IsKeydown(keyCode){
            return this.keys[keyCode];
        }
    };

~~~

Declare a variable 'keyboard' and assign a new KeyboardService to it, you will use this below and at various places in your code.

Next, add two methods to the above class. Each one takes an event as its parameter then extracts they keycode from that event. This keycode is used to index the array and set it to true and false.

~~~ javascript

    DocumentKeyDown(event) {
        // console.log("Down")
        var keyCode = event.keyCode;
        keyboard.keys[keyCode]=true;
    };

    DocumentKeyUp(event) {
        // console.log("Up")
        var keyCode = event.keyCode;
        keyboard.keys[keyCode]=false;
    };

~~~

## Step 3 - Connect the Browser to the Keyboard Service by Event Listeners

This is all very well, but we have to connect this class to the web-browser and make the methods run when keys are pressed and released.

~~~ javascript

    document.addEventListener("keydown", this.DocumentKeyDown, false);
    document.addEventListener("keyup", this.DocumentKeyUp, false);

~~~

Add the above code to the constructor. It will join the methods to the web browser's generated events.

## Step 4 - The Entity then checks the Keyboard itself

In the update method of the entity you wish to respond to keyboard, add the code below.

~~~ javascript

    if (keyboard.IsKeydown(38) == true) {
        this.mesh.position.y += 0.025;
    }

    if (keyboard.IsKeydown(40) == true) {
        this.mesh.position.y -= 0.025;
    }

    if (keyboard.IsKeydown(37) == true) {
        this.mesh.position.x -= 0.025;
    }

    if (keyboard.IsKeydown(39) == true) {
        this.mesh.position.x += 0.025;
    }

    if (keyboard.IsKeydown(32) == true) {
        this.mesh.position.x = 0;
        this.mesh.position.y = 0;
        this.mesh.position.z = 0;
    }

~~~

## Exercises

If you google 'keycodes' you will reach some sites which let you know the keycodes for any buttons you like. Failing that try, https://keycode.info/

- Can you tweak the code above to use the WASD keys like a modern video game?
- Can you make it move forward and backward instead of up and down?
