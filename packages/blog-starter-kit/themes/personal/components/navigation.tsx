import React, { useState } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';

const { Item } = Menu;

const Navigation: React.FC = () => {
  const [current, setCurrent] = useState('home');

  const handleClick = (e: any) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home">
        <Link href="/">Home</Link>
      </Item>
      <Item key="blog">
        <Link href="/blog">Blog</Link>
      </Item>
      <Item key="work">
        <Link href="/work">Work</Link>
      </Item>
      <Item key="projects">
        <Link href="/projects">Projects</Link>
      </Item>
      <Item key="connect">
        <Link href="/connect">Connect</Link>
      </Item>
      <Item key="testimonials">
        <Link href="/testimonials">Testimonials</Link>
      </Item>
    </Menu>
  );
};

export default Navigation;