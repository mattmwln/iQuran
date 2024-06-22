import React, { useEffect } from 'react';
import SurahsJuzTab from '../components/SurahsJuzTab';
import Footer from '../components/Footer';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when component is mounted
  }, []);

  const Hero = () => {
    return (
      <div className='w-full h-[80vh] flex justify-center flex-col heroimg mb-10'>
        <div className='ml-[10%] w-[20rem] xl:w-[26rem]'>
        <h1 className='text-7xl xl:text-8xl text-gray-200'>
  Welcome <br />
  <span style={{ color: '#846D35' }}>iQur'an</span>.
</h1>
          <p className='text-gray-300 mt-2 md:text-lg'>Baca kitab suci Al-Quran dimana pun dan kapan pun cukup dari sentuhan jari.</p>
        </div>
      </div>
    );
  };

  return (
    <div className='flex w-screen relative flex-col items-center' style={{ backgroundColor: '#0D1732' }}>
      <Hero />
      <div className='px-[8%]'>
        <SurahsJuzTab />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
