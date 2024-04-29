import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
<footer className="bg-gray-900">
			<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<a href="https://shivamkatare.vercel.app" className="flex items-center" target='_blank'>
							<h2 className='text-white text-[30px]'>Shivam Katare</h2>
						</a>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
						<div>
							<h2 className="mb-6 text-sm font-semibold text-white uppercase">Socials</h2>
							<ul className="text-white font-medium">
								<li className="mb-1">
									<a href="https://twitter.com/Shivamkatare_27" target='_blank' className="hover:underline">Twitter</a>
								</li>
								<li className="mb-1">
									<a href="https://www.linkedin.com/in/shivam-katare" target='_blank' className="hover:underline">LinkedIn</a>
								</li>
								<li className="mb-1">
									<a href="https://www.showwcase.com/shivam-katare" target='_blank' className="hover:underline">ShowwCase</a>
								</li>
								<li className="mb-1">
									<a href="https://www.instagram.com/shivamkatare_27/" target='_blank' className="hover:underline">Instagram</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-white">Other</h2>
							<ul className="text-white font-medium">
								<li className="mb-1">
									<a href="https://github.com/Shivam-Katare" target='_blank' className="hover:underline ">Github</a>
								</li>
								<li className="mb-1">
									<a href="mailto:katare27451@gmail.com" target='_blank' className="hover:underline">Email</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-white">Resources</h2>
							<ul className="text-white font-medium">
								<li className="mb-1">
									<a href="https://shivamkatare.vercel.app" target='_blank' className="hover:underline">Home</a>
								</li>
								<li className="mb-1">
									<a href="https://shivamkatare.vercel.app/work" target='_blank' className="hover:underline">Work</a>
								</li>
								<li className="mb-1">
									<a href="https://shivamkatare.vercel.app/skills" target='_blank' className="hover:underline">Skills</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div className="flex items-center justify-center">
					<span className="text-sm text-white text-center">© 2024 <a href="https://shivamkatare.vercel.app" className="hover:underline">Shivam Katare</a>. All Rights Reserved.
					</span>
				</div>
			</div>
		</footer>

	);
};
