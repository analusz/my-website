'use client'
import React from 'react'
import { HtmlIcon, PythonIcon, JavaScriptIcon, ExcelIcon, PowerBiIcon, SqlIcon, CssIcon } from './Icons';
import { motion } from 'framer-motion';



const skillsItens = [
  { Icon: HtmlIcon, name: 'HTML' },
  { Icon: PythonIcon, name: 'Python' },
  { Icon: JavaScriptIcon, name: 'JavaScript' },
  { Icon: ExcelIcon, name: 'Excel' },
  { Icon: PowerBiIcon, name: 'PowerBI' },
  { Icon: SqlIcon, name: 'SQL' },
  { Icon: CssIcon, name: 'CSS' },
];

const Skills = () => {
  return (
    <div className='pt-15'>
      <div className='shadow-sm dark:shadow-[0_4px_12px_rgba(255,255,255,0.1)] border-1 border-gray-300 rounded-4xl flex flex-wrap items-center justify-center p-5 gap-10'>
        {skillsItens.map(({ Icon, name }, index) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: index * 0.15, // delay crescente pra cascata
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center justify-center gap-0.5"
        >
          <Icon />
          <p className="dark:text-zinc-100 font-semibold text-[10px]">{name}</p>
        </motion.div>
      ))}
      </div>
    </div>
  )
}

export default Skills