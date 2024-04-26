import React from 'react'
import { GithubFilled, LinkedinFilled, XOutlined } from '@ant-design/icons';
import { FaHashnode } from "react-icons/fa6";
import Link from 'next/link';
import { MdEmail } from "react-icons/md";
import { SiShowwcase } from "react-icons/si";
import { Tag } from 'antd';
function Intro() {
  return (
    <React.Fragment>
       <div className='w-full grid justify-items-center gap-y-3 sm:grid-cols-2 sm:justify-self-stretch sm:gap-y-0 sm:justify-items-start'>
						<h1 className='text-[20px] font-bold font-[monospace]'>Hi, I'm Shivam 👋</h1>
						<div className='grid w-full justify-center sm:justify-end'>
							<div className='w-full grid grid-cols-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] justify-items-end gap-3'>
								<Link href="https://github.com/Shivam-Katare" target='_blank'>
									<GithubFilled className='text-2xl' />
								</Link>

								<Link href="https://twitter.com/Shivamkatare_27" target='_blank'>
									<XOutlined className='text-2xl' />
								</Link>

								<Link href="https://www.linkedin.com/in/shivam-katare/" target='_blank'>
									<LinkedinFilled className='text-2xl' style={{ color: "blue" }} />
								</Link>

								<Link href="https://shivamkatareblog.hashnode.dev/" target='_blank'>
									<FaHashnode className='text-2xl text-blue-500' />
								</Link>

								<Link href="mailto:katare27451@gmail.com" target='_blank'>
									<MdEmail className='text-2xl' style={{ color: "red" }} />
								</Link>

								<Link href="https://www.showwcase.com/shivam-katare" target='_blank'>
									<SiShowwcase className='text-2xl' style={{ color: "black" }} />
								</Link>
							</div>
						</div>
					</div>
					<div>


						<p>I am a frontend developer and technical writer who loves being a part of the open-source community.
							I work at <a href="https://triallies.com/" target='_blank'><Tag className="mr-2" color='volcano'>Triallies LLC</Tag></a>as a frontend developer,
							where I enjoy collaborating with and learning from my colleagues. I am also a contributor at <a href="https://reactplay.io/" target='_blank'><Tag className='mr-2 font-bold' color='#61dafb'>ReactPlay</Tag></a> and have worked with various communities and organizations. Check out about my work <a href="/work" className='text-blue-500 font-extrabold'>here</a>.
						</p>
					</div>
    </React.Fragment>
  )
}

export default Intro