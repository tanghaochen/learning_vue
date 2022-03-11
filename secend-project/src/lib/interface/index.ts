export interface pageIndex {
  id: number;
  name: string;
  path: string;
}

export interface tableButton {
  icon?: string;
  fn: Function;
  styles: Object;
}

export interface tableBodyIndex {
  id: number;
  firstName?: string;
  info: Array<string | number | tableButton>;
}
// export {pageIndex}
