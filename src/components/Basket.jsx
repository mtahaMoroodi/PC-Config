import { useDispatch, useSelector } from "react-redux";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import ErrComponent from "./elements/ErrComponent";
import { openModal } from "../features/saveReducer";
import { AnimatePresence, motion } from "framer-motion";
import useCheckIsMobile from "../Hooks/useCheckIsMobile";
import useComponentErr from "../Hooks/useComponentErr";

function Basket() {
  const state = useSelector((state) => state.pcConfigs);
  const animateVars = useSelector((state) => state.animateVars);
  const [displayList, setDisplayList] = useState(true);
  const { isMobileDevice } = useCheckIsMobile();

  const { cpuCompErr, ramCompErr, lowPowerErr } = useComponentErr();
  const errArr = [cpuCompErr, ramCompErr, lowPowerErr];

  useEffect(() => {
    if (isMobileDevice) {
      setDisplayList(false);
    }
  }, [isMobileDevice]);

  return (
    <section className="mt-16 w-full fixed bottom-0 lg:h-fit lg:sticky lg:top-16 lg:p-5 lg:rounded-[18px] lg:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
      <div className="flex flex-col">
        <AnimatePresence>
          <ErrComponent errArr={errArr}/>
        </AnimatePresence>
        <AnimatePresence>
          {displayList && (
            <motion.div
              variants={animateVars.parentVariant}
              initial={isMobileDevice ? "basketSlideDown" : "slideUp"}
              animate="slideUp"
              exit="basketSlideDown"
              className="max-md:fixed max-md:bottom-0 max-md:mb-20 -z-10 w-full bg-white"
            >
              <ProductList state={state.configsArr} />
            </motion.div>
          )}
        </AnimatePresence>
        <BasketButtons
          setDisplayList={setDisplayList}
          displayList={displayList}
          state={state}
        />
      </div>
    </section>
  );
}

export default Basket;

function BasketButtons({ setDisplayList, displayList, state }) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row-reverse w-full max-md:p-3 max-md:justify-around justify-between px-5 pt-5 items-center  border-t-[0.1px] border-gray max-md:bottom-0 bg-white">
      <h4 className="text-mf text-black">
        Total Price : {state.totalPrice}$
      </h4>
      <button
        onClick={() => {
          dispatch(openModal());
        }}
        className="text-bf bg-primary text-white hover:text-balck py-5 px-10 rounded-[10px] transition-all 0.2s "
      >
        Save Config
      </button>
      <button
        onClick={() => {
          setDisplayList((set) => !set);
        }}
        className="md:hidden bg-gray p-2 rounded hover:bg-transparent transition-all 1s"
      >
        <ChevronUpIcon
          className={`w-12 cursor-pointer text-white hover:text-black ${
            displayList ? "rotate-180" : "rotate-0"
          } transition 2s`}
        />
      </button>
    </div>
  );
}
