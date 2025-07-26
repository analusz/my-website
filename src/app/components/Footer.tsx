'use client'
import React from 'react'

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Artigos', href: '#articles' },
]

const Footer = () => {
    return (
        <div className='flex items-center justify-center flex-col px-6 py-6 gap-4 bg-white dark:bg-black dark:border-gray-950 border-t-1 border-gray-200'>
            <div className="flex gap-6">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="font-semibold text-sm text-gray-900 dark:text-zinc-100 hover:text-blue-600 transition-colors duration-200">
                            {item.name}
                        </a>
                    ))}
                </div>
            <div>
                <p className='text-gray-500 text-center font-semibold text-sm dark:text-zinc-400'>© 2025 Ana Luiza Ribeiro. Todos os direitos reservados.</p>
            </div>
        </div>
    )
}

export default Footer