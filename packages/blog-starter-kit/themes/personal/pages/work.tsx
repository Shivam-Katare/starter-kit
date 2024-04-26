import React from 'react'
import ListDisplay from '../components/list-display'
import Triallies from "../public/assets/officalLogos/triallies.jpg"
import Flagright from "../public/assets/officalLogos/flagright.jpg"
import AccuKnox from "../public/assets/officalLogos/accuknox.jpg"
import ShowwCase from "../public/assets/officalLogos/showwcase.png"
import HumansOfTech from "../public/assets/officalLogos/humansoftech.jpg"
import ReactPlay from "../public/assets/officalLogos/reactplay.png"
import SSOC from "../public/assets/officalLogos/ssoc.webp"
import { Tag } from 'antd'
import Link from 'next/link'

function Work() {
  const workExperienceData = [
    {
      name: 'Triallies LLC',
      description: 'Frontend Developer',
      avatar: Triallies,
      date: 'September 2023 - Present',
      loading: false,
    },
    {
      name: 'Flagright',
      description: 'Software Engineer Intern',
      avatar: Flagright,
      date: 'April 2023 - July 2023',
      loading: false,
    },
    {
      name: 'AccuKnox',
      description: 'React JS Developer',
      avatar: AccuKnox,
      date: 'July 2022 - March 2023',
      loading: false,
    }
  ];

  const volunteerExperinceData = [
    {
      name: 'Humans Of Tech',
      description: 'Content Writer',
      avatar: HumansOfTech,
      date: 'November 2023 - Present',
      loading: false,
    },
    {
      name: 'ShowwCase',
      description: 'Chief Creative Officer',
      avatar: ShowwCase,
      date: 'April 2023 - October 2023',
      loading: false,
    },
    {
      name: 'ReactPlay',
      description: 'Contributer',
      avatar: ReactPlay,
      date: 'April 2022 - Present',
      loading: false,
    },
    {
      name: 'Social Summer Of Code',
      description: 'Contributer',
      avatar: SSOC,
      date: 'Jun 2022 - Aug 2022',
      loading: false,
    }
  ]
  return (
    <React.Fragment>
      <h1 className='text-4xl font-bold'>Work</h1>

      <p>
      I'm a passionate front-end developer with over <strong>2 years</strong> of experience building user interfaces
      for high-paced startups. I'm skilled in HTML, CSS, JavaScript, and frameworks like React, Next.js, and Tailwind CSS.
      I'm a quick learner who loves contributing to the developer community by writing blogs and sharing experiences.
      In my free time, I enjoy tackling personal projects and participating in open-source events.
      </p>

      <p>
      I have previous experience working as a React JS Developer at <a href="https://www.accuknox.com/" target='_blank'><Tag className="mr-2" color='#9194ff'>AccuKnox</Tag></a> and as a Software Engineer Intern at YC backed high-paced startup <a href="https://www.flagright.com/" target='_blank'><Tag className="mr-2" color='#1165ff'>Flagright</Tag></a>. Currently, I am working at <a href="https://triallies.com/" target='_blank'><Tag className="mr-2" color='volcano'>Triallies LLC</Tag></a> as a Frontend Developer.
      Additionally, I am an active member of various open-source communities and organizations, where I am contributor or worked as a voulenteer.
      </p>

      <p>
        I have been a part of a community named <a href="https://reactplay.io/" target='_blank'><Tag className="mr-2 font-bold" color='#61dafb'>ReactPlay</Tag></a> since April 2022, where I
        contributed new web projects based on React, Tailwind, and APIs. I fixed bugs 
        and added new features to the existing projects. I also helped other members
        of the community with their projects, involved in community discussions, meets,
        hackathons(Also won one of them😉),
        and Twitter Spaces. You can also check out my contributions <a href='https://github.com/reactplay/react-play/pulls?q=is%3Apr+is%3Aclosed+author%3AShivam-Katare' target='_blank' className='text-blue-700 font-extrabold'> here. </a>
      </p>

      <p>
      With this, I am also currently a part of <a href="https://www.thehumansoftech.com/" target='_blank'><Tag className="mr-2" color='black'>Humans Of Tech</Tag></a> 
      working as a content writer. I previously worked as a Chief Creative Officer
      at <a href="https://www.showwcase.com/" target='_blank'><Tag className="mr-2" color='volcano'>ShowwCase</Tag></a> and,
      also, being a contributor at <a href="https://drive.google.com/file/d/1-2QekibE9dqt0JsiOZ997jW_YvUFfxrv/view?usp=sharing" target='_blank'>Social Summer of Code.</a>

      </p>
      <p>
        With community contributions, I also love to write blogs and share my learning with the world. You can rread my blogs <Link href='/blog' target='_blank' className='text-green-500 font-extrabold'> here. </Link>.
      </p>
      <div className='w-full grid grid-rows-2 '>
        <ListDisplay header={'Work Experience'} data={workExperienceData} />
        <ListDisplay header={'Voulenteer/Community Experince'} data={volunteerExperinceData} />

      </div>
    </React.Fragment>
  )
}

export default Work