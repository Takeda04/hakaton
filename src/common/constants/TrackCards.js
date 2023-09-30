import masterCard from '@/assets/master-card.png';
import langAndModel from '@/assets/lang-and-models.png';
import sef from '@/assets/sef.jpg';
import cashMoney from '@/assets/cash-money.png';
import tgBot from '@/assets/tg.png';

export const TrackCards = {
  left: [
    {
      sub_title: 'Foodtech',
      img: masterCard,
      title: 'Оптимизация доставки',
      description: 'Start spending worldwide with your brand new digital or physical Mastercard debit card.',
      class: 'pt-[47px] bg-[#19624C]',
    },
    {
      sub_title: 'Web3',
      img: langAndModel,
      title: 'Языковые модели',
      description: 'Чтобы все работало как надо и никогла не глючило',
      class: 'pt-[47px] bg-[#FFB8FF]',
      titleClass: 'text-black',
      descClass: 'text-[#00000080]',
      subtitleClass: 'text-[#FF4800]',
    },
  ],
  right: [
    {
      sub_title: 'Fintech',
      img: sef,
      imgClass: 'w-[260px] h-[240px]',
      title: 'Мобильный брокеринг',
      description: 'Решение для клиентов Payme, которое позволит покупать акции компаний прямо в мобильном приложении.',
      class: 'pt-[47px] bg-[#DFE8E5] mt-[160px]',
      titleClass: 'text-black',
      descClass: 'text-[#00000080]',
      subtitleClass: 'text-[#FF4800]',
    },
    {
      sub_title: 'Foodtech',
      img: tgBot,
      imgClass: 'w-[260px] h-[240px] mix-blend-screen',
      title: 'Телеграм бот',
      description: 'Приемка заказов',
      class: 'pt-[47px] bg-[#B8330F]',
      titleClass: 'text-white',
      descClass: 'text-[#ffffff80]',
      subtitleClass: 'text-white',
    },
  ],
  bottom: [
    {
      sub_title: 'Foodtech',
      img: masterCard,
      title: 'Оптимизация доставки',
      description: 'Start spending worldwide with your brand new digital or physical Mastercard debit card.',
      class: 'pt-[47px] bg-[#BEC7E7] flex-1',
    },
    {
      sub_title: 'Fintech',
      img: cashMoney,
      imgClass: 'mt-[46px] mb-[80px]',
      title: 'Управление накоплениями',
      description: 'Решение для клиентов Payme, которое позволит покупать акции компаний прямо в мобильном приложении.',
      class: 'pt-[47px] bg-[#DFE8E5] flex-1',
      titleClass: 'text-black',
      descClass: 'text-[#00000080]',
      subtitleClass: 'text-[#FF4800]',
    },
  ],
};
