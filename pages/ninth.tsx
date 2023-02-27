import { FunctionComponent, useEffect } from "react";
import Layout from "../src/components/layout";
import * as THREE from 'three';

interface NinthProps{}

const NinthExperiment:FunctionComponent<NinthProps> = () => {
    const Cube = () => {
        //Basic Info of the render
        
        useEffect(() => {
            const container = document.getElementById( 'canvas' ); // Set default placement for canvas
            const canvasWidth = 900; // Canvas Width
            const canvasHeight = 500; // Canvas Height

            //Info Render
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize( canvasWidth, canvasHeight ); //Canvas size (width, height)
            container.appendChild( renderer.domElement ); //Where you want the canvas to be rendered. For now it is rendered at container.

            const scene = new THREE.Scene();

            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
            const cube = new THREE.Mesh( geometry, material );
            cube.position.set(0,0,0);
            scene.add( cube );

            const sphereGeometry = new THREE.SphereGeometry( 2, 32, 16 );
            const sphereMaterial = new THREE.MeshLambertMaterial( { color: 0xffff00 } );
            const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
            sphere.position.set(-5,0,0);
            scene.add( sphere );

            //Atom
            const atomGeometry = new THREE.SphereGeometry(1,32,16);
            const atomMaterial = new THREE.MeshLambertMaterial( { color: 0xff0000 } );
            const atom = new THREE.Mesh (atomGeometry , atomMaterial);
            const atom1 = new THREE.Mesh (atomGeometry , atomMaterial);
            const atom2 = new THREE.Mesh (atomGeometry , atomMaterial);
            const atom3 = new THREE.Mesh (atomGeometry , atomMaterial);
            atom.position.set(0,0,0); //center
            atom1.position.set(-1,-1,0);
            atom2.position.set(1,-1,0);
            atom3.position.set(0,1,0);
            const group = new THREE.Group();
            group.add(atom);
            group.add(atom1);
            group.add(atom2);
            group.add(atom3);
            // scene.add(group);
            const pivot = new THREE.Object3D();
            pivot.add(group); 
            pivot.position.set(8,0,0);
            scene.add(pivot);

            //Camera
            const camera = new THREE.PerspectiveCamera( 45, canvasWidth / canvasHeight, 0.1, 10000 );
            camera.position.z = 20;
            // camera.lookAt(cube.position); //Indicate the starting point of camera. If not it will be default to 0,0,0
            scene.add(camera);

            //PointLight
            const sphereSize = 1;

            const light1 = new THREE.PointLight(0xffffff);
            light1.position.set(12,5,0);
            scene.add(light1);
            const pointLightHelper = new THREE.PointLightHelper( light1, sphereSize );
            scene.add( pointLightHelper );

            const light2 = new THREE.PointLight(0xffffff);
            light2.position.set(-12,-5,0)
            scene.add(light2);
            const pointLightHelper2 = new THREE.PointLightHelper( light2, sphereSize ); 
            scene.add( pointLightHelper2 );

            const animate = () => {
                requestAnimationFrame( animate );
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                sphere.rotation.x += 0.01;
                sphere.rotation.y += 0.01;
                pivot.rotation.y += 0.01;
                pivot.rotation.x += 0.01;
                renderer.render( scene, camera );
            }
            animate();
            // renderer.render( scene, camera );
          }, []);

        return(
            <div id="canvas"></div>
        )
    }
    

    return(
        <Layout title="Three JS">
            <h1>ThreeJS</h1>
            <Cube />
        </Layout>
    )
}

export default NinthExperiment;