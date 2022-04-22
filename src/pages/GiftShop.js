import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/Products.scss';
import { GiftShopData } from '../Data';

const GiftShop = () => {
  const { id } = useParams();

  // Grabbing specific Item in product list when clicked
  if (id) {
    const card = GiftShopData.find((card) => String(card.id) === String(id));
    if (!card) {
      return <>Item Not Found</>;
    }
    return (
      <div className='product-wrapper'>
        <Link to='/giftshop'>
          {' '}
          <button className='button'>Back to Products</button>
        </Link>

        <div className='product-info-wrapper'>
          <div className='title-cost-wrapper'>
            <h1 className='product-title'>{card.title}</h1>
            <h1 className='product-cost'> {card.cost}</h1>
          </div>

          <div className='product-img'>
            <img src={card.img} alt='img' />
          </div>
          <p className='product-description'>Description: {card.description}</p>
        </div>
      </div>
    );
  }

  // Displaying gift shop products
  return (
    <div className='product-shop-wrapper'>
      <div className='product-shop-cards'>
        {/* Each card item */}
        {GiftShopData.map((data) => (
          <div className='product-shop-card' key={data.id}>
            <Link to={`/giftshop/${data.id}`}>
              <img src={data.img} alt='' />
              <div className='title'>
                <h1>{data.title}</h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftShop;
