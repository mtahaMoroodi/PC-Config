import { useDispatch } from "react-redux";
import { openModal, saveConfig } from "../../features/saveReducer";
import { useState } from "react";
import useSaveProductData from "../../Hooks/useSaveProductData";

function SaveModal() {
  
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  //datas coming from localState
  const {id , config , errors , thumbnail} = useSaveProductData()

  return (
    <section className="w-full h-full top-0 bg-[rgba(0,0,0,0.07)] backdrop-blur fixed flex items-center justify-center">
      <div className="max-md:w-[350px] w-[500px] px-8 py-12 rounded-[15px] top-1/2 bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        <form action="submit" className="flex flex-col gap-5">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            maxLength={20}
            type="text"
            className="w-full border text-black border-gray px-5 py-3 flex justify-start rounded-[10px]"
            placeholder="Write a Name for your Config"
          />
          <div className="flex w-full gap-x-5 justify-evenly">
            <button
              onClick={(e) => {
                e.preventDefault();
                const payload = {id , name: inputValue, config, errors , thumbnail};
                dispatch(saveConfig(payload));
                dispatch(openModal());
              }}
              className="text-bf bg-primary text-white hover:text-balck py-5 px-10 rounded-[10px] transition-all 0.2s w-full"
            >
              Save Config
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(openModal());
                setInputValue("");
              }}
              className="text-bf bg-white border-gray border text-primary hover:text-balck py-5 px-10 rounded-[10px] transition-all 0.2s w-full"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SaveModal;
