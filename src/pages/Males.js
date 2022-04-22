import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MaleCorgis } from '../Data';
import '../styles/Products.scss';

const Males = () => {
  const { id } = useParams();

  // Grabbing specific Item in product list when clicked
  if (id) {
    const card = MaleCorgis.find((card) => String(card.id) === String(id));
    if (!card) {
      return <>Item Not Found</>;
    }

    return (
      <div className='product-wrapper'>
        <Link to='/males'>
          {' '}
          <button className='button'>Back to Products</button>
        </Link>

        <div className='product-info-wrapper'>
          <div className='title-cost-wrapper'>
            <h1 className='product-title'>{card.title}</h1>
            <h1 className='product-cost'>{card.cost}</h1>
          </div>

          <div className='product-img'>
            <img src={card.img} alt='' />
          </div>
          <p className='product-description'>Description: {card.description}</p>
        </div>
      </div>
    );
  }

  // Displaying males shop products
  return (
    <div className='product-shop-wrapper'>
      <div className='product-shop-cards'>
        {/* Each card item */}
        {MaleCorgis.map((data) => (
          <div className='product-shop-card' key={data.id}>
            <Link to={`/males/${data.id}`}>
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

export default Males;
