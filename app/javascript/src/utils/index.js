import { parse } from "qs";

export const getQueryParams = (options = {}) =>
  parse(location.search, { ignoreQueryPrefix: true, ...options });

export const createQueryString = obj => {
  const params = new URLSearchParams(Object.entries(obj));

  return params.toString();
};

export const initializeFilters = () => {
  const filters = ["type", "location", "price"];
  const params = getQueryParams();

  return filters.reduce((acc, filter) => {
    acc[filter] = params[filter] || "";

    return acc;
  }, {});
};
