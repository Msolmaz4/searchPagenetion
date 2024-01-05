import axios from "axios";
import { useDispatch } from "react-redux";
import { alle } from "../redux/productSlice";
import { useEffect, useState } from "react";

const useProduc = () => {
  const dispatch = useDispatch();
  const [filt, setFilt] = useState([]);

  const [deneme, setDeneme] = useState({
    example: "",
    category: "",
    brand: "",
    sort: "",
  });
  console.log(deneme, "usePRO");

  const allePro = async () => {
    try {
      const dazan = await axios.get("https://dummyjson.com/products");
      console.log(dazan?.data?.products);

      setFilt(dazan?.data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allePro();
  }, [deneme.example, deneme.brand, deneme.category, deneme.sort]);

  useEffect(() => {
    console.log(filt, "denmeexamp;e");

    // Hatanız, JavaScript'teki bir dizinin sort fonksiyonunu kullanırken ortaya çıkan bir durumdan kaynaklanıyor gibi görünüyor. Bu hatanın çözümü için, filt dizisini kopyalayarak işlem yapmanız gerekebilir, çünkü sort fonksiyonu orijinal diziyi değiştirir ve Redux state'inin doğrudan değiştirilmesi mümkün değildir.
    if (deneme.sort) {
      const sortedFilt = [...filt]
      if (deneme.sort === "A-Z") {
        dispatch(alle(sortedFilt.sort((a, b) => a.title.localeCompare(b.title))));
      } else if (deneme.sort === "Z-A") {
        dispatch(alle(sortedFilt.sort((a, b) => b.title.localeCompare(a.title))));
      } else if (deneme.sort == "Price Low to High") {
        dispatch(alle(sortedFilt.sort((a, b) => a.price - b.price)));
      } else if (deneme.sort == "Price High to Low" ) {
        dispatch(alle(sortedFilt.sort((a, b) => b.price - a.price)));
      }
    //
  }
    // else if (deneme.category == "all" && deneme.example == "") {
    //   // const dert = filt
    //   //   ?.filter((item) =>
    //   //     item.title.toLowerCase().includes(deneme.example.toLowerCase())
    //   //   )
    //   //   .filter((ite) => ite.category === deneme.category);
    //   // console.log(dert, "dertttttttt");
    //   // dispatch(alle(dert));
    //   //dispatch(alle(filt));
    // }
     else if (deneme.example) {
      const exp = filt?.filter((item) =>
        item.title.toLowerCase().includes(deneme.example.toLowerCase())
      );
      console.log(exp, "exp");
      dispatch(alle(exp));
    } else if (deneme.category) {
      if(deneme.category != "all"){
         const expo = filt?.filter((item) => item.category === deneme.category);
      console.log(expo, "exp");
      dispatch(alle(expo));
      }else{
        dispatch(alle(filt));
      }
      
     
    } else if (deneme.brand) {
      const expol = filt?.filter((item) => item.brand === deneme.brand);
      console.log(expol, "exp");
      dispatch(alle(expol));
    }
    
    
    // if(!deneme.example && (!deneme.category || deneme.category == "all") && !deneme.sort && !deneme.brand) 
    // {
    //   dispatch(alle(filt));
    // } 
    else {
      // Filtre yoksa, tüm ürünleri gönder
       dispatch(alle(filt));
      
    }
  }, [filt, deneme, dispatch]);

  return { allePro, setDeneme };
};

export default useProduc;
