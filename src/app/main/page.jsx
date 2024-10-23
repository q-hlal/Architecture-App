"use client";
import styles from './main.module.css'
import { useState, useEffect } from 'react';
import Preloder from './preloder/page';
import Hero from './hero/page';

export default function Main() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 11000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.main}>
      {showPreloader ? 
        <Preloder /> : (
        <Hero/>
      )}
    </div>
  );
}