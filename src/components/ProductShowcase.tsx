import appScreen from '../assets/images/app-screen.png'
import Image from 'next/image'

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5d2ca8] py-[72px] sm:py-24">
      <div className="container text-center">
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive interface
        </h2>

        <div className="max-w-xl mx-auto">
          <p className="text-xl text-white/70 mt-7">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>

        <div className="mt-14 flex justify-center">
          <Image
            src={appScreen}
            alt="The product screenshot"
            className="w-auto h-auto max-w-full"
          />
        </div>
      </div>
    </div>
  )
}
