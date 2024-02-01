import { createSlice } from "@reduxjs/toolkit";

const animateVariants = createSlice({
  name: "animateVariants",
  initialState: {
    parentVariant: {
      fadeIn: {
        opacity: 1,
        transition: {
          delay: 0.2,
          duration: 0.5,
        },
      },
      fadeOut: {
        opacity: 0,
        transition: {
          delay: 0.2,
          duration: 0.5,
        },
      },
      slideUp: {
        opacity : 1,
        y: 0,
        transition: {
          duration: 0.8,
        },
      },
      slideDown: {
        opacity : 0,
        y: 250,
        transition: {
          duration: 0.8,
        },
    },
    childrenFadeIn: {
        opacity: 1,
        transition: {
            delay: 0,
            duration: 0.5,
            staggerChildren: 0.18,
        },
    },
    childrenFadeOut: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
      },
      basketSlideDown : {
        y: 800,
        transition: {
          delay : 0.2,
          duration: 1,
          type: "tween",
          when: "afterChildren",
        },
      }
    },
    childVariant: {
      childrenFadeIn: {
        opacity: 1,
      },
      childrenFadeOut: {
        opacity: 0,
      },
      delayFadeIn: {
        opacity: 1,
        transition: {
          duration: 0.2,
        },
      },
      delayFadeOut: {
        opacity: 0,
        transition: {
          delay: 0.1,
          duration: 0.3,
        },
      },
    },
  },
});

export default animateVariants.reducer;
