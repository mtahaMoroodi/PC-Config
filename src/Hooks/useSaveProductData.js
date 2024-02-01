import { useSelector } from "react-redux";
import useComponentErr from "./useComponentErr";
import useGenerateRandomNumber from "./useGenerateRandomNumber";

///its a custom hook to return datas that app needs to save in localStorage
export default function useSaveProductData () {
    const config = useSelector((state) => state.pcConfigs.configsArr);
    
    //this hook data comes from global state
    const { cpuCompErr, ramCompErr, lowPowerErr } = useComponentErr();
    const errors = [cpuCompErr, ramCompErr, lowPowerErr];
  
    const id = useGenerateRandomNumber()
    const thumbnail = config.find(i => i.general == "case")

    return {id , config , errors , thumbnail}
}