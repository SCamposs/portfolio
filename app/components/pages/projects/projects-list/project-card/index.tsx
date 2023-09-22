import Image from 'next/image'

export function ProjectCard() {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          src="https://github.com/SCamposs.png"
          alt="Thumbnail do Projeto"
          unoptimized
          className="w-full h-full object-cover duration-500 transition-all group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">
          Nome do Projeto
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          cupiditate incidunt blanditiis repellat eum quia, a modi nostrum quasi
          corrupti.
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          Next.js, React, Typescript, HTML, CSS, Radix, Tailwind
        </span>
      </div>
    </div>
  )
}
