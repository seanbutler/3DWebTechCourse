
var container, stats;
var camera, controls, scene, renderer;
var objects = [];

function init() {

	container = document.createElement( 'scenery' );
	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 2;

	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xFFFFFF );

	var light1 = new THREE.DirectionalLight( 0xff7700, 1 );
	light1.position.set( 1, 0, 1 );
	light1.castShadow = false;
	scene.add( light1 );

	var light2 = new THREE.DirectionalLight( 0x0077ff, 1 );
	light2.position.set( -1, 0, 1 );
	light2.castShadow = false;
	scene.add( light2 );

	var geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
	// var geometry = new THREE.SphereGeometry( 0.5, 10, 10 );

	for ( var i = 0; i < 50; i ++ ) {

		// var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );
		var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0xFFFFFF } ) );

		object.position.x = 4 * Math.random() - 2;
		object.position.y = 2* Math.random() - 1;
		object.position.z = Math.random() - 0.5;

		object.rotation.x = Math.random() * 2 * Math.PI;
		object.rotation.y = Math.random() * 2 * Math.PI;
		object.rotation.z = Math.random() * 2 * Math.PI;

		object.scale.x =
		object.scale.y =
		object.scale.z = Math.random();

		object.castShadow = false;
		object.receiveShadow = false;

		scene.add( object );
		objects.push( object );

	}

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );

	container.appendChild( renderer.domElement );

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );
}

//

function animate() {

	requestAnimationFrame( animate );

	var top = (window.pageYOffset || document.documentElement.scrollTop)
	  - (document.documentElement.clientTop || 0);

	for (obj of objects) {
		obj.rotation.y = top * 0.001;
		// top * 0.01;
		// camera.rotation.z = Math.sin(top * 0.005) * 2;
		// obj.scale.x = obj.scale.y = obj.scale.z = 0.5 + Math.sin(top * 0.0005) * 0.25;
	}

	renderer.render( scene, camera );

}


init();
animate();
