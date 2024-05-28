import React from 'react';
import ImagesSlider from '../../Components/ImagesSlider/ImagesSlider';
import image1 from '../../Components/Images/web_papa_jon_tree_pizza_52-grn_1514_300.jpg';
import image2 from '../../Components/Images/week_offer_delivery_page_1414_300_papa-dzhon.jpg';
import image3 from '../../Components/Images/deliveryB.jpg';
import image4 from '../../Components/Images/web_-50_na_drugu_1314_300B.jpg'
const Home: React.FC = () => {
  const images = [image1, image2, image3, image4];
  return (
    <div className="container">
      <h1>PIZZA BURATINO</h1>
      <ImagesSlider images={images} interval={3000} />
    </div>
  );
};

export default Home;