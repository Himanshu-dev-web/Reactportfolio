import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; 
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.

export const Hero = () => {

    const particlesInit = useCallback(async engine => {
    console.log(engine);
      await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
             await console.log(container);
      }, []);

  function img() {
    window.open("https://drive.google.com/file/d/12vvb-fLTdWyQsszfDMpAwzy9aIMQccAo/view?usp=sharing")
  }
  return (
    <>
    <section className={styles.container}>     
    
    
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Himanshu Saini</h1>
        <p className={styles.description}>
          I'm a frontend developer with 6 Months of experience using <span style={{ color: 'yellow',}}> React,Html,Css3,Javascript,tailwind,Bootstrap.</span>   Reach out to me!
        </p>
        <div className="btn-hero">
        <a href="mailto:saini27himanshu@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <button onClick={img} className={styles.contactBtn}>
          Download CV
        </button>
        </div>

     

        
      </div>

      <img
        src={getImageUrl("hero/pngaaa.com-901244.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />    
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
      <div id="particle-js">
          <Particles 
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#4D3C77",
                    },
                },
                fpsLimit: 144,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 400,
                            duration: 0.1,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.1,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 2000,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
                
            }}
        />
        </div>
    </>
  );
};
