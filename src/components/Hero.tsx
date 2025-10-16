import Image from 'next/image'
import ArrowWIcon from '../assets/icons/arrow-w.svg'
import CursorImage from '../assets/images/cursor.png'
import messageImage from '../assets/images/message.png'

export const Hero = () => {
  return (
    <div>
      <div className="bg-black text-white hero-gradient py-[72px] sm:py-24 relative overflow-clip">
        <div
          className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[1880px] lg:h-[940px]
             rounded-[100%] left-1/2 -translate-x-1/2 border-[#b48cde]
             bg-[radial-gradient(farthest-side,_#000000_82%,_#9560EB)]
             top-[calc(100%-96px)] sm:top-[calc(100%-120px)] lg:top-[calc(100%-140px)]"
        ></div>
        <div className="container relative">
          <div className="flex items-center justify-center">
            <a
              href="#"
              className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
            >
              <span className="clip-gradient text-transparent bg-clip-text ">
                Version 2.0 is here
              </span>
              <span className="inline-flex items-center gap-1">
                <span>Read more</span>
                <ArrowWIcon />
              </span>
            </a>
          </div>
          <div className="flex justify-center mt-8">
            <div className="inline-flex relative">
              <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center  inline-flex">
                One Task <br />
                at a Time
              </h1>
              <Image
                src={CursorImage}
                alt=""
                className="absolute right-[476px] top-[108px] hidden sm:inline"
                height="200"
                width="200"
              />
              <Image
                src={messageImage}
                alt=""
                className="absolute top-[56px] left-[498px] hidden sm:inline"
                width="200"
                height="200"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <p className="text-center text-xl mt-8 max-w-md">
              Celebrate the joy of accomplishment with an app designed to track
              progress, motivate your efforts, and celebrate your success
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
              Get for free
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
