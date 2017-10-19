
var camera, controls, scene, renderer;
var container, stats;
var objects = [];

// ----------------------------------------------------------------------------

class Entity {
	constructor() {
	}

	Update() {
	}

	Reset() {
	}

}

// ----------------------------------------------------------------------------

class Environment extends Entity{
	constructor() {
		super();
		this.geometry = new THREE.PlaneGeometry( 800, 800, 8 );
		this.material = new THREE.MeshLambertMaterial( {color: 0xff7f00 } );
		this.mesh = new THREE.Mesh( this.geometry, this.material );

		this.mesh.position.set(0, -50, 0);
		this.mesh.receiveShadow = true;

		this.mesh.rotation.set(Math.PI * -0.5, 0, 0);
		scene.add( this.mesh );
	}


}

// ----------------------------------------------------------------------------

class Thingamubob extends Entity {
	constructor(x, y, z) {
		super();
		this.geometry = new THREE.TorusKnotGeometry(10, 3, 128, 16, 4, 3);

		this.material = new THREE.MeshLambertMaterial( { color: 0xFFFFFF } );
		this.mesh = new THREE.Mesh( this.geometry, this.material );
		this.mesh.position.set(x, y, z);

		this.mesh.scale.x =
		this.mesh.scale.y =
		this.mesh.scale.z = 8;

		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;

		this.mesh.rotation.set(
			Math.random() * 1 * Math.PI,
			Math.random() * 1* Math.PI,
			Math.random() * 1* Math.PI
		);

		scene.add( this.mesh );
	}


	Update()
	{
		this.mesh.rotation.y += 0.05;
		this.mesh.rotation.z -= 0.05;
	}

}

// ----------------------------------------------------------------------------

function init() {

	container = document.createElement( 'scenery' );
	document.body.appendChild( container );

	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xffffff );

  var light = new THREE.DirectionalLight( 0xffffff, 1, 1000 );

  light.position.set( 0, 100, 0 );
	light.castShadow = true;

	light.shadow.mapSize.width = 255;
	light.shadow.mapSize.height = 255;

	light.shadow.camera.near = 1;
	light.shadow.camera.far = 255;

	light.shadow.camera.right    =  400;
	light.shadow.camera.left     = -400;
	light.shadow.camera.top      =  400;
	light.shadow.camera.bottom   = -400;

	scene.add( light );

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 250;
	camera.position.y = 60;

	objects.push(new Environment());


// for (var x = -2; x < 3; x++) {
// 	for (var y = 0; y < 3; y++) {
// 		for (var z = 0; z < 3; z++) {
// 			objects.push(new Thingamubob(x*60, y*50, z*60));
// 		}
// 	}
// }

	// objects.push(new Thingamubob(-50, 20, -20));
	// objects.push(new Thingamubob(-20, 30, 0));
	// objects.push(new Thingamubob(10, 40, 20));
	// objects.push(new Thingamubob(40, 50, 0));

	objects.push(new Thingamubob(40, 100, 0));


	scene.fog = new THREE.Fog(0xffffff, 1, 400);



	renderer = new THREE.WebGLRenderer(  );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

	container.appendChild( renderer.domElement );
	window.addEventListener( 'resize', onWindowResize, false );
}

// ----------------------------------------------------------------------------

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );
}

// ----------------------------------------------------------------------------

function animate() {

	requestAnimationFrame( animate );

	for (obj of objects) {
		obj.Update();
	}

	renderer.render( scene, camera );
}

// ----------------------------------------------------------------------------


init();
animate();
