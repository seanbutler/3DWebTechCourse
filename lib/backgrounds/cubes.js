
var container, stats;
var camera, controls, scene, renderer;
var objects = [];


function init() {

	container = document.createElement( 'scenery' );
	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 2;

	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0x000000 );

	var light1 = new THREE.DirectionalLight( 0xff7700, 1 );
	light1.position.set( 1, 0, 1 );
	light1.castShadow = false;
	scene.add( light1 );

	var light2 = new THREE.DirectionalLight( 0x0077ff, 1 );
	light2.position.set( -1, 0, 1 );
	light2.castShadow = false;
	scene.add( light2 );

	var geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );

	for ( var i = 0; i < 5; i ++ ) {

		// var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );
		var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0xFFFFFF } ) );

		object.position.x = 2 * Math.random() - 1;
		object.position.y = Math.random() - 0.5;
		object.position.z = Math.random() - 0.5;

		object.rotation.x = Math.random() * 2 * Math.PI;
		object.rotation.y = Math.random() * 2 * Math.PI;
		object.rotation.z = Math.random() * 2 * Math.PI;

		// object.scale.x = Math.random() * 2 + 4;
		// object.scale.y = Math.random() * 2 + 4;
		// object.scale.z = Math.random() * 2 + 4;

		object.castShadow = false;
		object.receiveShadow = false;

		scene.add( object );
		objects.push( object );

	}

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );

	// renderer.shadowMap.enabled = true;
	// renderer.shadowMap.type = THREE.PCFShadowMap;

	container.appendChild( renderer.domElement );

	// var dragControls = new THREE.DragControls( objects, camera, renderer.domElement );
	// dragControls.addEventListener( 'dragstart', function ( event ) { controls.enabled = false; } );
	// dragControls.addEventListener( 'dragend', function ( event ) { controls.enabled = true; } );

	// var info = document.createElement( 'div' );
	// info.style.position = 'absolute';
	// info.style.top = '10px';
	// info.style.width = '100%';
	// info.style.textAlign = 'center';
	// info.innerHTML = '<a href="http://threejs.org" target="_blank" rel="noopener">three.js</a> webgl - draggable cubes';
	// container.appendChild( info );

	// stats = new Stats();
	// container.appendChild( stats.dom );

	//

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );
	// console.log("resize");

}

//

function animate() {

	requestAnimationFrame( animate );

	// controls.update();

	for (obj of objects) {
		obj.rotation.y += 0.01;
	}

	renderer.render( scene, camera );

}


init();
animate();
