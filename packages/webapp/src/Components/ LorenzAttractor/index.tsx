import { Box } from '@chakra-ui/react';
import React, { useEffect, useId, useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';

export const LorenzAttractor = () => {

    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {

        // Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0xffffff, 1); // white background
        renderer.setSize(1000, 1000);
        ref.current?.appendChild(renderer.domElement);

        // Objects
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

        function createRandomTorus() {
            const geometry = new THREE.TorusKnotGeometry(Math.random() * 10 + 5, Math.random() * 3 + 1, 100, 16);
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100);
            mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
            scene.add(mesh);
        }

        // Create multiple tori
        for (let i = 0; i < 20; i++) {
            createRandomTorus();
        }

        // Camera
        camera.position.z = 150;

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            scene.traverse((object : any)=> {
                if (object.isMesh) {
                    object.rotation.x += 0.01;
                    object.rotation.y += 0.01;
                }
            });
            renderer.render(scene, camera);
        }
    }, [])

    return <Box id={`${id}`} ref={ref} w={'1000px'} h={'1000px'} />
}