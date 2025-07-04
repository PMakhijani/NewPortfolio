import { Canvas } from "@react-three/fiber";
import HeroText from "../Components/HeroText";
import ParallaxBackground from "../Components/ParallaxBackground";
import { Robo } from "../Components/Robo";

const Hero = () => {
  return (
    <section className="flex items-start justify-center 
    md:items-start md:justify-start min-h-screen overflow-hidden 
    c-space">
        <HeroText />
        <ParallaxBackground />
        {/* <figure className="absolute inset-0" style= {{ width: "100vw", height: "100vh"}}>
          <Canvas>
            <Robo />
          </Canvas>
        </figure> */}
    </section>
  );
};

export default Hero;