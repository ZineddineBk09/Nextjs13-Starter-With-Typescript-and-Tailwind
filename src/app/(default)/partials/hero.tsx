
import Image from 'next/image'
//
import Illustration from '@public/images/hero-illustration.svg'
import Icon from '@/common/components/shared/icon'
import PoweredbyLogos from './poweredby-logos'


export default function Hero() {
  return (
    <section className="relative overflow-hidden ">

      {/* Illustration */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10 opacity-70" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" priority alt="Hero Illustration" />
      </div>

      <div className='container ' >
        <div className="px-4 sm:px-6">
          <div className="pt-28 pb-8 md:pt-36 md:pb-16">

            {/* Hero content */}
            <div className="max-w-5xl text-center mx-auto">

              <h1 className="h1 font-roboto font-medium leading-[1.3] text-white/80">
                <span className='gradient-text' >Next js 13</span> Starter template
              </h1>

              <p className='text-sm md:text-xl opacity-75 my-6' > Organized code with NextFuse. Our meticulously crafted starter template for Next.js 13, Tailwind CSS, and TypeScript ensures clean and structured code, enabling you to build scalable and maintainable web applications with utmost efficiency. </p>

              <a href='https://github.com/raihanhosen011/nextjs-13-starter-template' target='_blank' rel='norefferer' >
                <button className='flex gap-2 bg-white/80 mx-auto text-black px-[10px] py-[10px] items-center rounded-[7px] font-[500] text-sm md:text-base' > <Icon name='github' /> Star on Github </button>
              </a>

            </div>

          </div>
        </div>

        <PoweredbyLogos />
      </div>

    </section>
  )
}