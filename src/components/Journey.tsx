'use client'
import { journey } from '@/constants/index'
import Image from 'next/image';
import CountUp from 'react-countup';

const Journey = () => {
  return (
    <section>

      <div className="container mx-auto px-4 py-20 flex flex-wrap items-center justify-center gap-5">

        <div className='w-full md:w-[40%]'>
          <h1 className='font-bold text-2xl md:text-3xl my-4 leading-relaxed md:leading-relaxed text-TDarkBlue'>Bring Your Vision to Life By Delighting Your Customers</h1>

          <figure className='w-full h-96 relative '>
            <Image src={'/homeT.png'} alt='error' fill className='object-contain top-0 left-0 w-full h-full object-left' />
          </figure>

        </div>


        <div className='w-full md:w-[40%]'>

          <h6 className='font-bold text-2xl text-TLightBlue leading-relaxed'>{`We help start-ups, SMEs and enterprises grow their business with embedded engineers and outsourced software development.`}</h6>

          <p className='text-sm my-4'>{`We bridge the gap between your vision and the digital world. We’ve been helping customers since 2009 and take pride in delivering high-quality custom services designed to help you build, grow, and revolutionize your industry.`}</p>

          <ul className='flex flex-wrap items-center md:justify-between justify-center px-10 gap-4  '>
            {journey.length > 0 && journey.map((v, i) => <li key={i} className='flex flex-col items-center justify-center gap-3 w-40'>
              <span className='text-TLightBlue text-4xl'><v.Icon /></span>
              <h1 className='text-4xl font-semibold text-TDarkBlue'><CountUp start={0} end={v.count} duration={4} />{v.plus && '+'}</h1>
              <p className='text-xs text-gray-500 capitalize'>{v.p}</p>
            </li>)}
          </ul>
        </div>


      </div>

    </section>
  )
}

export default Journey