import * as React from 'react';
import classNames from 'classnames';
import omit from 'omit.js';

export interface IconProps {
  type: string;
  className?: string;
  title?: string;
  onClick?: React.MouseEventHandler<any>;
  spin?: boolean;
  adparlor?: boolean;
  style?: React.CSSProperties;
}

export default (props: IconProps) => {
  const { type, className = '', spin, adparlor } = props;
  const iconClass = adparlor ? `adparlor-icon ${type}` : `anticon-${type}`;
  const classString = classNames({
    anticon: true,
    'anticon-spin': !!spin || type === 'loading',
    iconClass: true,
    [`${iconClass}`]: true,
  }, className);
  return <i {...omit(props, ['type', 'spin', 'adparlor'])} className={classString} />;
};
