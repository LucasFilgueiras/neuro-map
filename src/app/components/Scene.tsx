"use client"

import { useEffect } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

export default function Scene() {

    useEffect(() => {
        const canvas = document.querySelector(".canvas") as any;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const loader = new GLTFLoader();

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(800, 450);
        camera.position.setZ(1.2);

        renderer.render(scene, camera);

        loader.load("../../brain_project.glb", function (gltf) {
            scene.add(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
        });

        const ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(ambientLight);

        const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 4);
        scene.add(hemisphereLight);

        const directionalLight = new THREE.DirectionalLight(0xffffbb, 0.5);
        scene.add(directionalLight);

        const controls = new OrbitControls(camera, renderer.domElement);

        scene.translateY(-0.65);

        function animate() {
            requestAnimationFrame(animate);
            //scene.rotation.y += 0.0005;
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