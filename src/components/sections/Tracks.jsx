import React from 'react';
import TrackCard from '../cards/track-card/TrackCard';
import { TrackCards } from '../../common/constants/TrackCards';

const Tracks = () => {
  return (
    <section className='tracks mt-[364px]'>
      <div className='container-custom'>
        <h2 className='tracks__title'>Треки ↘</h2>
        <div className='flex flex-col gap-[57px] mt-[45px]'>
          <div className='flex gap-[57px]'>
            <div className='flex flex-col flex-1 gap-[57px]'>
              {TrackCards.left.map(
                ({ class: customClass, titleClass, descClass, sub_title, title, img, description, subtitleClass }) => (
                  <TrackCard
                    customClass={customClass}
                    sub_title={sub_title}
                    title={title}
                    img={img}
                    description={description}
                    titleClass={titleClass}
                    descClass={descClass}
                    subtitleClass={subtitleClass}
                  />
                )
              )}
            </div>
            <div className='flex flex-col flex-1 gap-[57px]'>
              {TrackCards.right.map(
                ({
                  class: customClass,
                  titleClass,
                  descClass,
                  imgClass,
                  sub_title,
                  title,
                  img,
                  description,
                  subtitleClass,
                }) => (
                  <TrackCard
                    customClass={customClass}
                    sub_title={sub_title}
                    title={title}
                    img={img}
                    imgClass={imgClass}
                    description={description}
                    titleClass={titleClass}
                    descClass={descClass}
                    subtitleClass={subtitleClass}
                  />
                )
              )}
            </div>
          </div>
          <TrackCard
            withSpan={
              <h3 className={`trackcard__title mb-[17px] text-black mt-[90px] text-[89px] leading-[96px] pr-[169px]`}>
                <span className='text-[#E99F30]'>Get paid</span> in USD, hassle-free.
              </h3>
            }
            img={false}
            sub_title={'Welness'}
            subtitleClass={'text-[#FF4800]'}
            customClass={'bg-[#FBE274] pt-[47px]'}
          />
          <div className='flex gap-[57px] items-start'>
            {TrackCards.bottom.map(
              ({
                class: customClass,
                titleClass,
                descClass,
                sub_title,
                title,
                img,
                imgClass,
                description,
                subtitleClass,
              }) => (
                <TrackCard
                  customClass={customClass}
                  sub_title={sub_title}
                  imgClass={imgClass}
                  title={title}
                  img={img}
                  description={description}
                  titleClass={titleClass}
                  descClass={descClass}
                  subtitleClass={subtitleClass}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
