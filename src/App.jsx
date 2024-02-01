import "./App.css";
import "./index.css";
import "./transitions.css"
import useFetchProducts from "./Hooks/useFetchPRoducts";
import NavBar from "./components/elements/NavBar";
import ProductsContainer from "./components/productComponents/ProductsContainer";
import NavRefProvider from "./Providers/NavRefsProvider";
import Basket from "./components/Basket";
import PagesBar from "./components/elements/PagesBar";
import SaveModal from "./components/elements/SaveModal";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function App() {
  const { data, isLoading } = useFetchProducts();
  const modal = useSelector(state => state.saveConfig)
  return (
    <NavRefProvider>
      <main className={`flex flex-col justify-center items-center gap-5 w-full mx-auto`}>
        <NavBar/>
        <PagesBar/>
        {!isLoading ? 
        <motion.div layout initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.7 , duration:0.3 , ease:"linear" ,when : "afterChildren"}} className="grid lg:justify-center lg:grid-cols-2 lg:justify-items-center max-md:flex max-md:flex-col max-md:items-center w-full gap-x-10">
        <ProductsContainer data={data} /> 
        <Basket/>
        </motion.div>
        : <p>loading</p>}
        {modal.isModalOpen && <SaveModal/> }
      </main>
    </NavRefProvider>
  );
}

export default App;
