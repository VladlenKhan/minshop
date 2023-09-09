import { useEffect } from "react";
import { useGetAllCategoriesQuery } from "../../../../store/middleWares/categoryApi";
import styles from "./Sidebar.module.scss";
import { SearchInput } from "./components";

const Sidebar = () => {
  const {data=[]} = useGetAllCategoriesQuery()

 console.log(data);
  
  return (
    <div className={styles.sidebar}>
      <SearchInput />
      <ul>
        <li>
          <a href="#">SUZANI </a> <p>65</p>        </li>
        <li>
          <a href="#">Rugs </a><p>65</p>   
        </li>
        <li>
          <a href="#">home decoration </a><p>70</p>   
        </li>
        <li>
          <a href="#">ikats </a><p>65</p>   
        </li>
        <li>
          <a href="#">robes and caftans </a><p>78</p>   
        </li>
        <li>
          <a href="#">accesoris </a><p>65</p>   
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
