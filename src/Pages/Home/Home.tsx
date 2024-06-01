import React from 'react';
import ImagesSlider from '../../Components/ImagesSlider/ImagesSlider';
import image1 from '../../Components/Images/web_papa_jon_tree_pizza_53-grn_1514_300.jpg';
import image2 from '../../Components/Images/week_offer_delivery_page_1414_300_papa-dzhon.jpg';
import image3 from '../../Components/Images/deliveryC.jpg';
import image4 from '../../Components/Images/web_-50_na_drugu_1314_300B.jpg';
import Image from '../../Components/Image';
import LeafIcon from '../../Components/Images/vegan';

const Home: React.FC = () => {
  const images = [image1, image2, image3, image4];
  return (
    <div className="container">
      <h1>PIZZA BURATINO</h1>
      <ImagesSlider images={images} interval={3000} />
      <Image
        src="https://buratino-images.s3.eu-north-1.amazonaws.com/Pizza-Buratino/%D1%81ombo_sets/combo_sets_%E2%84%961.png"
        alt="A sample image from Google Drive"
      />
   <LeafIcon width ='100px'/>
    </div>
   

  );
};

export default Home;