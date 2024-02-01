import { useEffect, useState } from "react";

export default function useCheckIsMobile () {

    const [isMobileDevice , setIsMobileDevice] = useState(false)
    useEffect(() => {
        if (window.innerWidth > 768) {
          setIsMobileDevice(false)
        } else {
          setIsMobileDevice(true)
        }
      }, []);
      return {isMobileDevice}

}