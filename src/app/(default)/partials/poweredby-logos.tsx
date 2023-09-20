import Image from "next/image"

export default function PoweredbyLogos() {

  // constants
  const logos = ['nextjs-13.png', 'tailwind-css.png', 'typescript_.png']

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 bg-black">
        <div className="py-2 lg:py-4 border-b border-gray-600">
          {/* Items */}
          <div className="flex items-center justify-center gap-2 md:gap-5 text-center opacity-70">

            {/* Item */}
            {logos.map((e: string, i: number) => (
              <div className="w-full max-w-[145px] max-h-[70px] py-3 px-2 lg:py-2">
                <Image src={`/images/logos/${e}`} width={300} height={300} alt="logo" objectFit="contain" priority />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}