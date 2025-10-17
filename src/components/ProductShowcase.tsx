'use client'
import appScreen from '../assets/images/app-screen.png'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null)
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ['start end', 'end end'],
  })

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])

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

        <motion.div
          className="mt-14 flex justify-center"
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: '800px',
          }}
        >
          <Image
            src={appScreen}
            alt="The product screenshot"
            className="w-auto h-auto max-w-full"
            ref={appImage}
          />
        </motion.div>
      </div>
    </div>
  )
}
