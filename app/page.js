"use client";
import React, { useEffect } from 'react';
import * as THREE from 'three';


const ThreeComponent = () => {
    useEffect(() => {
        let container;
        let camera, scene, renderer, stats;

        init();
        animate();

        function init() {
            container = document.getElementById('three-container');

            // Camera
            camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10);
            camera.position.z = 2;

            // Scene
            scene = new THREE.Scene();

            //text


            // Geometry
            const vector = new THREE.Vector4();
            const instances = 50;
            const positions = [];
            const offsets = [];
            const colors = [];
            const orientationsStart = [];
            const orientationsEnd = [];

            // Positions
            positions.push(0.025, -0.025, 0);
            positions.push(-0.025, 0.025, 0);
            positions.push(0, 0, 0.025);

            // Instanced attributes
            for (let i = 0; i < instances; i++) {
                // Offsets
                offsets.push(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);

                // Colors
                colors.push(Math.random(), Math.random(), Math.random(), Math.random());

                // Orientation start
                vector.set(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
                vector.normalize();
                orientationsStart.push(vector.x, vector.y, vector.z, vector.w);

                // Orientation end
                vector.set(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
                vector.normalize();
                orientationsEnd.push(vector.x, vector.y, vector.z, vector.w);
            }

            const geometry = new THREE.InstancedBufferGeometry();
            geometry.instanceCount = instances;

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            geometry.setAttribute('offset', new THREE.InstancedBufferAttribute(new Float32Array(offsets), 3));
            geometry.setAttribute('color', new THREE.InstancedBufferAttribute(new Float32Array(colors), 4));
            geometry.setAttribute('orientationStart', new THREE.InstancedBufferAttribute(new Float32Array(orientationsStart), 4));
            geometry.setAttribute('orientationEnd', new THREE.InstancedBufferAttribute(new Float32Array(orientationsEnd), 4));

            // Material
            const material = new THREE.RawShaderMaterial({
                uniforms: {
                    'time': { value: 1.0 },
                    'sineTime': { value: 1.0 }
                },
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
                side: THREE.DoubleSide,
                transparent: true
            });

            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            // Renderer
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            container.appendChild(renderer.domElement);

            // Stats
            // stats = new Stats();
            // container.appendChild(stats.dom);

            // Window resize listener
            window.addEventListener('resize', onWindowResize);
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function animate() {
            requestAnimationFrame(animate);
            render();
            // stats.update();
        }

        function render() {
            const time = performance.now();
            const object = scene.children[0];
            object.rotation.y = time * 0.0005;
            object.material.uniforms['time'].value = time * 0.005;
            object.material.uniforms['sineTime'].value = Math.sin(object.material.uniforms['time'].value * 0.05);
            renderer.render(scene, camera);
        }

        return () => {
            // Clean up
            window.removeEventListener('resize', onWindowResize);
            container.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center h-auto bg-black">
            <div id="three-container" className="w-full h-full" />
        </div>
    );
};

// Vertex Shader
const vertexShader = `
    // precision highp float;
    // uniform float sineTime;
    // uniform mat4 modelViewMatrix;
    // uniform mat4 projectionMatrix;
    // attribute vec3 position;
    // attribute vec3 offset;
    // attribute vec4 color;
    // attribute vec4 orientationStart;
    // attribute vec4 orientationEnd;
    // varying vec3 vPosition;
    // varying vec4 vColor;
    // void main(){
    //     vPosition = offset * max( abs( sineTime * 2.0 + 1.0 ), 0.5 ) + position;
    //     vec4 orientation = normalize( mix( orientationStart, orientationEnd, sineTime ) );
    //     vec3 vcV = cross( orientation.xyz, vPosition );
    //     vPosition = vcV * ( 2.0 * orientation.w ) + ( cross( orientation.xyz, vcV ) * 2.0 + vPosition );
    //     vColor = color;
    //     gl_Position = projectionMatrix * modelViewMatrix * vec4( vPosition, 1.0 );
    // }
    precision highp float;
uniform float sineTime;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
attribute vec3 position;
attribute vec3 offset;
attribute vec4 color;
attribute vec4 orientationStart;
attribute vec4 orientationEnd;
varying vec3 vPosition;
varying vec4 vColor;

void main(){
    vPosition = offset * max( abs( sineTime * 2.0 + 1.0 ), 0.5 ) + position;
    vec4 orientation = normalize( mix( orientationStart, orientationEnd, sineTime ) );
    vec3 vcV = cross( orientation.xyz, vPosition );
    vPosition = vcV * ( 2.0 * orientation.w ) + ( cross( orientation.xyz, vcV ) * 2.0 + vPosition );
    vColor = color;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( vPosition * 0.5, 1.0 ); // Scale down the object

}
`;

// Fragment Shader
const fragmentShader = `
    precision highp float;
    uniform float time;
    varying vec3 vPosition;
    varying vec4 vColor;
    void main() {
        // vec4 color = vec4( vColor );
        // color.r += sin( vPosition.x * 10.0 + time ) * 0.5;
        // gl_FragColor = color;
        vec3 lightDirection = normalize(vec3(0.5, 0.5, 1.0));
  float lightIntensity = max(dot(normalize(vPosition), lightDirection), 0.0);
  vec3 finalColor = vColor.rgb * lightIntensity;
  gl_FragColor = vec4(finalColor, 1.0);
    }
`;

export default ThreeComponent;
