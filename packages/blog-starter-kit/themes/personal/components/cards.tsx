import React from 'react';
import { GithubFilled, LinkOutlined } from '@ant-design/icons';
import { Button, Card, Tooltip } from 'antd';
import { PROJECT } from '../lib/constants/constant';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const { Meta } = Card;

interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  githubUrl: string;
  projectUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

const truncateText = (text: string, length: number) => {
  return text.length > length ? text.substring(0, length) + '...' : text;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <Card
    style={{ maxWidth: "max-content", width: "18rem" }}
    cover={
      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
        <img alt={project.title} src={project.coverImage} className=' max-h-[12rem]'/>
      </a>
    }
    size='small'
    actions={[
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
        <GithubFilled key="github" />
      </a>,
      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
        <LinkOutlined key="edit" />
      </a>,
    ]}
  >
    <Meta
      title={project.title}
      description={truncateText(project.description, 90)}
    />
  </Card>
);

const Carousel = dynamic(() => import('antd').then(module => module.Carousel));

const Project = () => {
  return (
    <React.Fragment>
      					<h1 className='text-center font-mono text-[30px]'>Projects</h1>

<div className='grid justify-items-center justify-center'>
  <div className='p-[22px] bg-[#c8c8c8] rounded-[15px] w-[16rem] sm:w-[21rem]'>
    <Carousel autoplay dotPosition='bottom' dots>
      {PROJECT.map((project) => (
        <div key={project.id} className='grid grid-cols-1 justify-items-center items-center place-items-center w-[18rem]'>
          <ProjectCard project={project} />
        </div>
      ))}
    </Carousel>
  </div>
  <Tooltip title="Take me to Github" placement="bottom" className='mt-3'>
    <Link href='https://github.com/Shivam-Katare?tab=repositories' target='_blank'>
      <Button className='bg-black text-white hover:bg-white' icon={<GithubFilled />}>
        See all on Github
      </Button>
    </Link>
  </Tooltip>
</div>
    </React.Fragment>
  )
}

export default Project;

