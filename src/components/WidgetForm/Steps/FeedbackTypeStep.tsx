import { Dispatch } from 'react';

import { CloseButton } from '../../CloseButton';
import { FeedbackKeysProps, feedbackTypes } from '../config';

interface FeedbackTypeStepType {
  onFeedbackTypeChanged: Dispatch<FeedbackKeysProps>;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged
}: FeedbackTypeStepType) {
  return (
    <>
      <header>
        <span className="text-xl leading-6  ">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([type, { title, image }]) => {
          return (
            <button
              key={type}
              type="button"
              onClick={() => onFeedbackTypeChanged(type as FeedbackKeysProps)}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            >
              <img src={image.source} alt={image.alt} />
              <span>{title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
