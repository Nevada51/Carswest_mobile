interface CSSModule {
  [className: string]: string
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.inline.svg' {
  const content: string
  export default content
}

declare module 'react-scrollchor' {
  export interface IReactScrollchor {
    to?: string
  }
  const Scrollchor:React.FC<IReactScrollchor>
  export default Scrollchor
}
