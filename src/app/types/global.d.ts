declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classnames: IClassNames;
  export = classnames;
}
declare module '*.svg' {
  // eslint-disable-next-line no-undef
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare const __IS_DEV__: boolean;
