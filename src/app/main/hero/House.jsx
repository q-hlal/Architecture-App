"use client";
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { Text, useGLTF, useScroll } from '@react-three/drei';
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';

export const floor_Hight = 2.3;
export const floor = 3;

export function House(props) {
  const { nodes, materials } = useGLTF('./model/house.glb');
  const ref = useRef();
  const tl = useRef();
  const scroll = useScroll();
  const [modelScale, setModelScale] = useState(0.4); 

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth <= 768) {
          setModelScale(0.3);  
        } else if (window.innerWidth <= 1200) {
          setModelScale(0.35); 
        } else {
          setModelScale(0.4); 
        }
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(ref.current.position, {
      duration: 2,
      y: -floor_Hight * (floor - 1),
    }, 0);
  }, []);

  return (
    <>
      <group {...props} dispose={null} ref={ref} rotation={[0, 3.3, 0]} position={[0, -300, -1000]} scale={modelScale}>
        <group position={[233.263, 442.259, -810.851]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.BATI_BATI_0.geometry} material={materials.BATI} position={[-2395.588, -11693.484, -1202.055]} />
        </group>
        <group position={[233.263, 442.259, -810.851]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.VITRES_VITRES_0.geometry} material={materials.VITRES} position={[-2395.588, -11693.484, -1202.055]} />
        </group>
        <group position={[233.263, 442.259, -810.851]} rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[-2395.588, -11693.484, -1202.055]}>
            <mesh geometry={nodes.COUPE_TERRAIN_BAKETERRE_0.geometry} material={materials['BAKE.TERRE']} />
            <mesh geometry={nodes.COUPE_TERRAIN_BAKETRAIT_COUPE_0.geometry} material={materials['BAKE.TRAIT_COUPE']} />
          </group>
        </group>
        <mesh geometry={nodes.BATI_APPART_BATI_APPART_0.geometry} material={materials.BATI_APPART} position={[-2162.324, -759.796, 10882.633]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.SOCLE_SOCLE_0.geometry} material={materials.SOCLE} position={[200.175, -120.987, -757.916]} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </>
  );
}

useGLTF.preload('./model/house.glb');
