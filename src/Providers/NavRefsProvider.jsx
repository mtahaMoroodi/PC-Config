import { createContext, useContext, useRef } from "react";

const RefsContext = createContext()

function NavRefProvider ({children}) {

  const caseRef = useRef(null);
  const mainsRef = useRef(null);
  const cpuRef = useRef(null);
  const coolersRef = useRef(null);
  const ramRef = useRef(null);
  const gpuRef = useRef(null);
  const powerRef = useRef(null);

  return (
    <RefsContext.Provider value={{caseRef , mainsRef , cpuRef ,coolersRef, ramRef , gpuRef , powerRef}}>
      {children}
    </RefsContext.Provider>
  )
}

export default NavRefProvider

export function useNavRef() {
  return useContext(RefsContext)
}