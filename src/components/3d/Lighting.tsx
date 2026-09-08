import { Environment, Lightformer } from "@react-three/drei";

export function Lighting() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.4} />
      <directionalLight position={[-6, -2, -4]} intensity={0.4} color="#bcd4ff" />
      <Environment resolution={64}>
        <Lightformer intensity={3} position={[0, 6, 0]} scale={[12, 12, 1]} rotation-x={Math.PI / 2} />
        <Lightformer intensity={1.5} color="#cfe3ff" position={[-6, 2, -2]} rotation-y={Math.PI / 2} scale={[20, 2, 1]} />
        <Lightformer intensity={1.2} color="#ffe9c9" position={[6, -1, 2]} rotation-y={-Math.PI / 2} scale={[20, 2, 1]} />
      </Environment>
    </>
  );
}
