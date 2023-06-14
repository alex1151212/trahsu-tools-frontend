import { IRedirectParamsType } from "./common-type";

export function getRedirectParams(): IRedirectParamsType {
  let hashParams: { [key: string]: string } = {} ;
  let e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}
