'use client'
import React from 'react'
import { LinkIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { Bot } from 'lucide-react';

const Works = () => {
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
                <a
                    href="https://github.com/analusz/rag-model"
                    target="_blank"
                    className="p-10 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-900 group transition flex flex-col h-full"
                >
                    <Bot className='w-7 text-gray-500 mb-6 group-hover:text-[#05a1ad] transition duration-450' />

                    <h4 className="font-bold text-1xl text-left dark:text-zinc-100">Modelo RAG</h4>
                    <p className="text-left text-pretty text-gray-800 dark:text-zinc-400 text-[14px] mt-3">Exemplo de implementação de um RAG local com LangChain, Ollama e ChromaDB.</p>

                    <div className="flex items-center gap-1 text-gray-400 group-hover:text-[#05a1ad] transition duration-450  mt-4">
                        <LinkIcon className="w-4" />
                        <p className='text-[14px] pl-4 font-semibold dark:text-zinc-400'>github.com</p>
                    </div>
                </a>
                <a
                    href="https://github.com/analusz/dashboard_economico"
                    target="_blank"
                    className="p-10 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-900 group transition flex flex-col h-full"
                >
                    <ChartBarIcon className='w-7 text-gray-500 mb-6 group-hover:text-[#05a1ad] transition duration-450' />
                    <h4 className="font-bold text-1xl text-left dark:text-zinc-100">Dashboard Econômico</h4>
                    <p className="text-left text-pretty text-gray-800 text-[14px] mt-3 dark:text-zinc-400">Dashboard desenvolvido em Python utilizando a biblioteca Dash.</p>

                    <div className="flex items-center gap-1 text-gray-400 group-hover:text-[#05a1ad] transition duration-450 mt-4">
                        <LinkIcon className="w-4" />
                        <p className='text-[14px] pl-4 font-semibold dark:text-zinc-400'>github.com</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Works