export const slideUp = {
    initial: {
      opacity: 0,
      x: "-100%",
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.4,
      },
    },
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };
  
  export const childVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };
  

export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration: 1}
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.5}
    }
}