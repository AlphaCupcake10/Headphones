import { Canvas } from "@react-three/fiber"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import Experience from "./components/Experience"
import { useRef } from "react";

function App() {

  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="h-screen w-screen fixed z-0 top-0 left-0 pointer-events-none hidden md:block">
          <Canvas
              camera={{ fov: 30, aspect: 1 }}
              shadows
          >
            <Experience scrollRef={scrollRef} />
            <EffectComposer>
                <Bloom mipmapBlur intensity={1.2} />
            </EffectComposer>
          </Canvas>
      </div>
      <main ref={scrollRef}>
        <div className="h-screen">
          HEHE
        </div>
        <div className="h-screen">
          HEHE
        </div>
        <div className="h-screen">
          HEHE
        </div>
      </main>
    </>
  )
}

export default App
