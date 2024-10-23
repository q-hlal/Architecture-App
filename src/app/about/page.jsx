"use client"
import {  useRef } from 'react';
import styles from './about.module.css';
import Image from 'next/image';
import { useInView, motion } from 'framer-motion';
import { opacity, slideUp } from './anim';

const About = () => {

  const description = useRef(null);
  const isInView = useInView(description)


  return (
    <div  ref={description} className={styles.about}>
      <motion.div 
      variants={slideUp} animate={isInView ? "open" : "closed"}
      className={styles.left}>
        <h1>About</h1>
        <div className={styles.subText}>
          <div>
            <h1>Us</h1>
            <h3>Why should choose us?</h3>
          </div>
          <div>
            <p>
              As an experienced architectural engineer, I bring a unique combination of creativity and precision to every project. <br />
              My approach focuses on innovative design solutions that are both functional and aesthetically pleasing. <br />
              With a strong background in structural integrity and sustainability, I ensure that every design meets the highest standards of safety and efficiency. <br />
              Whether it's creating modern, eco-friendly structures or restoring historic buildings, I am committed to delivering exceptional results that exceed client expectations. <br />
              Choose me for your next project, and let's build something remarkable together!
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div 
      variants={opacity} animate={isInView ? "open" : "closed"}
      className={styles.right}>
        <Image src='/images/img5.jpeg' alt='img' width={300} height={300}/>
        <div>
          <h2>Hello 👋 I'm Abdullah</h2>
          <p>
            I am a 22-year-old architectural engineer with a degree from Wasit University in Architecture Engineering. <br />
            My passion for design and construction drives me to create innovative and sustainable solutions for a wide range of projects. <br />
            Throughout my academic journey, I gained strong expertise in architectural design, project management, and urban planning. <br />
            I am dedicated to bringing creative visions to life while ensuring practical functionality and environmental responsibility in every project I undertake. <br />
            Let's work together to build spaces that inspire and stand the test of time.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
