import React from 'react';
import ImagesSlider from '../../Components/ImagesSlider/ImagesSlider';
import image1 from '../../Components/Images/web_papa_jon_tree_pizza_49-grn_1314_300.jpg';
import image2 from '../../Components/Images/week_offer_delivery_page1.jpg';
import image3 from '../../Components/Images/deliveryB.jpg';
import image4 from '../../Components/Images/web_-50_na_drugu_1314_300A.jpg'
const Home: React.FC = () => {
  const images = [image1, image2, image3, image4];
  return (
    <div className="Home">
      <h1>PIZZA BURATINO</h1>
      <ImagesSlider images={images} interval={3000} />
    </div>
  );
};

export default Home;