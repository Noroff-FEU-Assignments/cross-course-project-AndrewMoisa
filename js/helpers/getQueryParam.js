function getQueryParam(param) {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const value = params.get(param);
  console.log(value);
  return value;
}

export default getQueryParam;
