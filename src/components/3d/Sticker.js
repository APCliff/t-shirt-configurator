import { Float, Sparkles, useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

const Sticker = () => {
  const texture = useTexture("graffiti-pets.png");

  return (
    <Float>
      <Sparkles>
        <mesh>
          <planeGeometry />
          <meshPhysicalMaterial
            map={texture}
            transparent
            clearcoat={1}
            roghness={0}
            metalness={0.9}
            side={DoubleSide}
          />
        </mesh>
      </Sparkles>
    </Float>
  );
};

export default Sticker;
