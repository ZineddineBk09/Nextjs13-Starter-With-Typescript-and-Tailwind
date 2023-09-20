import Developer from './partials/developer'
import Hero from './partials/hero'

export const metadata = {
  title: 'Next js 13 starter template | Home', 
}


export default function Home() {
  return (
    <>
      <Hero />
      <Developer />
    </>
  )
}
