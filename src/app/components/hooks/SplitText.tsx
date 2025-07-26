'use client'
import { motion } from 'framer-motion'

type SplitTextProps = {
  text: string
  className?: string
  delay?: number
}

export default function SplitText({ text, className = '', delay = 0 }: SplitTextProps) {
  const letters = text.split('')

  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.05,
            ease: 'easeOut'
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}
