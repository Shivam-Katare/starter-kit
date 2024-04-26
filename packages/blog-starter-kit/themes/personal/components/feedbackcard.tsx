import { SelectOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import Link from 'next/link';
import React from 'react';

interface FeedbackCardProps {
  cardWidth?: string;
  highlightedLines: string;
  feedback: string;
  secondaryFeedback?: string;
  source: string;
  link?: string;
  tooltipTitle?: string;
  highlightedLinesPosition: 'top' | 'bottom';
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({highlightedLines, feedback, secondaryFeedback, source, link, tooltipTitle, highlightedLinesPosition, cardWidth }) => {
  return (
<div className={`bg-blue-50 border border-blue-200 rounded-md text-gray-800 font-semibold leading-7 m-2 min-w-[255px] p-4 text-left ${cardWidth ? cardWidth : 'max-w-[19rem]'}`}>      <p>
        {
          highlightedLinesPosition === 'top' && (
            <span className="text-[#ff6500] font-bold p-2 rounded-md text-center">
            {highlightedLines}
            </span>
          )
        }
        {feedback}
        {
          highlightedLinesPosition === 'bottom' && (
            <span className="text-[#ff6500] font-bold p-2 rounded-md text-center">
              {highlightedLines}
            </span>
          )
        }
        {secondaryFeedback}
      </p>

      <p className='text-[12px] mt-2'>
        <span className='text-gray-500'>- {source}</span>
        {
          link && (
            <span className='text-gray-500 ml-2'>
              <Link href={link} target='_blank'>
                <Tooltip title={tooltipTitle} color="blue">
                  <SelectOutlined className='text-gray-500 text-[20px]' />
                </Tooltip>
              </Link>
            </span>
          )
        }
      </p>
    </div>
  );
};

export default FeedbackCard;