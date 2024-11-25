import React from 'react';

import About from '../../components/About';
import Analytics from '../../components/Analytics';
// import Canvas from '../components/Canvas';
// import Features from '../components/Features';
import Header from '../../components/Header';
import LazyShow from '../../components/LazyShow';
import Pricing from '../../components/Pricing';
import ProductNoImage from '../../components/ProductNoImage';
import Head from 'next/head';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
<Head>
    <title>Orga</title>
  </Head>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header  page="orga"/>
          </div>
        </div>
      </div>
      <LazyShow>
        <>
          {/* <ProductNoImage  page="contact"/> */}
          {/* <Canvas /> */}
        </>
      </LazyShow>
      <LazyShow>
        <>
          {/* <Features /> */}
          {/* <Canvas /> */}
        </>
      </LazyShow>
      <LazyShow>
        <Pricing page="orga"/>
      </LazyShow>
      <LazyShow>
        <>
          {/* <Canvas /> */}
          <About />
        </>
      </LazyShow>
      <Analytics  page="orga"/>
    </div>
  );
};

export default App;
