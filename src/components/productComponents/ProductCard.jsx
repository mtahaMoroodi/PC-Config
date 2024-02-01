import { useSelector } from "react-redux";
import useDisplayPrice from "../../Hooks/useDisplayPrice";
import { motion } from "framer-motion";
function ProductCard({ name, img, price, children }) {
  const animateVars = useSelector(state => state.animateVars)
  return (
    <motion.section variants={animateVars.childVariant} className="flex lg:w-[550px] w-full max-md:items-center max-md:flex-col max-md:gap-5 p-3 rounded-[18px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] ">
      <img
        className="rounded-[15px] h-auto w-[120px] p-5 max-md:w-64 "
        src={img}
        alt={name}
      />
      <div className="flex max-md:flex-col max-md:gap-3 max-md:items-start justify-between items-center w-full">
        <div className="flex flex-col gap-3 items-start justify-center px-5">
          <h4 className="text-bf text-gray max-sm:text-sf max-sm:font-semibold">{name}</h4>
          <p className="text-primary text-mf text-b">{useDisplayPrice(price)}$</p>
          <a className="text-balck px-3 max-md:p-0 rounded hover:text-primary" href="#">
            More Info
          </a>
        </div>
        {children}
      </div>
    </motion.section>
  );
}

export default ProductCard;
