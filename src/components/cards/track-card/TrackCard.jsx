import React from 'react';
import '../styles/style.css';
const TrackCard = ({
  customClass,
  sub_title,
  imgClass,
  title,
  img,
  description,
  titleClass,
  descClass,
  subtitleClass,
  withSpan,
}) => {
  return (
    <div className={`${customClass} pb-[56px] px-[56px] trackcard  rounded-[40px]`}>
      <p className={`trackcard__sub ${subtitleClass}`}>{sub_title}</p>
      {img == false ? null : (
        <div className='trackcard__img flex items-center justify-center'>
          <img src={img} alt={title} className={imgClass} />
        </div>
      )}
      {withSpan ? withSpan : <h3 className={`trackcard__title mb-[17px] ${titleClass}`}>{title}</h3>}
      <p className={`trackcard__description ${descClass}`}>{description}</p>
    </div>
  );
};

export default TrackCard;
