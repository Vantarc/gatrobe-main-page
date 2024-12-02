import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

interface Props {
  page: string;
}

const ProductNoImage = ({page}:Props) => {

  const {pageData} = config;

  const { itemList } = (pageData[page as keyof typeof pageData] as any);

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {itemList.title.split(' ').map((word:any, index:any) => (
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
          <div className={`w-5/6 p-6 m-auto`}>
          <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {itemList.subtitle}
            </h3>
            {itemList.items.map((i:string)=> {
              return <p key={i} className={`text-gray-400 text-justify`} style={{whiteSpace: "pre-line"}
            }>{i}</p>

            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductNoImage;
