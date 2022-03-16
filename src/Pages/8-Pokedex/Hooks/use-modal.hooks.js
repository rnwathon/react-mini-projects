import * as React from 'react';

export const useModal = (initialIsOpen = false) => {
  const [isModalOpen, setIsModalOpen] = React.useState(initialIsOpen);

  return [isModalOpen, setIsModalOpen];
};
