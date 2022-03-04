import React from 'react';
import type { FC } from 'react';

import './index.less';

export interface ButtonProps {
  shape?: 'default' | 'circle' | 'round';
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const Button: FC<ButtonProps> = (props) => {
  const { children, shape, type } = props;

  return <button>{children}</button>;
};
export default Button;
