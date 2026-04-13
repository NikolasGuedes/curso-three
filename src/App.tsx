import "./App.css";
import { Canvas } from "@react-three/fiber";
import ThreeElement from "./ThreeElement";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas
        camera={{
          fov: 75,
          near: 1,
          far: 100,
          position: [3, 3, 0],
        }}
      >
        <ThreeElement />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          // minAzimuthAngle={-Math.PI / 4}
          // maxAzimuthAngle={Math.PI / 4}
          // minPolarAngle={Math.PI / 6}
          // maxPolarAngle={Math.PI - Math.PI}
        />
        <axesHelper args={[5]} />
        <gridHelper args={[10, 10, "red", "blue"]} />
      </Canvas>
    </>
  );
}

export default App;
