import {ajax} from 'rxjs/observable/dom/ajax';

export const getUsingAjax = (url, headers) => {
  return ajax.get(url, Object.assign({}, headers));
};

export const postUsingAjax = (url, headers) => {
  return ajax.post(url, Object.assign({}, headers));
};
