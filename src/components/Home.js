import React from 'react';
// import bgImage from '../../public/photo-1635805737707-575885ab0820.jpg';

const Home = () => {
  return (
    <div>
      <div className="hero h-screen bg-black">
  <div className="hero-content flex-col lg:flex-row w-4/6">
    <img src="./photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg w-80 shadow-2xl" alt='SpiderMan' />
    <div className='w-5/6'>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Home;