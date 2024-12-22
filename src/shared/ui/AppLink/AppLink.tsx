import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
