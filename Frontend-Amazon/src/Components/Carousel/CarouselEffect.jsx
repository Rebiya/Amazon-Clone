// import React from "react";
// import styles from "./Carousel.module.css";
// import imageinfos from "./data";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

// const CarouselEffect = () => {
//   return (
//     <div className={styles.CarouselEffect}>
//       <Carousel
//         autoPlay={true}
//         infiniteLoop={true}
//         showThumbs={false}
//         showIndicators={false}
//       >
//         {imageinfos.map((singleImage, index) => (
//           <div key={index}>
//             <img src={singleImage} alt={`Slide ${index + 1}`} />
//           </div>
//         ))}
//       </Carousel>
//       <div className="fade"></div>
//     </div>
//   );
// };

// export default CarouselEffect;

import React from "react";
import styles from "./Carousel.module.css";
import imageinfos from "./data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const CarouselEffect = () => {
  return (
    <div className={styles.CarouselEffect}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
      >
        {imageinfos.map((singleImage, index) => (
          <div key={index}>
            <img src={singleImage} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      {/* Fade effect */}
      <div className={styles.fade}></div>
      <div className={styles.nextContent}></div>
    </div>
  );
};

export default CarouselEffect;
