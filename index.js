import * as THREE from "three";

const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true }); // Create a renderer
renderer.setSize(w, h); // Set size of renderer
document.body.appendChild(renderer.domElement); // Add renderer to DOM

const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far); // Create a camera
camera.position.z = 2; // Set camera position

const scene = new THREE.Scene(); // Create a scene

const geo = new THREE.IcosahedronGeometry(1, 2); // Create a geometry
const mat = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Create a material
const mesh = new THREE.Mesh(geo, mat); // Create a mesh
scene.add(mesh); // Add mesh to scene

renderer.render(scene, camera); // Render scene
