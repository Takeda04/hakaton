import React from 'react';
import './styles/hero.css';
import moon from '../../assets/moon.png';
import heroTitleSpanImg from '../../assets/hero-title-span.png';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const HeroSection = () => {
  return (
    <section className='hero'>
      <div className='container-custom'>
        <div className='min-[300px]:hidden lg:block lg:w-[420px] xl:w-[450px] 2xl:w-auto absolute -top-6 -right-14 hero__moon-img z-[-1]'>
          <img src={moon} alt='moon image' />
        </div>
        <div className='hero__content mt-[260px] flex flex-col items-center justify-center gap-[100px]'>
          <h1 className='hero__title flex items-center justify-center gap-2 flex-wrap max-w-[950px]'>
            Решай проблему
            <span>
              <img src={heroTitleSpanImg} alt='' />
            </span>
            бизнеса
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' width='33' height='31' viewBox='0 0 33 31' fill='none'>
                <g clip-path='url(#clip0_2366_1227)'>
                  <path
                    d='M19.7085 29.8135L12.9935 29.8135L1.70248 15.5045L12.9935 1.19548L19.7085 1.19548L14.4625 7.82748C12.9515 9.75648 11.5235 11.5255 10.1385 13.1335L32.2585 13.1335V17.9165L10.1805 17.9165C11.5655 19.5635 12.9935 21.2925 14.4625 23.1815L19.7085 29.8135Z'
                    fill='#F7F7F7'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_2366_1227'>
                    <rect width='32' height='30' fill='white' transform='matrix(-1 0 0 -1 32.9805 30.5049)' />
                  </clipPath>
                </defs>
              </svg>
            </span>
            и побеждай на
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' width='35' height='34' viewBox='0 0 35 34' fill='none'>
                <g clip-path='url(#clip0_2366_1232)'>
                  <path
                    d='M17.5082 22.9529L9.99016 33.1659L5.28116 29.3779L12.8822 18.9989L0.738159 15.0459L2.72016 9.36186L14.4512 13.1509V0.630859H20.5652V13.1509L32.2952 9.36186L34.2782 15.0459L22.2172 18.9989L29.8172 29.3779L25.0262 33.1659L17.5082 22.9529Z'
                    fill='#FF4800'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_2366_1232'>
                    <rect width='34' height='33' fill='white' transform='translate(0.410156 0.304688)' />
                  </clipPath>
                </defs>
              </svg>
            </span>
            лучшем
            <span className='border-4 border-white p-1 px-4 rounded-full'>хакатоне.</span>
          </h1>
          <div className='flex flex-col gap-[20px]'>
            <Button variant='outline' className='text-black rounded-full text-lg' size='lg'>
              Записаться →
            </Button>
            <div className='flex gap-2 items-center'>
              <div className='flex -space-x-1.5 overflow-hidden'>
                <Avatar className='w-[32px] h-[32px] inline-block rounded-full ring-2 ring-black'>
                  <AvatarImage src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' />
                  <AvatarFallback>RN</AvatarFallback>
                </Avatar>
                <Avatar className='w-[32px] h-[32px] inline-block rounded-full ring-2 ring-black'>
                  <AvatarImage src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' />
                  <AvatarFallback>AN</AvatarFallback>
                </Avatar>
                <Avatar className='w-[32px] h-[32px] inline-block rounded-full ring-2 ring-black'>
                  <AvatarImage src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <p className='text-sm'>568+ уже с нами</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
