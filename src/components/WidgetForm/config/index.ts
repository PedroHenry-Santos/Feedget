import bugImageUrl from '../../../assets/bug.svg';
import ideaImageUrl from '../../../assets/idea.svg';
import thoughtImageUrl from '../../../assets/thought.svg';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de balão de pensamento'
    }
  }
};

export type FeedbackKeysProps = keyof typeof feedbackTypes;
