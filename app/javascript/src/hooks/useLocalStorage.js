const getFromLocalStorage = (key, defaultValue) => {
  if (key in localStorage) {
    return JSON.parse(localStorage.getItem(key));
  }

  return defaultValue;
};

const setToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export { getFromLocalStorage, setToLocalStorage };
