import { useReducer } from "react";

export default function useDisplayCards () {
    
      //this reducer function is for specify how to display product cards
      const cardsState = {
        toggleCard: true,
        mainCard: 0,
      };
    
      function cardsReducer(state, action) {
        switch (action.type) {
          case "toggleCard":
            return { ...state, toggleCard: false };
          case "mainCard":
            return {
              ...state,
              toggleCard: true,
              mainCard: action.payload,
            };
        }
      }
    
      const [{ mainCard, toggleCard }, cardDispatch] = useReducer(
        cardsReducer,
        cardsState
      );

      return {mainCard ,toggleCard ,cardDispatch}
}


