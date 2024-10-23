import React from 'react';
import styles from './hero.module.css';
import { IoMdArrowRoundDown } from "react-icons/io";
import { GiWireframeGlobe } from "react-icons/gi";
import Link from 'next/link';

const TextPage = () => {
  return (
    <>
      <div className={styles.bgText}>
        <h1>
          Build y<GiWireframeGlobe />ur<br/><span> imagination</span> <br /> with us.
        </h1>
      </div>

      <div className={styles.text}>
        <div className={styles.textContainer}>
          <div>
            <h3>Sustainable Design</h3>
            <p>Eco-friendly materials</p>
            <p>Energy efficiency</p>
            <p>Green certifications</p>
          </div>

          <div>
            <h3>Smart Buildings</h3>
            <p>IoT integration</p>
            <p>Automation systems</p>
            <p>Innovative technologies</p>
          </div>

          <div>
            <h3>Architecture & Engineering</h3>
            <p>Collaboration</p>
            <p>Aesthetic balance</p>
            <p>Structural integrity</p>
          </div>
        </div>

        <div>
          <h3>Partner with Us</h3>
          <p>Your vision is our mission. Let's create spaces that inspire!</p>
        </div>
      </div>

      <div className={styles.logo}>
        <Link href="#about-section">
         <span><IoMdArrowRoundDown /></span>
        </Link>
      </div>
    </>
  );
};

export default TextPage;
