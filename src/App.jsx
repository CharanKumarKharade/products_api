import axios from "axios";
import Category from "./Category";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  let [finalType, setfinalType] = useState([]);
  let [product, setProduct] = useState([]);
  let [category, setCategory] = useState("");
  let getTypes = () => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setfinalType(res.data);
    });
  };

  let products = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => res.data)
      .then((finalProduct) => setProduct(finalProduct));
  };

  useEffect(() => {
    getTypes();
    products();
  }, []);

  useEffect(() => {
    if (category != "") {
      axios
        .get(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.data)
        .then((finalProduct) => setProduct(finalProduct));
    }
  }, [category]);

  let items = product.map((prod, index) => {
    return <ProductItem key={index} prod={prod} />;
  });

  return (
    <>
      <div className="py-[40px]">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-center text-[40px] mb-[30px] font-bold">
            Products
          </h1>
          <div className="grid grid-cols-[30%_auto] gap-[20px]">
            <div>
              <Category finalType={finalType} setCategory={setCategory} />
            </div>
            <div>
              <div className="grid grid-cols-3 gap-7">
                {product.length >= 1 ? items : "No product found"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function ProductItem({ prod }) {
  return (
    <div className="shadow-lg text-center  pb-4">
      <img src={prod.image} className="w-full h-[220px]" />
      <h2 className="text-[20px]">{prod.title}</h2>
      <p className="font-[700] text-[25px] font-mono"> ${prod.price}</p>
    </div>
  );
}
