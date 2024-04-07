import { ArrowUpOutlined } from '@ant-design/icons';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'

type SlantingCardsProps = {
  title: string;
  description: string;
  link: string;
  image: StaticImageData;
};

function SlantingCards({ title, description, link, image }: SlantingCardsProps) {
  return (
    <Link href={link} target='_blank'>
      <div className='w-full grid grid-cols-[0.9fr_0.1fr] justify-items-start items-center p-3 border-solid border-[2px] border-black rounded-[6px]'>
        <div>
          <h3 className='font-medium text-neutral-900 dark:text-neutral-100'>{title}</h3>
          <p className='text-neutral-600 dark:text-neutral-400'>{description}</p>
        </div>

        <Image src={image} alt='arrow-up' width={33} height={33} className='rounded-[33px] w-[33px]' />
      </div>
    </Link>
  )
}

export default SlantingCards;