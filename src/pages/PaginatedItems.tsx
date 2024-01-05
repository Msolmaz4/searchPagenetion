import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
// Example items, to simulate fetching from another resources.
interface Product {
  title: string;
  price: number;
  category: string;
  brand: string;
  images: string[];
}
interface ItemsProps {
  currentItems: Product[];
}
function Items({ currentItems }: ItemsProps) {
 // console.log(currentItems);
  return (
    <>
      {currentItems && (
        <div className=" flex flex-wrap gap-6">
          {currentItems?.map((item, key) => (
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
        </div>
      )}
    </>
  );
}

function PaginatedItems({ itemsPerPage }: { itemsPerPage: number }) {
  const { products } = useSelector((state:RootState) => state.products);

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  console.log(currentItems,"ttttttttttttttt")
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div>
        <ReactPaginate
          className="flex border-solid  h-8 w-full justify-center gap-4 mt-8"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}
export default PaginatedItems;
