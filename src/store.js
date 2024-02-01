import { configureStore } from "@reduxjs/toolkit";
import pcConfigReducer from "./features/pcConfigReducer";
import saveReducer from "./features/saveReducer";
import animateVariantsReducer from "./features/animateVariantsReducer";

const store = configureStore({
    reducer : {
        saveConfig : saveReducer,
        pcConfigs : pcConfigReducer,
        animateVars : animateVariantsReducer
    }
})

export default store