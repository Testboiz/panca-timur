'use client'

import { motion, useMotionValue, animate } from 'motion/react'
import { useEffect, useState } from 'react'

interface AnimatedNumberProps {
  value: number
  duration?: number
  className?: string
  suffix?: string
}

const AnimatedNumber = ({ value, duration = 2, className, suffix }: AnimatedNumberProps) => {
  const count = useMotionValue(0)
  const [rounded, setRounded] = useState(0)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (!start) return
    const controls = animate(count, value, {
      duration,
      onUpdate: (latest: number) => setRounded(Math.round(latest)),
    })
    return () => controls.stop()
  }, [start, value, count, duration])

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      onViewportEnter={() => setStart(true)}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: duration, type: 'spring' }}
      className={className}
    >
      {rounded}
      {suffix}
    </motion.span>
  )
}

export default AnimatedNumber
