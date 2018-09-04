var camera, scene, renderer,
    geometry, material, mesh;
 
init();
animate(); 

function init() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    // document.body.appendChild(stats.domElement);

    clock = new THREE.Clock();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    scene = new THREE.Scene();
 
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;
    scene.add( camera );
 
    geometry = new THREE.CubeGeometry( 200, 200, 200 );
    material = new THREE.MeshLambertMaterial( { color: 0xaa6666, wireframe: false } );
    mesh = new THREE.Mesh( geometry, material );
    //scene.add( mesh );
    cubeSineDriver = 0;
    if (screen.width>=1330) 
    {    
        /* the viewport is at least 400 pixels wide */
         console.log("salujachutiya");
        
        textGeo = new THREE.PlaneGeometry(400,300);
        
        }
    if (screen.width<=1329 && screen.width>=950)
     {     
             textGeo = new THREE.PlaneGeometry(350,230);
             console.log("adarshchutiya");
             
     }
    if(screen.width<=949 && screen.width>=770)
     {
        // function removeDummy() {
        //     var elem = document.getElementById('ul');
        //     elem.parentNode.removeChild(elem);
        //     return false;
        // }
        // removeDummy();
            textGeo = new THREE.PlaneGeometry(190,150);
                 console.log("hello");
     }
     else if(screen.width<=769 && screen.width>=625){
        //          function removeDummy() {
        //     var elem = document.getElementById('ul');
        //     elem.parentNode.removeChild(elem);
        //     return false;
        // }
        // removeDummy();
        textGeo = new THREE.PlaneGeometry(240,150);

    }
    else if(screen.width<=624 && screen.width>=300){
        // function removeDummy() {
        //     var elem = document.getElementById('ul');
        //     elem.parentNode.removeChild(elem);
        //     return false;
        // }
        // removeDummy();
        textGeo = new THREE.PlaneGeometry(200,150);

    }
    
 
    
    THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
    textTexture = THREE.ImageUtils.loadTexture('comingsoon_plinth.png');
    textMaterial = new THREE.MeshLambertMaterial({color: 0x00ffff, opacity: 1, map: textTexture, transparent: true, blending: THREE.AdditiveBlending})
    text = new THREE.Mesh(textGeo,textMaterial);
    
        if (screen.width>=1330) {
        /* the viewport is at least 400 pixels wide */
        text.position.z = 800;
        text.position.x=80;
        text.position.y=-100;
        } 
        else if (screen.width<=1329 && screen.width>=950)  {
        
        text.position.z = 800;
        text.position.x=-0;
        text.position.y=-115;
        }
        else if(screen.width<=949 && screen.width>=770)
        {
            
        text.position.z = 800;
        text.position.x=0;
        text.position.y=-120;}
        else if(screen.width<=769 && screen.width>=625)
        {
             text.position.z = 800;
             text.position.x=0;
             text.position.y=-100;

        }
        else if(screen.width<=624 && screen.width>=300){
            text.position.z = 800;
             text.position.x=0;
             text.position.y=-100;

        }
    
    scene.add(text);

    light = new THREE.DirectionalLight(0xffffff,0.5);
    light.position.set(-1,0,1);
    scene.add(light);
  
    smokeTexture = THREE.ImageUtils.loadTexture('Smoke-Element.png');
    smokeMaterial = new THREE.MeshLambertMaterial({color: 0x00dddd, map: smokeTexture, transparent: true});
    smokeGeo = new THREE.PlaneGeometry(300,300);
    smokeParticles = [];


    for (p = 0; p < 150; p++) {
        var particle = new THREE.Mesh(smokeGeo,smokeMaterial);
        particle.position.set(Math.random()*500-250,Math.random()*500-250,Math.random()*1000-100);
        particle.rotation.z = Math.random() * 360;
        scene.add(particle);
        smokeParticles.push(particle);
    }

    
 
    document.body.appendChild( renderer.domElement );
 
}
 
function animate() {
 
    // note: three.js includes requestAnimationFrame shim
    stats.begin();
    delta = clock.getDelta();
    requestAnimationFrame( animate );
    evolveSmoke();
    render();
    stats.end();
}
 
function evolveSmoke() {
    var sp = smokeParticles.length;
    while(sp--) {
        smokeParticles[sp].rotation.z += (delta * 0.2);
    }
}

function render() {
 
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
    cubeSineDriver += .01;
    mesh.position.z = 100 + (Math.sin(cubeSineDriver) * 500);
    renderer.render( scene, camera );
 
}
