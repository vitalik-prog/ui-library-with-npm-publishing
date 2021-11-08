import { FC } from 'react';

export interface MyButtonProps {
  color: string
}

const MyButton: FC<MyButtonProps> = ({ children, color, ...props }) => {
  return (
    <button {...props}>
      {children}
    </button>
  );
};

export default MyButton;