import React from 'react';
import firstLightBg from '@/assets/first-hackaton-bg.png';
const FirstHackathon = () => {
  return (
    <section className='first-hackaton mt-[610px]'>
      <div className='relative w-full flex items-center justify-center first-hackaton__content'>
        <div className='absolute top-[-365px] first-hackaton__bg'>
          <img src={firstLightBg} alt='lighting' className='max-w-[943px] w-full' />
        </div>
        <div className='max-w-[431px] relative z-10 bg-[#B6DBD0] rounded-[14px] pl-[40px] pr-[30px] py-[44px] '>
          <h2 className='first-hackaton__title'>
            <span className='text-[#F3681A]'>
              Первый хакатон
              <br /> в Узбекистане
            </span>
            <br /> где решают проблемы бизнеса.
          </h2>
          <p className='first-hackaton__desc'>
            На хакатоне представлены реальные задачи от бизнес - партнеров проекта.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FirstHackathon;
