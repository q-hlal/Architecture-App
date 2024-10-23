"use client";
import React, { useRef } from 'react'
import styles from './contact.module.css'
import { useInView, motion } from 'framer-motion';
import { childVariants, opacity, slideUp } from './anim';



const Contact = () => {

  const description = useRef(null);
  const isInView = useInView(description)

  return (
    <div ref={description} className={styles.contact}>
        <div className={styles.left}>
          <motion.h1 variants={opacity} animate={isInView ? "open" : "closed"}>Contact <br/> US <span>Facebook - linkedin - instagram</span></motion.h1>
          <motion.div 
          variants={slideUp} 
          animate={isInView ? "open" : "closed"} 
          className={styles.info}
        >
          <motion.div className={styles.leftInfo} variants={childVariants}>
            We're excited to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. 
            Our team is always ready to assist you with any inquiries. Let's connect and make something great together!
          </motion.div>

          <motion.div className={styles.rightInfo}>
            <motion.div variants={childVariants}>
              <h3>Location</h3>
              <p>Iraq / Wasit / Al-Zhraa street.</p>
            </motion.div>
            <motion.div variants={childVariants}>
              <h3>Contact</h3>
              <p>+964 782 431 4429.</p>
            </motion.div>
            <motion.div variants={childVariants}>
              <h3>Email</h3>
              <p>abdulla@gmail.com.</p>
            </motion.div>
          </motion.div>
        </motion.div>
        </div>
        <motion.div 
        variants={opacity} animate={isInView ? "open" : "closed"}
        className={styles.right}>
          <video src="/images/bgVideo.mp4" loop autoPlay muted />
        </motion.div>
    </div>
  )
}

export default Contact