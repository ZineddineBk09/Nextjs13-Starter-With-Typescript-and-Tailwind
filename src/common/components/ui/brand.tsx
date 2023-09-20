import Image from 'next/image'
import Link from 'next/link'

export default function Brand() {
  return (
    <Link className="block group" href="/" aria-label="Cruip">
      <div className=' w-full max-w-[130px]' >
        <Image src='/images/logos/nextfuse.png' width={300} height={300} alt='Nextfuse logo' layout='responsive' />
      </div>
    </Link>
  )
}
