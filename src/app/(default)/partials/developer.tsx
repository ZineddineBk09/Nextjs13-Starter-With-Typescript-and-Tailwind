import Image from 'next/image' 
//
import Icon from '@/common/components/shared/icon'
import { StringObjectTypes } from '@/shared/config/types'


export default function Developer() {

  // constants
  const socials : StringObjectTypes = {
    linkedin : 'https://linkedin.com/in/raihanhosen01',
    github : 'https://github.com/raihanhosen011',
    facebook : 'https://facebook.com/raihanhosen01',
    reddit : 'https://www.reddit.com/user/Total-Champion2602',
    web : 'https://raihanhosen.info'
  }

  
  return (
    <section id="developer" >
      <div className="container py-8 md:py-16" >
        <div className="flex flex-col items-center w-full max-w-[600px] mx-auto" >

          <div className="p-5 rounded-xl border border-gray-500 w-full" >
            <div className="flex items-center gap-7">
              <div className="relative shrink-0 border border-gray-500 rounded-full hidden md:block">
                <Image className="rounded-full" src='/images/model/raihan-hosen.png' width={102} height={102} alt="Raihan Hosen img" />

                <svg className="absolute top-0 right-0 fill-gray-400" width={26} height={17} xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
                </svg>
              </div>

              <div> 
                <div className='mb-5' >
                  <h3 className='h3 font-medium mb-1' > Raihan Hosen </h3>
                  <p className='text-gray-400 text-sm sm:text-lg' > Full stack developer & founder of <a className='text-white/80 font-medium underline' href='https://www.upsoul.digital' target='_blank' rel='norefferer' > Upsoul Digital </a> </p>  
                </div> 

                <div className='flex gap-3 opacity-80' >
                  {Object.keys(socials).map((e: string, i: number) => (
                    <a href={socials[e]} target='_blank' rel='norefferer' >
                      <Icon name={e} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}