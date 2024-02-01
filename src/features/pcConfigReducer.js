import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  configsArr: [],
  maxPower: 0,
  tdpData: { cpu: 0, gpu: 0, other: 50 },
  tdp: 0,
  ramGen: 4,
  cpuSocket: null,
  mainCpuSocket: null,
  mainRamGen: null,
  totalPrice: 0,
  isLowPower: false,
  isMainCpuCompatible: false,
  isMainRamCompatible: false,
};

const pcConfigsReducer = createSlice({
  name: "pcConfigs",
  initialState,
  reducers: {
    //adds product to the basket then sets each parameters and update states
    addProduct: (state, action) => {
      const isThere = state.configsArr.some(
        (item) => item.general == action.payload.general
      );
      if (isThere) {
        state.configsArr = state.configsArr.filter(
          (item) => item.general !== action.payload.general
        );
        state.configsArr.push(action.payload);
      } else {
        state.configsArr.push(action.payload);
      }

      switch (action.payload.general) {
        case "power": {
          state.maxPower = action.payload.maxpower;
          break;
        }
        case "mainBoard": {
          state.mainCpuSocket = action.payload.socket;
          state.mainRamGen = action.payload.ramType;

          if (state.cpuSocket === state.mainCpuSocket) {
            state.isMainCpuCompatible = true;
          } else {
            state.isMainCpuCompatible = false;
          }
          
          if (state.ramGen === state.mainRamGen) {
            state.isMainRamCompatible = true;
          } else {
            state.isMainRamCompatible = false;
          }
          break;
        }
        case "cpu": {
          state.cpuSocket = action.payload.socket;
          state.tdpData.cpu = action.payload.tdp;
          
          if (state.cpuSocket === state.mainCpuSocket) {
            state.isMainCpuCompatible = true;
          } else {
            state.isMainCpuCompatible = false;
          }
          break;
        }
        case "gpu": {
          state.tdpData.gpu += action.payload.tdp;
          state.tdpData.gpu = action.payload.tdp;
          break;
        }
        case "ram": {
          state.ramGen = action.payload.gen;
          if (state.ramGen === state.mainRamGen) {
            state.isMainRamCompatible = true;
          } else {
            state.isMainRamCompatible = false;
          }
          break;
        }
      }

      const { cpu, gpu, other } = state.tdpData;
      // the number 1*3 is for future proof the power
      // may user want to upgrade or change some components
      state.tdp = (cpu + gpu + other) * 1.3;
      if (state.tdp > state.maxPower) {
        state.isLowPower = true;
      } else {
        state.isLowPower = false;
      }
    },
    calculatePrice: (state) => {
      state.totalPrice = 0;
      state.configsArr.forEach((item) => (state.totalPrice += item.price));
    },
  },
});

export const { addProduct, calculatePrice } = pcConfigsReducer.actions;
export default pcConfigsReducer.reducer;
