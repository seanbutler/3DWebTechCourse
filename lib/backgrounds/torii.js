
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
		this.geometry = new THREE.PlaneGeometry( 300, 300, 1 );
		this.material = new THREE.MeshLambertMaterial( {color: 0xff7f00 } );
		this.mesh = new THREE.Mesh( this.geometry, this.material );

		this.mesh.position.set(0, -10, 0);
		this.mesh.receiveShadow = true;

		this.mesh.rotation.set(Math.PI * -0.5, 0, 0);
		scene.add( this.mesh );
	}


}

// ----------------------------------------------------------------------------

class Thingamubob extends Entity {
	constructor(x, y, z) {
		super();
		this.geometry = new THREE.TorusKnotGeometry(10, 3, 64, 8);

		this.material = new THREE.MeshLambertMaterial( { color: 0xFFFFFF } );
		this.mesh = new THREE.Mesh( this.geometry, this.material );
		this.mesh.position.set(x, y, z);

		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;

		this.mesh.rotation.set(
			Math.random() * 2* Math.PI,
			Math.random() * 2* Math.PI,
			Math.random() * 2* Math.PI
		);

		scene.add( this.mesh );
	}


	Update()
	{
		this.mesh.rotation.x += 0.05;
		this.mesh.rotation.z -= 0.05;
	}

}

// ----------------------------------------------------------------------------

function init() {

	container = document.createElement( 'scenery' );
	document.body.appendChild( container );

	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xeeeeee );

  var light = new THREE.DirectionalLight( 0xffffff, 1, 1000 );

  light.position.set( 0, 100, 0 );
	light.castShadow = true;

	light.shadow.mapSize.width = 255;
	light.shadow.mapSize.height = 255;

	light.shadow.camera.near = 1;
	light.shadow.camera.far = 255;

	light.shadow.camera.right    =  150;
	light.shadow.camera.left     = -150;
	light.shadow.camera.top      =  150;
	light.shadow.camera.bottom   = -150;

	scene.add( light );

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 200;
	camera.position.y = 60;

	objects.push(new Environment());


for (var x = -3; x < 4; x+=2) {
	for (var y = 1; y < 5; y++) {
		for (var z = -3; z < 3; z+=2) {
			objects.push(new Thingamubob(x*30, y*30, -z*30));
		}
	}
}

	// objects.push(new Thingamubob(-50, 20, -20));
	// objects.push(new Thingamubob(-20, 30, 0));
	// objects.push(new Thingamubob(10, 40, 20));
	// objects.push(new Thingamubob(40, 50, 0));

scene.fog = new THREE.Fog(0xffffff, 1, 300);



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
