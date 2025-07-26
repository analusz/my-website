'use client'

import React from 'react'
import { motion } from 'framer-motion';
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LinkedInIcon, GitHubIcon, MediumIcon, InstagramIcon } from './Icons'
import PageTransition from './PageTransition';
import ThemeToggle from './ThemeToggle';



const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Artigos', href: '#articles' },
]

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="absolute inset-x-0 top-0 z-50 sm:px-16 px-0 ">
            <PageTransition/>
            <nav aria-label="Global" className="flex items-center justify-between p-5 lg:px-8">
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 bg-white dark:bg-black py-2 px-8 rounded-full border border-gray-300 dark:border-[#111] shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.1)]">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="font-semibold text-sm text-gray-900 dark:text-white hover:text-[#05a1ad] dark:hover transition-colors duration-200">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="lg:flex hidden">

                    <motion.a
                        href="https://www.instagram.com/analu.szribeiro/"
                        target="_blank"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <InstagramIcon className='w-7 mx-2' />
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/ana-luiza-souza-ribeiro-/"
                        target="_blank"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <LinkedInIcon className='w-6 mx-2' />
                    </motion.a>

                    <motion.a
                        href="https://github.com/analusz"
                        target="_blank"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <GitHubIcon className='!w-6 !mx-2 dark:text-white' />
                    </motion.a>

                    <motion.a
                        href="https://medium.com/@analuizasz.ribeiro"
                        target="_blank"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <MediumIcon className='w-6 mx-2' />
                    </motion.a>
                    <ThemeToggle/>
                </div>
                <div className='lg:hidden'><ThemeToggle/></div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden fixed inset-0 z-50 flex items-center justify-center">
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                <DialogPanel className="z-50 w-11/12 max-w-md mx-auto backdrop-blur-md rounded-2xl p-6 shadow-xl text-center">
                    <div className="flex items-center justify-between">
                        <a href="#" className="flex items-center justify-center -m-1.5 p-2 w-10 bg-black  rounded-full text-white font-bold">
                            AL
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700" 
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-100 
                                        hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6 flex justify-center items-center flex-wrap">

                                <motion.a
                                    href="https://www.instagram.com/analu.szribeiro/"
                                    target="_blank"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <InstagramIcon className='w-6 mx-2' />
                                </motion.a>

                                <motion.a
                                    href="https://www.linkedin.com/in/ana-luiza-souza-ribeiro-/"
                                    target="_blank"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <LinkedInIcon className='w-7 mx-3' />
                                </motion.a>

                                <motion.a
                                    href="https://github.com/analusz"
                                    target="_blank"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <GitHubIcon className='!w-7 !mx-3 dark:text-white' />
                                </motion.a>

                                <motion.a
                                    href="https://medium.com/@analuizasz.ribeiro"
                                    target="_blank"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <MediumIcon className='w-7 mx-3' />
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

export default NavBar;