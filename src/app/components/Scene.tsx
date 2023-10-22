"use client"

import { useEffect } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

export default function Scene() {

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const loader = new GLTFLoader();

        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector(".canvas") as any
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(650, 400);
        camera.position.setZ(1.2);

        renderer.render(scene, camera);

        // const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
        // const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
        // const torus = new THREE.Mesh(geometry, material);

        loader.load("http://localhost:3000/brain_project.glb", function (gltf) {
            scene.add(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
        });

        //scene.add(torus);

        // const pointLight = new THREE.PointLight(0xffffff);
        // pointLight.position.set(50, 50, 50);

        const ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(ambientLight);

        const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 4);
        scene.add(hemisphereLight);

        const directionalLight = new THREE.DirectionalLight( 0xffffbb, 0.5 );
        scene.add( directionalLight );

        // const lightHelper = new THREE.PointLightHelper(pointLight);
        // scene.add(lightHelper);

        const controls = new OrbitControls(camera, renderer.domElement);

        function animate() {
            requestAnimationFrame(animate);

            scene.rotation.y += 0.0005;

            controls.update();

            renderer.setClearColor(0xD3D3D3);

            renderer.render(scene, camera);
        }

        animate();
    }, [])

    return (
        <canvas className='canvas rounded-lg'></canvas>
    )
}