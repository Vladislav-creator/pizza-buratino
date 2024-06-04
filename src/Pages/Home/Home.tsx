
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { getAllcarPages } from '../../services';
import Category from '../../Components/Category/Category';
import { Pizza } from '../../Components/Types/Pizza';
import ImagesSlider from '../../Components/ImagesSlider/ImagesSlider';
import image1 from '../../Components/Images/web_papa_jon_tree_pizza_53-grn_1514_300.jpg';
import image2 from '../../Components/Images/week_offer_delivery_page_1414_300_papa-dzhon.jpg';
import image3 from '../../Components/Images/deliveryC.jpg';
import image4 from '../../Components/Images/web_-50_na_drugu_1314_300B.jpg';
import AllIcon from '../../Components/Images/all';
// import Image from '../../Components/Image';
import LeafIcon from '../../Components/Images/vegan';
import NewIcon from '../../Components/Images/new';
import FireIcon from '../../Components/Images/fire';
import HeardIcon from '../../Components/Images/heard';
import css from './Home.module.css';
const Home: React.FC = () => {
  const images = [image1, image2, image3, image4];
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const fetchPizzas = useCallback(async () => {
    setLoading(true);
    try {
      const newPizzas = await getAllcarPages(pizzas.length / 9 + 1);
      console.log('Fetched pizzas:', newPizzas);
      if (newPizzas.length === 0) {
        setHasMore(false);
      } else {
        setPizzas((prevPizzas) => {
          const combinedPizzas = [...prevPizzas, ...newPizzas];
          const uniquePizzas = combinedPizzas.filter(
            (pizza, index, self) => index === self.findIndex((p) => p.id === pizza.id)
          );
          return uniquePizzas.sort((a, b) => a.level - b.level);
        });
      }
    } catch (error) {
      console.error('Error fetching pizzas:', error);
    } finally {
      setLoading(false);
    }
  }, [pizzas.length]);

  useEffect(() => {
    fetchPizzas();
  }, [fetchPizzas]);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !loading && hasMore) {
        fetchPizzas();
      }
    };

    observer.current = new IntersectionObserver(callback);
    observer.current.observe(document.querySelector('#loadMore')!);

    return () => observer.current?.disconnect();
  }, [loading, hasMore, fetchPizzas]);

  const groupedPizzas = pizzas.reduce((acc: { [key: number]: Pizza[] }, pizza) => {
    if (!acc[pizza.level]) {
      acc[pizza.level] = [];
    }
    acc[pizza.level].push(pizza);
    return acc;
  }, {});

  return (
    <div className="container">
      <h1>PIZZA BURATINO</h1>
      <div className={css.iconsAndSlider}>
        <div>
      <div className={css.icons}>
   <LeafIcon width ='50px'/>
   <NewIcon width ='50px'/>
   <FireIcon width ='50px'/>
   <HeardIcon width ='50px'/>
   <AllIcon width ='50px'/>
   </div>
   <select name="" id=""></select>
   </div>
      <ImagesSlider images={images} interval={3000} />
      {/* <Image
        src="https://buratino-images.s3.eu-north-1.amazonaws.com/Pizza-Buratino/%D1%81ombo_sets/combo_sets_%E2%84%961.png"
        alt="A sample image from Google Drive"
      /> */}
      
   </div>
   <div>
   {Object.keys(groupedPizzas)
        .sort((a, b) => parseInt(a) - parseInt(b)) // Сортировка уровней по возрастанию
        .map((level) => (
          <Category
            key={level}
            category={groupedPizzas[parseInt(level)][0].categories}
            pizzas={groupedPizzas[parseInt(level)]}
          />
        ))}
      <div id="loadMore" style={{ height: '1px' }}></div>
      {loading && <p>Loading more pizzas...</p>}
      {!hasMore && <p>No more pizzas to load.</p>}
    </div>
    </div>
   

  );
};

export default Home;