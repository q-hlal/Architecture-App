"use client";
import { Canvas } from '@react-three/fiber';
import styles from './hero.module.css';
import { House } from './House';
import { OrbitControls, ScrollControls, useScroll } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';
import TextPage from './Text';

const ScrollAnimation = ({ modelRef, textRef }) => {
  const scroll = useScroll();

  useFrame(() => {
    const scrollProgress = scroll.offset;

    gsap.to(modelRef.current, {
      opacity: 1 - scrollProgress * 1,
      duration: 0.5,
      ease: "power2.out",
    });

    if (scrollProgress >= 0.8) {
      gsap.to(textRef.current, {
        display: "flex",
        opacity: (scrollProgress - 0.5) * 2,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(textRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          if (textRef.current) {
            textRef.current.style.display = "none";
          }
        },
      });
    }
  });

  return null;
};

const Hero = () => {
  const modelRef = useRef();
  const textRef = useRef();
  const topTextRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      topTextRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div className={styles.hero}>
      <div className={`${styles.model}`} ref={modelRef}>
        <div className={styles.topText} ref={topTextRef}>
          <h1>Welcome To Your Dream Home</h1>
          <h3>Scroll more</h3>
        </div>
        <Canvas
          camera={{
            fov: 64,
            position: [1.3, 0.5, 3.3],
          }}
        >
          <ambientLight intensity={3} />
          <ScrollControls pages={4} damping={0.25}>
            <ScrollAnimation modelRef={modelRef} textRef={textRef} />
            <House />
          </ScrollControls>
        </Canvas>
      </div>
      <div className={`${styles.content}`} ref={textRef} style={{ opacity: 0 }}>
        <TextPage />
      </div>
    </div>
  );
};

export default Hero;
