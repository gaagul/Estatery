import { parse } from "qs";

export const getQueryParams = (options = {}) =>
  parse(location.search, { ignoreQueryPrefix: true, ...options });

export const createQueryString = obj => {
  const params = new URLSearchParams(Object.entries(obj));

  return params.toString();
};
