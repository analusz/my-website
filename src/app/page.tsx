'use client'
import React from 'react'
import { LinkArrow } from './components/Icons'
import Image from 'next/image'
import Works from './components/Works'
import Education from './components/Education'
import Skills from './components/Skills'

const HomePage = () => {
  return (
    <div className='sm:bg-zinc-50 sm:px-10 dark:sm:bg-zinc-950'>
      <div className='isolate px-6 pt-14 lg:px-8 bg-white dark:bg-black'>
        <div className="grid md:grid-cols-2">
          <div className='flex items-center justify-center'>
            <Image src="/images/me2.png" width={200} height={200} alt="Ana Luiza Riberio - Ilustarção" loading="eager" className='sm:w-120 w-[70%]' />
          </div>
          <div className="mx-auto max-w-2xl md:py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-left text-5xl font-bold tracking-tight text-balance text-gray-900 dark:text-zinc-100 sm:text-7xl">
                Ana Luiza Ribeiro </h1>
              <p className="mt-1 text-left text-lg font-medium text-pretty text-zinc-950 dark:text-zinc-300 sm:text-xl/8">
                Economista em formação pela UERJ, com interesse em métodos quantitativos e análise de dados
                aplicados à realidade.
              </p>
              <div className="mt-10 gap-x-6 flex items-center justify-center">
                <a
                  href="#about"
                  className="rounded-md flex bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sobre mim <LinkArrow className='ml-2 w-5' />
                </a>
                <a href="mailto:analuizasz.ribeiro@gmail.com" target="_blank" className="text-sm/6 font-semibold dark:text-zinc-100 text-gray-900">
                  Contato.
                </a>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
          </div>
        </div>
      </div>

      <div id='projects' className='isolate px-6 pt-10 lg:px-8 py-1 sm:py-10 bg-white dark:bg-black flex flex-col items-center justify-center'>

        <div >
          <div>
            <h2 className="text-left text-2xl font-bold tracking-tight text-balance text-gray-900 dark:text-zinc-100 sm:text-4xl" >
              Meus Projetos!
            </h2>
          </div>
          <div className='md:w-[70%] text-left text-pretty text-gray-700 dark:text-zinc-400 font-semibold mt-3'>
            <p>Ao longo do tempo, trabalhei em vários projetos pequenos, mas esses são os que mais me orgulham. Todos são open-source, então se algum chamar sua atenção, sinta-se à vontade para conferir o código e contribuir com ideias de melhoria.</p>
          </div>
          <Works />
        </div>
      </div>

      <div id='about' className='isolate px-6 pt-8 lg:px-8 bg-white dark:bg-black flex flex-col items-center justify-center'>

        <div className='grid lg:grid-cols-2 items-stretch'>
          <div>
            <div>
              <h3 className="text-left text-2xl font-bold tracking-tight text-balance text-gray-900 dark:text-zinc-100 sm:text-4xl">
                Um pouco sobre mim e sobre o caminho que venho trilhando na Economia, com foco em métodos
                quantitativos, análise de dados e construção de conhecimento com base em evidências.
              </h3>
            </div>
            <div className='lg:w-[100%] text-left text-pretty text-gray-900 dark:text-zinc-400 mt-8'>
              <p>Sou estudante de Economia na Universidade do Estado do Rio de Janeiro (UERJ). Antes de ingressar em Economia, cursei por um tempo Matemática na Universidade Federal do Rio de Janeiro (UFRJ), onde tive meu primeiro contato com a linguagem de programação Python. Desde então, explorei outras linguagens e ferramentas, que hoje aplico em diversos projetos.</p>
              <p>Atualmente, trabalho como bolsista/pesquisadora no FGV CERI (Centro de Estudos em Regulação e Infraestrutura), onde venho me aprofundando em conceitos econométricos e estatísticos, com foco em desenvolver habilidades para atuar como cientista de dados.</p>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <Image src="../images/pixel.gif" width={450} height={250} alt="robo" loading="eager" className='w-[450px] rounded-4xl rotate-3 my-10' />
          </div>
        </div>
        <Education />
        <Skills />
      </div>


      <div id='articles' className='isolate px-6 sm:py-0 lg:px-8 bg-white dark:bg-black flex flex-col items-center justify-center'>
        <div className='my-15'>
          <div>
            <h3 className="text-left text-2xl font-bold tracking-tight text-balance text-gray-900 dark:text-zinc-100 sm:text-4xl">
              Ainda estou me aprimorando e estudando para começar a publicar artigos acadêmicos em breve.
            </h3>
          </div>
          <div className='md:w-[70%] text-left text-pretty text-gray-700 dark:text-zinc-400 mt-3'>
            <p>Apesar de ainda não haver artigos disponíveis nesta página, estou em processo de aprimoramento acadêmico e estudando continuamente para produzir conteúdos de qualidade. Em breve, pesquisas e aprendizados ao longo da minha formação serão compartilhados aqui. Agradeço pela visita e pelo interesse!</p>
          </div>
        </div>

      </div>




    </div >
  )
}

export default HomePage;