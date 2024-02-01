import { useDispatch, useSelector } from "react-redux";
import PagesBar from "../elements/PagesBar";
import { createSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { deleteConfig } from "../../features/saveReducer";

function Configs() {
  //i've used useSelector two times to stract the data easier you can do it with just a single select
  const state = useSelector((state) => state.saveConfig.savedConfigs);
  const hasSaved = useSelector((state) => state.saveConfig.hasSaved);


  const animateVars = useSelector((state) => state.animateVars);

  return (
    <section>
      <PagesBar />
      {hasSaved ? (
        <motion.div
          variants={animateVars.parentVariant}
          initial="childrenFadeOut"
          animate="childrenFadeIn"
          className="w-full my-24 flex flex-col gap-y-8 lg:grid lg:grid-cols-4 gap-5 items-center"
        >
          {state.map((item) => (
            <ConfigCard
              key={item.id}
              id={item.id}
              img={item.thumbnail.img}
              name={item.name}
              config={item.config}
            />
          ))}
        </motion.div>
      ) : (
        <p>You didnt Saved Any Config</p>
      )}
    </section>
  );
}

export default Configs;

function ConfigCard({ id, img, name }) {
  const navigate = useNavigate();
  const animateVars = useSelector((state) => state.animateVars);
  const dispatch = useDispatch()

  return (
    <motion.div
      key={id}
      variants={animateVars.childVariant}
      className="flex flex-col max-md:w-[70%] p-5 justify-center items-center gap-5 max-md:items-center  max-md:gap-5 w-full rounded-[18px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] "
    >
      <img className="max-md:w-[100px] w-[150px]" src={img} alt={name} />
      <div className="w-1/2 flex flex-col items-start gap-y-3">
        <h4 className="text-mf text-black font-semibold">{name}</h4>
        <h4 className="text-bf text-gray">{`#${id}`}</h4>
      </div>
      <div className="flex w-full flex-col px-5  gap-2">
        <button
          onClick={() => {
            const encodedParams = createSearchParams({
              id: JSON.stringify(id),
            });
            navigate({
              pathname: "/SingleConfig",
              search: encodedParams.toString(),
            });
          }}
          className="text-bf bg-primary text-white hover:text-balck py-5 px-10 rounded-[10px] transition-all 0.2s whitespace-nowrap max-md:h-[40px] h-[45px] lg:w-full"
        >
          View Config
        </button>
        <button
          onClick={() => {
            dispatch(deleteConfig(id))
            window.location.refresh()
          }}
          className="text-bf border border-gray text-gray hover:text-black py-5 px-10 rounded-[10px] transition-all 0.2s whitespace-nowrap max-md:h-[40px] h-[45px] lg:w-full"
        >
          Delete Config
        </button>
      </div>
    </motion.div>
  );
}
