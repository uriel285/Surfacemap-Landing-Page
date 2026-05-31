import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Float,
  Environment,
  OrbitControls,
  useGLTF,
  Center,
  useProgress,
} from '@react-three/drei';
import { Suspense } from 'react';

function LogoModel() {
  const { scene } = useGLTF('/models/surfacelogo.glb');

  return (
    <Center>
      <primitive
        object={scene}
        scale={2.8}
        position={[0.4, -0.9, 0]}
        rotation={[0.0, -1.5, 0]}
      />
    </Center>
  );
}

export default function HeroLogo3D() {
  const { progress, active } = useProgress();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (progress === 100 && !active) {
      setReady(true);
    }
  }, [progress, active]);


  return (
    <div className={`w-[520px] h-[520px] 2xl:h-[620px] mx-auto transition-opacity duration-1000 ease-in-out ${ready ? 'opacity-100' : 'opacity-0'}`}>
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true }}
        camera={{
          position: [0, 0, 5.2],
          fov: 38,
        }}
      >

<Suspense fallback={null}>

        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />

        <Float
          speed={2}
          rotationIntensity={0.5}
          floatIntensity={1}
        >
          <LogoModel />
        </Float>

        <Environment preset="city" />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
        />

</Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/surfacelogo.glb');