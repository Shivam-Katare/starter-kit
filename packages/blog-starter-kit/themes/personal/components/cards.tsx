import React from 'react';
import { GithubFilled, LinkOutlined } from '@ant-design/icons';
import { Card } from 'antd';

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
    style={{ width: 300 }}
    cover={
      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
        <img alt={project.title} src={project.coverImage} />
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
      description={truncateText(project.description, 150)}
    />
  </Card>
);

export default ProjectCard;