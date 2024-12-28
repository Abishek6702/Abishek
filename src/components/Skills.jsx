import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiMysql,
  DiPython,
} from "react-icons/di"
import {SiFigma,SiWordpress} from "react-icons/si"
import Reveal from "./Reveal"

const skills = [
    {
      category: 'Frontend & Design',
      technologies: [
        { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
        { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
        
        { name: 'Figma', icon: <SiFigma className='text-pink-600' /> },
        { name: 'WordPress', icon: <SiWordpress className='text-blue-600' /> },
        { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
        {name : 'TailWind', icon: <DiBootstrap className='text-purple-600' />},
        { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
        
      ],
    },
    {
      category: 'Fullstack',
      technologies: [
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
        { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },
        { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
        { name: 'SQL', icon: <DiMysql className='text-blue-600' /> },
        
        { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
        { name: 'Python', icon: <DiPython className='text-yellow-600' /> },
      ],
    },
  ]

const Skills = () => {
  return (
    <div className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
            I have experience in working on various frontend and fullstack projects.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        ">
            {skills.map((skill, index) => (
                <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </Reveal>
    </div>
  )
}

export default Skills
