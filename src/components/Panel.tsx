import { Html, useScroll } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { Mesh } from "three";
import useCubeState from "../stores/cubeStore";
import { useFrame } from "@react-three/fiber";

const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t;

export const Panel = () => {
  const { isMoved } = useCubeState();
  const panelRef = useRef<Mesh>(null);

  const [panelSize, setPanelSize] = useState<[number, number]>([1, 1]);

  const [htmlPosition, setHtmlPosition] = useState<[number, number, number]>([
    0, 0, 0.1,
  ]);
  const [panelPosition, setPanelPosition] = useState<number>(0);

  const scrollData = useScroll();

  const updateSizeAndPosition = () => {
    const scale = 0.0079;
    const width = window.innerWidth * scale;
    const height = window.innerHeight * scale;
    setPanelSize([width / 2, height]);
    const initialOffScreenX = width + width / 2;
    setPanelPosition(initialOffScreenX);
    const htmlX = 0;
    const htmlY = 0;
    const htmlZ = 0.1;
    setHtmlPosition([htmlX, htmlY, htmlZ]);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSizeAndPosition);
    updateSizeAndPosition();

    return () => {
      window.removeEventListener("resize", updateSizeAndPosition);
    };
  }, []);

  useFrame(() => {
    if (panelRef.current) {
      const targetX = isMoved ? 3 : window.innerWidth * 0.05 * 0.5;
      panelRef.current.position.x = lerp(
        panelRef.current.position.x,
        targetX,
        0.05
      );
    }
  });

  return (
    <>
      <mesh ref={panelRef} position={[panelPosition, 0, 0]}>
        <planeGeometry args={panelSize} />
        <meshStandardMaterial color="royalblue" />

        <Html
          occlude
          distanceFactor={2.5}
          transform
          position={htmlPosition}
          portal={{ current: scrollData.fixed }}
        >
          <div
            style={{
              width: `${panelSize[0] * 100}px`,
              height: `${panelSize[1] * 100}px`,
              display: "flex",
              overflow: "scroll",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>Some Text</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              consectetur unde voluptas exercitationem mollitia deserunt nam
              error pariatur aspernatur. Cum eligendi officia magni molestias
              dolor minima, eveniet laboriosam expedita veritatis. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Magni fugit ut illo
              nemo distinctio modi ad eaque, iusto cumque porro eligendi
              obcaecati cum excepturi numquam illum in. Quia, ex minima. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ut inventore
              cumque nostrum repellat ad perferendis ullam facere, eaque
              perspiciatis iste modi, quos porro culpa beatae. In sed a facilis
              mollitia? Lorem ipsum d! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Saepe sapiente, culpa iure labore molestias
              maiores veritatis et quod? Ut voluptates vel esse molestias
              repudiandae libero, perferendis iste perspiciatis id. Eligendi!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              error laudantium, eos suscipit quos eveniet! Ipsam, dolores
              accusantium sequi, accusamus eum eaque nisi quae iste magni
              obcaecati nemo voluptatibus soluta! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Laudantium commodi quidem numquam
              dicta impedit? Laboriosam pariatur reiciendis, illo unde vel
              laudantium quaerat corrupti! Exercitationem quia consequuntur
              repellendus corrupti eos itaque? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sint, eligendi est distinctio
              voluptatem deleniti officia magni tempore rem illum. Veniam dolore
              beatae tempora ullam placeat veritatis aspernatur, voluptatum
              eligendi natus? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ipsam illum dolorum unde numquam sapiente odio veritatis,
              libero accusamus laborum velit quidem? Quidem quod harum animi
              culpa? Adipisci quo vel maiores! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eos laboriosam dignissimos nisi ea
              dolor cum reiciendis ducimus ipsa nulla nostrum nam a quibusdam
              eveniet ipsum culpa, amet ratione officia eum. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Autem, laboriosam natus
              eum quisquam saepe fugiat, sequi enim deleniti dolores sapiente
              nam labore eos earum nihil quod aperiam soluta excepturi illo?
            </p>
          </div>
        </Html>
      </mesh>
    </>
  );
};
