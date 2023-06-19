import { mergeRight } from "ramda";
import { useQuery } from "react-query";

const STALE_TIME = 100_000;
const QUERY_KEYS = {
  PROPERTIES_LIST: "propertiesList",
};

const useFetchAssets = (filters, options = {}) =>
  useQuery(
    [QUERY_KEYS.PROPERTIES_LIST, filters],
    // () => propertiesApi.fetch(filters), //fetch function in api
    mergeRight({ staleTime: STALE_TIME }, options)
  );

export { useFetchAssets };
