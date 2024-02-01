import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useComponentErr() {
  const state = useSelector((state) => state.pcConfigs);
  const [cpuErr, setCpuErr] = useState(false);
  const [ramErr, setRamErr] = useState(false);
  const [powerErr, setPowerErr] = useState(false);

  useEffect(() => {
    if (state.isMainCpuCompatible) {
      setCpuErr(false);
    } else {
      setCpuErr(true);
    }
    if (state.isMainRamCompatible) {
      setRamErr(false);
    } else {
      setRamErr(true);
    }
    if (state.isLowPower) {
      setPowerErr(true);
    } else {
      setPowerErr(false);
    }
  }, [state]);
  
  const cpuCompErr = cpuErr ? "Cpu isnt Compatible with this MotherBoard" : false;
  const lowPowerErr = powerErr ? "Power doesnt deliver enough energy for this config" : false;
  const ramCompErr = ramErr ? "Ram isnt Compatible with this MotherBoard" : false;

  return { cpuCompErr, ramCompErr, lowPowerErr };
}
