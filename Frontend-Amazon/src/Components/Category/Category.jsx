import React from "react";
import Data from "./Data";
import styles from "./Category.module.css";
import CategoryCard from "./CategoryCard";
// const Category = () => {
//   return (
//     <div className={styles.Category}>
//       {Data.map((singleItem,index) => (
//         <CategoryCard
//           key={index}
//           Data={singleItem}
//           isThird={index === 2}
//         />
//       ))}
//     </div>
//   );
// };

// export default Category;


const Category = () => {
  return (
    <div className={styles.Category}>
      {Data.map((singleItem,index) => (
        <CategoryCard
          key={index}
          Data={singleItem}
          isThird={index === 2}
        />
      ))}
    </div>
  );
};

export default Category;
