import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";

import { useSelector } from "react-redux";
import useProduc from "../hooks/useProduc";

type Inputs = {
  example: string;
  select: string;
  search: string;
  category: string;
  brand: string;
  sort: string;
};

export default function Search() {
  const { setDeneme } = useProduc();
  const { products, categories, brands, sorts } = useSelector(
    (state) => state.products
  );
  // console.log(products, categories, brands, sorts, "app");

  const { register, control } = useForm<Inputs>();
  const category = useWatch({ control, name: "category" });
  const example = useWatch({ control, name: "example" });
  const brand = useWatch({ control, name: "brand" });
  const sort = useWatch({control,name:"sort"})
  // console.log( example,category, brand,sort,"search");

  useEffect(() => {
    
      setDeneme({example,category,brand,sort})
     // allePro();
      
  
  }, [example,category,brand,sort]);

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        width: "120px",
        
      }}
    >
      <label htmlFor="">Search</label>
      <input placeholder="search" {...register("example")} />

      <label htmlFor="category">Category</label>
      <select {...register("category")}>
        <option value="all">all</option>
        {categories?.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>

      <label htmlFor="">Brand</label>
      <select {...register("brand")}>
        <option value="all">all</option>
        {brands?.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <label htmlFor="">Sort</label>
      <select {...register("sort")}>
        {sorts?.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </form>
  );
}
