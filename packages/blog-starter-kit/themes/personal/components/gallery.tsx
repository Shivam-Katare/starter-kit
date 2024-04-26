import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    { url: "/../assets/images/ReactPlaymeet.jpeg", description: "First ReactPlay Team MeetUp" },
    { url: "/../assets/images/cco_meet.png", description: "First CCOs meet with ShowwCase CEO Rong 😊" },
    { url: "/../assets/images/fourC.webp", description: "First time selected as a speaker. Gave my first talk in an online event happend at 4C" },
    { url: "/../assets/images/zigi.jpg", description: "" },
    { url: "/../assets/images/gds.jpg", description: "Won a Writeathon hosted by ShowwCase" },
    { url: "/../assets/images/gedu.jpeg", description: "First Swags from Github Education" },
    { url: "/../assets/images/2playsamonth.jpg", description: "Won my 2nd hackathon hosted by ReactPlay" }
  ];

  const overlayRender = ({ index }: { index: number }) => {
    const className = `
      absolute left-0 bottom-0 p-2 w-full min-h-24
      text-xs text-slate-300 z-50 bg-black/50
    `;
    return (
      <div className={className}>
        <div className="flex justify-between">
          <div>{images[index].description}</div>
          <div>{index + 1} / {images.length}</div>
        </div>
      </div>
    );
  };

  return (
    <PhotoProvider
      bannerVisible={true}
      overlayRender={overlayRender}
    >
      <div className="gallery-container">
        {images.map((item, index) => (
          <article key={index} className="container__item hover:cursor-pointer">
            <PhotoView key={index} src={item.url}>
              <Image src={item.url} alt={item.url} width={500} height={500} />
            </PhotoView>
          </article>
        ))}
      </div>
    </PhotoProvider>
  );
}
