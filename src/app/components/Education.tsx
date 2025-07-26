'use client'
import React from 'react'
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <div className='lg:pt-15 pt-5'>
            <div className='flex flex-col sm:gap-20 gap-10'>
                <div className="border-l-2 border-gray-300 pl-4 lg:flex gap-20">
                    <motion.h3 initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        viewport={{ amount: 0.2 }}
                        className="font-semibold max-lg:text-[20px] dark:text-white">
                        Universidades
                    </motion.h3>
                    <div className='flex flex-col gap-10'>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            viewport={{ amount: 0.2 }}>
                            <p className='font-semibold dark:text-zinc-100'>Universidade Federal do Rio de Janeiro (UFRJ - 2022/2023)</p>
                            <p className='text-gray-600 dark:text-zinc-400'>Durante meus estudos em matemática na UFRJ, aprofundei significativamente meu raciocínio matemático e estatístico, o que ampliou minha capacidade analítica e de resolução de problemas complexos.</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            viewport={{ amount: 0.2 }}>
                            <p className='font-semibold dark:text-zinc-100'>Universidade Federal do Rio de Janeiro (UFRJ - 2022/2023)</p>
                            <p className='text-gray-600 dark:text-zinc-400'>Durante meus estudos em matemática na UFRJ, aprofundei significativamente meu raciocínio matemático e estatístico, o que ampliou minha capacidade analítica e de resolução de problemas complexos.</p>
                        </motion.div>
                    </div>
                </div>

                <div className="border-l-2 border-gray-300 pl-4 lg:flex gap-20">
                    <motion.h3 initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        viewport={{ amount: 0.2 }} className="font-semibold max-lg:text-[20px] dark:text-white">
                        Experiência
                    </motion.h3>
                    <div className='flex flex-col gap-10'>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            viewport={{ amount: 0.2 }} >
                            <p className='font-semibold dark:text-zinc-100'>Bolsista/Pesquisador - FGV CERI | (2025 - Atual)</p>
                            <p className='text-gray-600 dark:text-zinc-400'>Atualemente no FGV CERI (Centro de Estudos em Regulação e Infraestrutura) sou bolsista, sendo responsável por questões administrativas, com foco em processos de pagamentos, gestão de contratos e suporte operacional. Também colaboro com atividades de pesquisa, auxiliando em projetos</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            viewport={{ amount: 0.2 }}>
                            <p className='font-semibold dark:text-zinc-100'>Analista de Vendas - Empresa de comércio | (2020-2021) </p>
                            <p className='text-gray-600 dark:text-zinc-400'>No cargo, eu era responsável por analisar as movimentações financeiras da empresa e realizar a contabilidade, garantindo que os registros estivessem corretos. Também acompanhava o fluxo de caixa, as contas a pagar e a receber, além de preparar relatórios financeiros para ajudar na tomada de decisões. Minha função incluía ainda organizar e arquivar documentos contábeis.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education