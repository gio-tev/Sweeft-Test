import {ReactNode} from 'react';

export type AccordionPropsTypes = {
  onCategoryIdChange: (id: number) => void;
  onDifficultyChange: (val: string) => void;
};

export type AccordionListPropsTypes = {
  children: ReactNode;
  title: string;
  expanded: boolean;
  onPress: () => void;
};

export type CategoryPropsTypes = {
  categoriesRes: {name: string; id: number}[];
  handleCategoryItemPress: (name: string, id: number) => void;
};

export type DifficultyPropsTypes = {
  handleDifficultyItemPress: (name: string) => void;
};
