import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, calculatePrice } from "../../features/pcConfigReducer";
import useDisplayCards from "../../Hooks/useCardsDisplay";
import { motion } from "framer-motion";

function ProductCardSection({ data, title, refrence ,  }) {

  const animateVars = useSelector(state => state.animateVars)

  //its a custom hook to specify how to display product cards
  const { mainCard, toggleCard, cardDispatch } = useDisplayCards();

  //sorts data from lowest price to highest
  const sortedData = data.sort((a, b) => a.price - b.price);

  //the choosed product
  const mainProduct = sortedData[mainCard];
  const dispatch = useDispatch();

  //sets the default products into basket 'JUST IN MOUNT CYCLE!
  useEffect(() => {
    dispatch(addProduct(mainProduct));
    dispatch(calculatePrice());
  }, []);

  return (
    <section
      ref={refrence}
      className="flex flex-col w-full max-md:items-center gap-7 transition-all ease-linear 0.8s delay-300"
    > 
      <h3 className="text-tf w-[50%] text-left">{title}</h3>
          {toggleCard ? (
            <motion.section variants={animateVars.childrenVariant} initial="childrenFadeOut" animate="childrenFadeIn" className="max-md:w-[350px]">
              <ProductCard
                key={mainProduct.id}
                img={mainProduct.img}
                price={mainProduct.price}
                name={mainProduct.name}
              >
                <button
                  onClick={() => {
                    cardDispatch({ type: "toggleCard" });
                  }}
                  className="text-bf bg-primary text-white hover:text-balck py-5 px-10 rounded-[10px] transition-all 0.2s max-md:w-full"
                >
                  Change
                </button>
              </ProductCard>
            </motion.section>
          ) : (
            <motion.div variants={animateVars.parentVariant} initial="childrenFadeOut" animate="childrenFadeIn" className="flex flex-col justify-center w-full gap-8 max-md:grid max-md:grid-cols-2 max-md:justify-items-center">
            {sortedData.map((item) => (
                <ProductCard
                  key={item.id}
                  img={item.img}
                  price={item.price}
                  name={item.name}
                >
                  <button
                    onClick={() => {
                      const id = item.id;
                      const payload = data.findIndex((item) => item.id == id);
                      cardDispatch({ type: "mainCard", payload: payload });
                      dispatch(addProduct(sortedData[payload]));
                      dispatch(calculatePrice());
                    }}
                    className="text-bf bg-primary text-white hover:text-balck py-5 px-10 rounded-[10px] transition-all 0.2s max-md:w-full"
                  >
                    select
                  </button>
                  </ProductCard>
              ))}
              </motion.div>
          )}
    </section>
  );
}

export default ProductCardSection;


function ComponentErr () {

}