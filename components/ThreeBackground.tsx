import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    // Use a fog to blend distant particles into the background color
    scene.fog = new THREE.FogExp2(0x0A2540, 0.002);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // Position camera to see the object
    camera.position.z = 35;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // optimize for high DPI
    mountRef.current.appendChild(renderer.domElement);

    // --- Create "Brain" / Network Object ---
    const group = new THREE.Group();
    scene.add(group);

    // 1. Particles (Neurons/Nodes)
    const particleCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const color1 = new THREE.Color(0x2EE5AC); // Teal
    const color2 = new THREE.Color(0x0088ff); // Blue
    const color3 = new THREE.Color(0xffffff); // White highlight

    for (let i = 0; i < particleCount; i++) {
        // Create a shaped cloud. A sphere is good, but let's deform it slightly to look more organic.
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        
        // Base sphere
        let r = 15 + Math.random() * 2; 
        
        // Add some noise/lobes to hint at a brain structure
        // Squeeze x slightly?
        // r += Math.sin(theta * 5) * 0.5;

        let x = r * Math.sin(phi) * Math.cos(theta);
        let y = r * Math.sin(phi) * Math.sin(theta);
        let z = r * Math.cos(phi);

        // Flatten slightly to look like a brain (two lobes?)
        // Let's just keep it a "Cybernetic Core" (Sphere) as it fits the "Global" theme better.
        // Maybe add a second layer inside.
        
        if (i % 3 === 0) {
            // Core particles
            const coreR = 8 + Math.random() * 4;
            x = coreR * Math.sin(phi) * Math.cos(theta);
            y = coreR * Math.sin(phi) * Math.sin(theta);
            z = coreR * Math.cos(phi);
        }

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        // Color gradient based on position
        const mixedColor = color1.clone().lerp(color2, (y / r + 1) / 2);
        
        // Random white sparks - reduced probability to avoid "flashing"
        if (Math.random() > 0.98) {
             mixedColor.lerp(color3, 0.8);
             sizes[i] = 1.5;
        } else {
             sizes[i] = 0.5 + Math.random() * 0.5;
        }

        colors[i * 3] = mixedColor.r;
        colors[i * 3 + 1] = mixedColor.g;
        colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Custom shader material for round glowing particles
    const vertexShader = `
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        // Increased size multiplier slightly to make particles softer
        gl_PointSize = size * (400.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;
      void main() {
        float r = distance(gl_PointCoord, vec2(0.5));
        if (r > 0.5) discard;
        float glow = 1.0 - (r * 2.0);
        glow = pow(glow, 1.5);
        gl_FragColor = vec4(vColor, glow);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms: {},
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    group.add(particles);

    // 2. Connecting Lines (Subtle Network)
    // We use a wireframe geometry to simulate connections without calculating them every frame
    const connectionsGeo = new THREE.IcosahedronGeometry(15, 2);
    const connectionsMat = new THREE.LineBasicMaterial({ 
        color: 0x2EE5AC, 
        transparent: true, 
        opacity: 0.08,
        blending: THREE.AdditiveBlending
    });
    const connections = new THREE.LineSegments(new THREE.WireframeGeometry(connectionsGeo), connectionsMat);
    // Scale it slightly up
    connections.scale.set(1.05, 1.05, 1.05);
    group.add(connections);
    
    // 3. Floating Rings (Data streams)
    const ringGeo = new THREE.TorusGeometry(22, 0.1, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x0088ff, transparent: true, opacity: 0.15 });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 2;
    ring1.rotation.y = -0.2;
    group.add(ring1);

    const ring2 = ring1.clone();
    ring2.rotation.x = Math.PI / 1.8;
    ring2.rotation.y = 0.5;
    ring2.scale.set(0.8, 0.8, 0.8);
    group.add(ring2);

    // --- Interaction ---
    const mouse = new THREE.Vector2();
    const targetRotation = new THREE.Vector2();
    
    const onMouseMove = (event: MouseEvent) => {
      // Normalize mouse -1 to 1
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', onMouseMove);

    // --- Animation ---
    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Smooth follow mouse for rotation
      targetRotation.x = mouse.y * 0.3; // Reduced sensitivity
      targetRotation.y = mouse.x * 0.3;
      
      group.rotation.x += (targetRotation.x - group.rotation.x) * 0.05;
      group.rotation.y += (targetRotation.y - group.rotation.y) * 0.05;

      // Reduced constant spin speed significantly
      group.rotation.y += 0.0005;

      // Slower pulse
      const scale = 1 + Math.sin(time * 0.3) * 0.02;
      group.scale.set(scale, scale, scale);
      
      // Animate rings independently (slower)
      ring1.rotation.z += 0.0005;
      ring2.rotation.z -= 0.001;

      // Gentle floating motion
      group.position.y = Math.sin(time * 0.8) * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 opacity-80" />;
};

export default ThreeBackground;