import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchProducts () {

  const [data , setData] = useState()
  const [isLoading , setIsLoading] = useState(true)
    useEffect(() => {

        async function getData() {
          setIsLoading(true)
          try {
            const { data } = await axios.get(
              "http://localhost:5000/main-components"
            );
            setData(data)
          } catch (error) {
            console.log(error);
          } finally {
            setIsLoading(false)
          }
        }
        getData();
      }, []);

    return {data , isLoading}
}