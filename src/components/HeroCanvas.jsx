import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function HeroCanvas() {
  const mountRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7);

    // 3. Renderer Setup with Photorealistic Tone Mapping
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true, 
      powerPreference: 'high-performance' 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 4. Lighting Setup for Flower Details
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xfff5ea, 2.8);
    mainKeyLight.position.set(5, 8, 5);
    mainKeyLight.castShadow = true;
    mainKeyLight.shadow.mapSize.width = 2048;
    mainKeyLight.shadow.mapSize.height = 2048;
    mainKeyLight.shadow.bias = -0.0001;
    scene.add(mainKeyLight);

    const fillLight = new THREE.DirectionalLight(0xe8f0ff, 1.5);
    fillLight.position.set(-5, 3, -2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 2.0);
    rimLight.position.set(0, -4, -5);
    scene.add(rimLight);

    const centerPointLight = new THREE.PointLight(0xffffff, 1.0, 10);
    centerPointLight.position.set(0, 1, 2);
    scene.add(centerPointLight);

    // Pivot group for model centering and smooth mouse interaction
    const pivot = new THREE.Group();
    scene.add(pivot);

    let modelNode = null;
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    // 5. Load & Enhance 3D GLB Model
    const loader = new GLTFLoader();
    const modelUrl = encodeURI('/flower bouquet 3d model.glb');

    loader.load(
      modelUrl,
      (gltf) => {
        modelNode = gltf.scene;

        // Auto-center model geometry bounding box
        const box = new THREE.Box3().setFromObject(modelNode);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        modelNode.position.sub(center); // center model at (0,0,0)

        // Scale model to fit nicely in hero background
        const maxDim = Math.max(size.x, size.y, size.z);
        const scaleFactor = 3.6 / (maxDim || 1);
        modelNode.scale.setScalar(scaleFactor);

        // Perfect model mesh & material properties
        modelNode.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child.geometry) {
              child.geometry.computeVertexNormals();
            }

            if (child.material) {
              // Ensure double-sided rendering to fix missing leaf back-faces
              child.material.side = THREE.DoubleSide;
              child.material.roughness = Math.min(child.material.roughness || 0.4, 0.5);
              child.material.metalness = Math.max(child.material.metalness || 0.05, 0.05);

              // Enable smooth transparency blending if material uses alpha
              if (child.material.transparent) {
                child.material.depthWrite = true;
                child.material.alphaTest = 0.05;
              }

              child.material.needsUpdate = true;
            }
          }
        });

        pivot.add(modelNode);
        pivot.position.set(0, -0.2, 0); // subtle vertical offset
        setIsLoaded(true);
      },
      (xhr) => {
        if (xhr.total > 0) {
          const percent = Math.round((xhr.loaded / xhr.total) * 100);
          setLoadingProgress(percent);
        }
      },
      (error) => {
        console.error('Error loading 3D GLB model:', error);
      }
    );

    // 6. Mouse Movement Listener for Interactive Tilt Parallax
    const handleMouseMove = (event) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) / windowHalfX;
      mouseY = (event.clientY - windowHalfY) / windowHalfY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 7. Window Resize Listener
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // 8. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (pivot) {
        // Continuous organic rotation
        pivot.rotation.y += 0.004;

        // Subtle floating bobbing motion
        pivot.position.y = -0.2 + Math.sin(elapsedTime * 1.2) * 0.12;

        // Mouse parallax easing
        targetRotationY = mouseX * 0.3;
        targetRotationX = mouseY * 0.2;
        pivot.rotation.x += (targetRotationX - pivot.rotation.x) * 0.05;
        pivot.rotation.z += (-targetRotationY * 0.5 - pivot.rotation.z) * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero-3d-canvas-wrapper">
      <div ref={mountRef} className="hero-3d-canvas" />

      {!isLoaded && (
        <div className="model-loading-indicator">
          <span className="loading-spinner" />
          <span className="loading-text">Loading 3D Flower Bouquet... {loadingProgress}%</span>
        </div>
      )}
    </div>
  );
}
