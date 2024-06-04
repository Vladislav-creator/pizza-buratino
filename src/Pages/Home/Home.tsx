import React, { useEffect, useState, useCallback } from 'react';
import { getAllcarPages } from '../../services';
import Category from '../../Components/Category/Category';
import { Pizza } from '../../Components/Types/Pizza';
import ImagesSlider from '../../Components/ImagesSlider/ImagesSlider';
import image1 from '../../Components/Images/web_papa_jon_tree_pizza_53-grn_1514_300.jpg';
import image2 from '../../Components/Images/week_offer_delivery_page_1414_300_papa-dzhon.jpg';
import image3 from '../../Components/Images/deliveryC.jpg';
import image4 from '../../Components/Images/web_-50_na_drugu_1314_300B.jpg';
import AllIcon from '../../Components/Images/all';
import LeafIcon from '../../Components/Images/vegan';
import NewIcon from '../../Components/Images/new';
import FireIcon from '../../Components/Images/fire';
import HeardIcon from '../../Components/Images/heard';
import css from './Home.module.css';

const Home: React.FC = () => {
  const images = [image1, image2, image3, image4];
  const [allPizzas, setAllPizzas] = useState<Pizza[]>([]);
  const [displayedPizzas, setDisplayedPizzas] = useState<Pizza[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prevFilters => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter(f => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  const fetchPizzas = useCallback(async () => {
    setLoading(true);
    try {
      const newPizzas = await getAllcarPages(Math.ceil(allPizzas.length / 9 + 1));
      if (newPizzas.length === 0) {
        setHasMore(false);
      } else {
        setAllPizzas((prevPizzas) => {
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
  }, [allPizzas.length]);

  useEffect(() => {
    fetchPizzas();
  }, [fetchPizzas]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !loading && hasMore) {
        fetchPizzas();
      }
    });

    observer.observe(document.querySelector('#loadMore')!);

    return () => observer.disconnect();
  }, [loading, hasMore, fetchPizzas]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    if (selectedCategory) {
      const element = document.getElementById(selectedCategory);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const applyFilters = useCallback(() => {
    const filteredPizzas = allPizzas.filter(pizza => {
      if (selectedFilters.length === 0) {
        return true;
      }
      return selectedFilters.every(filter => {
        switch (filter) {
          case 'vegetarian':
            return pizza.vegetarian === true;
          case 'new':
            return pizza.new === true;
          case 'spicy':
            return pizza.spicy === true;
          case 'popular':
            return pizza.popular === true;
          default:
            return true;
        }
      });
    });

    console.log('Filtered Pizzas:', filteredPizzas);
    setDisplayedPizzas(filteredPizzas);
  }, [allPizzas, selectedFilters]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters, selectedFilters]);

  return (
    <div className="container">
      <h1>PIZZA BURATINO</h1>
      <div className={css.iconsAndSlider}>
        <div>
          <div className={css.icons}>
            <div onClick={() => {
              setSelectedFilters([]);
              toggleFilter('vegetarian');
            }}>
              <LeafIcon width='50px' />
            </div>
            <div onClick={() => {
              setSelectedFilters([]);
              toggleFilter('new');
            }}>
              <NewIcon width='50px' />
            </div>
            <div onClick={() => {
              setSelectedFilters([]);
              toggleFilter('spicy');
            }}>
              <FireIcon width='50px' />
            </div>
            <div onClick={() => {
              setSelectedFilters([]);
              toggleFilter('popular');
            }}>
              <HeardIcon width='50px' />
            </div>
            <div onClick={() => setSelectedFilters([])}>
              <AllIcon width='50px' />
            </div>
          </div>
          <select onChange={handleCategoryChange}>
            <option value="">All</option>
            {Array.from(new Set(displayedPizzas.map(pizza => pizza.categories)))
              .map((category, index) => (
                <option key={index} value={`category-${index}`}>
                  {category}
                </option>
              ))}
          </select>
        </div>
        <ImagesSlider images={images} interval={3000} />
      </div>

      <div>
        {Array.from(new Set(displayedPizzas.map(pizza => pizza.level)))
          .sort((a, b) => a - b)
          .map((level, index) => (
            <div key={level} id={`category-${index}`}>
              <Category
                category={displayedPizzas.find(pizza => pizza.level === level)?.categories ?? ''}
                pizzas={displayedPizzas.filter(pizza => pizza.level === level)}
              />
            </div>
          ))}
        <div id="loadMore" style={{ height: '1px' }}></div>
        {loading && <p>Loading more pizzas...</p>}
        {!hasMore && <p>No more pizzas to load.</p>}
      </div>
    </div>
  );
};

export default Home;