"use client";
import React, { useLayoutEffect, useRef } from 'react';
import styles from './preloder.module.css';
import gsap from 'gsap';
import Image from 'next/image';

const Preloder = () => {
  const digit1Ref = useRef(null);
  const digit2Ref = useRef(null);
  const digit3Ref = useRef(null);

  useLayoutEffect(() => {
    const digit1 = digit1Ref.current;
    const digit2 = digit2Ref.current;
    const digit3 = digit3Ref.current;

    function createDigits(container, count, finalDigit) {
      if (!container) return;

      for (let i = 0; i < count; i++) {
        const div = document.createElement('div');
        div.className = styles.num;
        div.textContent = i;
        container.appendChild(div);
      }
      const finalDiv = document.createElement('div');
      finalDiv.className = styles.num;
      finalDiv.textContent = finalDigit;
      container.appendChild(finalDiv);
    }

    createDigits(digit1, 0 + 1, 1);
    createDigits(digit2, 10, 0);
    createDigits(digit3, 10, 0);

    function animate(digit, duration, delay = 0) {
      if (!digit) return;
      const numHeight = digit.querySelector(`.${styles.num}`).clientHeight;
      const totalDistance = (digit.querySelectorAll(`.${styles.num}`).length - 1) * numHeight;
      gsap.to(digit, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: 'power2.inOut'
      });
    }

    requestAnimationFrame(() => {
      animate(digit3, 5);
      animate(digit2, 7);
      animate(digit1, 3, 4);
    });

    gsap.to(`.${styles.progressBar}`, {
      width: "30%",
      opacity: 1,
      duration: 2,
      ease: "power4.inOut",
      delay: 6.5
    });
    gsap.to(`.${styles.progressBar}`, {
      opacity : 0,
      duration: 2,
      delay: 8,
      ease: "power3.out",
    });
    gsap.to(`.${styles.progressBar}`, {
      width: "100%",
      duration: 2,
      delay: 8.5,
      ease: "power3.out",
    });
  
    gsap.to(`.${styles.imgs} > img`, {
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      duration: 1,
      stagger: 0.25,
      delay: 8,
      ease: "power4.inOut",
    });
  }, []);

  return (
      <div className={styles.container}>
        <div className={styles.loder}>
          <p>Loading ...</p>
          <div className={styles.counter}>
            <div ref={digit1Ref} className={styles.digit1}>
              <div className={styles.num}>0</div>
              <div className={styles.num}>1</div>
            </div>
            <div ref={digit2Ref} className={styles.digit2}>
              <div className={styles.num}>0</div>
              <div className={styles.num}>1</div>
              <div className={styles.num}>2</div>
              <div className={styles.num}>3</div>
              <div className={styles.num}>4</div>
              <div className={styles.num}>5</div>
              <div className={styles.num}>6</div>
              <div className={styles.num}>7</div>
              <div className={styles.num}>8</div>
              <div className={styles.num}>9</div>
              <div className={styles.num}>0</div>
            </div>
            <div ref={digit3Ref} className={styles.digit3}>
              <div className={styles.num}>0</div>
              <div className={styles.num}>1</div>
              <div className={styles.num}>2</div>
              <div className={styles.num}>3</div>
              <div className={styles.num}>4</div>
              <div className={styles.num}>5</div>
              <div className={styles.num}>6</div>
              <div className={styles.num}>7</div>
              <div className={styles.num}>8</div>
              <div className={styles.num}>9</div>
            </div>
            <div className={styles.digit4}>%</div>
          </div>
          <div className={styles.progressBar}>-</div>
        </div>
        <div className={styles.imgs}>
          <Image src='/images/img6.jpg'  alt='img1' width={100} height={100}/>
          <Image src='/images/img7.jpg'  alt='img2' width={100} height={100}/>
          <Image src='/images/img8.jpg'  alt='img3' width={100} height={100}/>
          <Image src='/images/img9.jpg'  alt='img4' width={100} height={100}/>
          <Image src='/images/img10.jpg'  alt='img5' width={100} height={100}/>
          <Image src='/images/img11.jpg'  alt='img6' width={100} height={100}/>
          <Image src='/images/img12.jpg'  alt='img7' width={100} height={100}/>
          <Image src='/images/img13.jpg'  alt='img8' width={100} height={100}/>
        </div>
      </div>
  );
};

export default Preloder;
