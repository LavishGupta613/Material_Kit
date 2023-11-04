import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
// import img1 from  "./Ai.jpg";
// import img2 from  "./Arti.jpg";
// import img3 from "./D.jpg";
export default function App() {
  const sliderImages = [
    {
      url:
      "https://iitj.ac.in/plasma2022/images/iitjcampus.jpg",
    },
    {
      url:
      "https://iitj.ac.in/techscape/vol04/issue01/sliderimg/19_28072023.jpg"
    },
    {
      url:
        "https://iitj.ac.in/uploaded_docs/1_21072022.jpg",
    }
  ];
  return (
    <div>
      <SimpleImageSlider
        width={1518}
        height={550}
        images={sliderImages}
        showNavs={true}
      />
    </div>
  );
}
