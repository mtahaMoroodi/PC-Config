import { useNavRef } from "../../Providers/NavRefsProvider"
import ProductCardSection from "./ProductCardSection"

function ProductsContainer({data}) {
    const {caseRef , mainsRef , cpuRef ,coolersRef, ramRef , gpuRef , powerRef} = useNavRef()
  return (
    <section className="mt-10 mb-56 flex flex-col">
    <ProductCardSection refrence={caseRef} data={data.cases} title={"Case"}/>
    <ProductCardSection refrence={mainsRef} data={data.main} title={"Main Boards"} />
    <ProductCardSection refrence={cpuRef} data={data.cpu} title={"CPU"}/>
    <ProductCardSection refrence={coolersRef} data={data.coolers} title={"coolers"} />
    <ProductCardSection refrence={ramRef} data={data.ram} title={"Ram"} />
    <ProductCardSection refrence={gpuRef} data={data.gpu} title={"Graphic Card"} />
    <ProductCardSection refrence={powerRef} data={data.power} title={"Power"} />
  </section>
  )
}

export default ProductsContainer