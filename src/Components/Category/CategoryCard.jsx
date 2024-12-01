import React from "react";
import styles from "./Category.module.css";
// import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

// const CategoryCard = ({ Data }) => {
//   return (
//     <div className={styles.CategoryCard}>
//       <Card className="shadow" style={{ width: "18rem" }}>
//         <Card.Body>
//           <a href="">
//             <Card.Title>
//               <p>{Data.title}</p>
//             </Card.Title>
//           </a>
//           <a href="#">
//             <Card.Img
//               variant="top"
//               src={Data.imageLink}
//               alt={Data.title}
//               style={{
//                 height: Data.isThird ? "300px" : "200px", // Conditional height
//                 objectFit: "cover",
//                 width: "100%"
//               }}
//             />
//           </a>
//           <Card.Text>
//             <a href="#">See more</a>
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default CategoryCard;

const CategoryCard = ({ Data }) => {
  return (
    <div className={styles.CategoryCard}>
      <Link to={`/Category/${Data.category}`}>
        <span>
          <h2>{Data.title}</h2>
        </span>
        <img src={Data.image} alt="" />
        <p
          style={{
            margin: Data.isThird ? "0px 0px 0px" : "34px 0 0"
          }}
        >
          shop now
        </p>
      </Link>
    </div>
  );
};
export default CategoryCard;
