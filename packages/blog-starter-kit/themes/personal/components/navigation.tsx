import React, { useEffect, useState } from 'react';
import { Menu, Spin } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

const { Item } = Menu;

const Navigation: React.FC = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(router.pathname);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true);
    };

    const handleRouteChangeComplete = (url: string) => {
      setCurrent(url);
      setIsLoading(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);

  return (
    <Menu selectedKeys={[current]} mode="horizontal">
      <Item key="/">
        <Link href="/">About</Link>
      </Item>
      <Item key="/blog">
        <Link href="/blog">Blog</Link>
      </Item>
      <Item key="/work">
        <Link href="/work">Work</Link>
      </Item>
      <Item key="/skills" >
        <Link href="/skills">Skills</Link>
      </Item>
      {isLoading && (
        <Item key="loading" disabled>
          <Spin size="small" />
        </Item>
      )}
    </Menu>
  );
};

export default Navigation;
