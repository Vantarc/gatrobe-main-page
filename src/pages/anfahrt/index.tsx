import React from 'react';

import About from '../../components/About';
import Analytics from '../../components/Analytics';
// import Canvas from '../components/Canvas';
// import Features from '../components/Features';
import Header from '../../components/Header';
import LazyShow from '../../components/LazyShow';
// import Pricing from '../components/Pricing';
import ProductNoImage from '../../components/ProductNoImage';
import Anfahrt from '../../components/Anfahrt';
import Product from '../../components/Product';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header  page="anfahrt"/>
          </div>
        </div>
      </div>
      <div className="google-map-code">
            <Anfahrt page={""}/>
        </div>
      <LazyShow>
        <>
          <Product  page="anfahrt"/>
          {/* <Canvas /> */}
        </>
      </LazyShow>
      <LazyShow>
        <>
          {/* <Features /> */}
          {/* <Canvas /> */}
        </>
      </LazyShow>
      {/* <LazyShow>
        <Pricing />
      </LazyShow> */}
      <LazyShow>
        <>
          {/* <Canvas /> */}
          <About  page="anfahrt"/>
        </>
      </LazyShow>
      <Analytics  page="anfahrt"/>
    </div>
  );
};

export default App;