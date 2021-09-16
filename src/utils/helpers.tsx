export const toggleModals = (handleFunc: React.Dispatch<React.SetStateAction<boolean>>) => {
  handleFunc(prev => !prev);
};
