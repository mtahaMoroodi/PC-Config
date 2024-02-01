import { useNavigate, useSearchParams } from "react-router-dom"
import ProductList from "../ProductList"
import { useSelector } from "react-redux"
import useDisplayPrice from "../../Hooks/useDisplayPrice";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import ErrComponent from "../elements/ErrComponent";

function SingleConfig() {

    const [searchParams , setSearchparams] = useSearchParams()
    const navigate = useNavigate()

    const state = useSelector((state) => state.saveConfig.savedConfigs);
    const id = JSON.parse(searchParams.get("id"))
    const recentConfig = state.find(config => config.id == id)
    const errors = recentConfig.errors

  console.log(errors);
    let price = 0;
    recentConfig.config.forEach((item) => (price += Number(item.price)));

  return (
    <section
    className="w-full max-md:px-10 py-10 px-24 flex flex-col-reverse gap-y-10 justify-center items-center rounded-[18px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        <div className="flex flex-row-reverse w-full max-md:p-3 max-md:justify-around justify-between px-5 pt-5 items-center max-md:bottom-0 bg-white">
        <h4 className="text-mf text-black">
          Total Price : {useDisplayPrice(price)}$
        </h4>
        <button onClick={()=>{navigate(-1)}} className="text-bf flex justify-center items-center bg-primary text-white hover:text-balck py-5 px-10 rounded-[10px] transition-all 0.2s ">
          <ArrowLeftIcon className="w-[22px] "/> &nbsp; <span>Back</span>
        </button>
      </div>
        <ErrComponent errArr={errors}/>
        <ProductList state={recentConfig.config}/>
        <h3 className="text-left mb-6">{recentConfig.name}</h3>
    </section>
  )
}

export default SingleConfig