import { createSlice } from "@reduxjs/toolkit";

const saveReducer = createSlice({
    name:"save" ,
    initialState : {
        isModalOpen : false,
        hasSaved : JSON.parse(localStorage.getItem("hasSavedPC")) || false,
        savedConfigs : JSON.parse(localStorage.getItem("pcConfigs")) || []
    },
    reducers : {
        openModal : (state) => {
            state.isModalOpen = !state.isModalOpen
        },
        saveConfig : (state , action) => {
            if(!state.hasSaved) {
                localStorage.setItem("hasSavedPC" , JSON.stringify(true)) 
                state.savedConfigs.push(action.payload)
                localStorage.setItem("pcConfigs" ,JSON.stringify(state.savedConfigs)) 
            } else {
                state.savedConfigs.push(action.payload)
                localStorage.setItem("pcConfigs" ,JSON.stringify(state.savedConfigs)) 
            }
        } , 
        deleteConfig : (state , action) => {

            state.savedConfigs = state.savedConfigs.filter(config => (
            config.id !== action.payload
            ))
            localStorage.setItem("pcConfigs" ,JSON.stringify(state.savedConfigs))
            if(state.savedConfigs.length ==  0) {
                localStorage.setItem("hasSavedPC" , JSON.stringify(false))
            }
        }
    }
})

export const {openModal , saveConfig , deleteConfig} = saveReducer.actions
export default saveReducer.reducer