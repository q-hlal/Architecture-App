export const slideUp = {
    initial: {
        opacity: 0,
        x: "-100%"
    },
    open: (i) => ({
        opacity: 1,
        x: "0%",
        transition: {
            duration: 0.5,
            delay: 0.03 * i,
            ease: "easeOut" 
        }
    }),
    closed: {
        opacity: 0,
        x: "-100%",
    }
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