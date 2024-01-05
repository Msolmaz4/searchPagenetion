//import { useSelector } from "react-redux";
import PaginatedItems from "./PaginatedItems";

const Home = () => {
  // const { products } = useSelector((state) => state.products);
  return (
    <div>
      {/* <div className=" flex flex-wrap gap-6">
        {products?.map((item, key) => (
          <div
            className="h-96 w-96 border-solid border-2 border-sky-500 "
            key={key}
          >
            <div className="h-80 w-46">
              <img src={item.images[0]} alt="" />
            </div>
            <div>{item.title}</div>
            <div>{item.price}</div>
          </div>
        ))}
      </div> */}
      <PaginatedItems itemsPerPage={8} />,
    </div>
  );
};

export default Home;
