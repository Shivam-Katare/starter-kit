import { AppProps } from 'next/app';
import '../styles/index.css';
import React from 'react';
import Navigation from '../components/navigation';
import { Container } from '../components/container';
import { Footer } from '../components/footer';
import { FloatButton } from 'antd';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Container className="mx-auto flex max-w-3xl flex-col items-stretch gap-10 px-5 py-10">
		<Navigation />
			<Component {...pageProps} />
			<Footer />
			<FloatButton.BackTop />
		</Container>
	)
}
