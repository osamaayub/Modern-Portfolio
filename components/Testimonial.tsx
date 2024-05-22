/* eslint-disable @next/next/no-img-element */
import { testimonials } from '@/data';
import { companies } from '@/data';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
const Testimonial = () => {
  return (
    <div className='py-20' id='testimonials'>
      <h1 className='heading text-white'>
        kind words from {''}
        <span className='text-purple'> statisfied Clients</span>
      </h1>
      <div className='flex flex-col items-center lg:mt-10'>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />
      </div>
      <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
        {companies.map(({ id, name, img, nameImg }) => (
          <div key={id} className='flex  md:max-w-60 max-w-32 gap-2'>
            <img src={img} alt={name} className='md:w-10 w-5' />
            <img src={nameImg} alt={name} className='md:w-24 w-20' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
