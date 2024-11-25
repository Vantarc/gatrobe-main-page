import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

interface Props {
  page: string;
}

const Anfahrt = ({page}:Props) => {

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          Anfahrt
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
        <div className={`w-5/6 p-6 m-auto`}>

        <iframe
                src="https://www.google.com/maps/embed/v1/place?q=Gatrobe&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                width="100%"
                height="500rem"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen={false}
                aria-hidden="false"
                tabIndex={0}
            />
            </div>
        </div>
        <Divider />

      </div>
    </section>
  );
};

export default Anfahrt;
