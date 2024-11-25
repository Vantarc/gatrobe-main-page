import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

interface Props {
  page: string;
}

const Product = ({page}:Props) => {

  const {pageData} = config;
  const { product } = pageData[page as keyof typeof pageData];;
  const [firstItem, secondItem] = product.items;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 m-auto`}>
          <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-400 text-justify` } style={{whiteSpace: "pre-line"}}>{firstItem?.description}</p>
          </div>
          <div className={`w-full sm:w-1/2 p-6 `}>
            <img
              className="h-full object-cover"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        <Divider />

        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-full object-cover"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 m-auto`}>
          <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {secondItem?.title}
            </h3>
            <div className={`align-middle`}>
              <p className={`text-gray-400 mb-8 text-justify`} style={{whiteSpace: "pre-line"}}>{secondItem?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
