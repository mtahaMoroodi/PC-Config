import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import useCheckIsMobile from "../../Hooks/useCheckIsMobile";

function ErrComponent({errArr}) {
  const animateVars = useSelector((state) => state.animateVars);

  const [dontDisplay, setDontDisplay] = useState(false);
  const { isMobileDevice } = useCheckIsMobile();

  useEffect(() => {
    const displayCheck = errArr.every((err) => err == false);
    displayCheck ? setDontDisplay(true) : setDontDisplay(false);
  }, [errArr]);

  return (
    <AnimatePresence>
      {!dontDisplay && (
        <motion.section
          layout
          variants={animateVars.parentVariant}
          //no animation needed for large devices
          initial={isMobileDevice ? "slideDown" : "fadeOut"}
          animate={isMobileDevice ? "slideUp" : "fadeIn"}
          exit={isMobileDevice ? "slideDown" : "fadeOut"}
          className="w-full lg:w-fit lg:mx-auto lg:mb-5 -z-10 flex justify-center max-md:pt-3 max-md:pb-2.5  bg-red-800 max-md:rounded-[0] max-md:rounded-tl-[12px] max-md:rounded-tr-[12px] rounded-[12px]"
        >
          <div className="flex flex-col px-2 justify-center items-center gap-2 py-2">
            {errArr.map((err) => (
              <p className={`${errArr.length == 1 ? "mt-2" : "mt-0"} bg-red-500 text-white w-[450px] max-md:w-[380px] rounded-[8px]`}>
                {err}
              </p>
            ))}
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default ErrComponent;
