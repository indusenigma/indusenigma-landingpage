// Text animation variant for revealing text with a delay
export const textVariant = (delay = 0) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

// Fade-in effect from a direction with custom easing and timing
export const fadeIn = (
  direction = "up",
  type = "tween",
  delay = 0,
  duration = 0.75
) => {
  const distance = 100; // Distance for animation

  return {
    hidden: {
      x:
        direction === "left" ? distance : direction === "right" ? -distance : 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// Zoom-in effect with custom delay and duration
export const zoomIn = (delay = 0, duration = 0.75) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// Slide-in animation from any direction
export const slideIn = (
  direction = "left",
  type = "tween",
  delay = 0,
  duration = 0.75
) => {
  const distance = "100%"; // Distance for sliding

  return {
    hidden: {
      x:
        direction === "left"
          ? `-${distance}`
          : direction === "right"
          ? distance
          : 0,
      y:
        direction === "up"
          ? distance
          : direction === "down"
          ? `-${distance}`
          : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// Stagger container to delay child animations with custom staggering
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};
