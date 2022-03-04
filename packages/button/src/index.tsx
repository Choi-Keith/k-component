import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';

import './index.less';

export interface ButtonProps {
  size?: 'small' | 'middle' | 'large';
  shape?: 'circle' | 'round';
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const Button: FC<ButtonProps> = (props) => {
  const { children, size = 'middle', shape = 'round', type = 'default', className } = props;

  const classes = classNames(
    {
      [`btn-shape-${shape}`]: shape, // Note: Shape also has `default`
      [`btn-type-${type}`]: type,
      [`btn-size-${size}`]: size,
    },
    className,
  );

  return <button className={classes}>{children}</button>;
};
export default Button;
