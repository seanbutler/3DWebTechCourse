
var container, stats;
var camera, controls, scene, renderer;
var objects = [];


function init() {

	container = document.createElement( 'scenery' );
	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 1000;

	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0x7f7f7f );

	// scene.add( new THREE.AmbientLight( 0x505050 ) );

    var light1 = new THREE.DirectionalLight( 0xff7f00, 2 );
	light1.position.set( 100, 0, -100 );
	light1.castShadow = false;
	scene.add( light1 );

    var light2 = new THREE.DirectionalLight( 0x007fff, 2 );
	light2.position.set( -100, 0, -100 );
	light2.castShadow = false;
	scene.add( light2 );

	var geometry = new THREE.BoxGeometry( 40, 40, 40 );

	for ( var i = 0; i < 50; i ++ ) {

		// var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );
		var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0xFFFFFF } ) );

		object.position.x = Math.random() * 1200 - 600;
		object.position.y = Math.random() * 800 - 400;
		object.position.z = Math.random() * 800 - 200;

		object.rotation.x = Math.random() * 2 * Math.PI;
		object.rotation.y = Math.random() * 2 * Math.PI;
		object.rotation.z = Math.random() * 2 * Math.PI;

		object.scale.x = Math.random() * 2 + 4;
		object.scale.y = Math.random() * 2 + 4;
		object.scale.z = Math.random() * 2 + 4;

		object.castShadow = false;
		object.receiveShadow = false;

		scene.add( object );
		objects.push( object );

	}

	renderer = new THREE.WebGLRenderer( { antialias: false } );
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
		obj.rotation.y += 0.005;
	}

	renderer.render( scene, camera );

}


init();
animate();