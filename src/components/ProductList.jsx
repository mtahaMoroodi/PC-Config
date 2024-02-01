import useDisplayPrice from "../Hooks/useDisplayPrice";
function ProductList({ state }) {
  return (
    <section
      className="w-full flex flex-col gap-y-4"
    >
      {state.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between px-10 py-2 border-b-[0.2px] border-gray"
        >
          <div className="flex items-center gap-5">
            <img src={product.img} alt={product.name} width={50} />
            <p className="text-balck text-sf">{product.name}</p>
          </div>
          <p className="text-bf text-gray">{useDisplayPrice(product.price)}$</p>
        </div>
      ))}
    </section>
  );
}

export default ProductList;
