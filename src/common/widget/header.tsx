import Link from 'next/link'
//
import Brand from '@/common/components/ui/brand'
import { navData } from '@/shared/config/constants'
import { NavDataTypes } from '@/shared/config/types'


export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Brand />
          </div>

          {/* navigation */}
          <nav className="flex">

            <ul className="flex gap-2 md:gap-5 flex-wrap items-center">
              {navData.map((e: NavDataTypes, i: number) => (
                <li>
                  <Link className="text-sm md:text-lg font-medium hover:underline" href={e.path} >
                    {e.name}
                  </Link>
                </li>                
              ))}
            </ul>

          </nav>

        </div>
      </div>
    </header>
  )
}
