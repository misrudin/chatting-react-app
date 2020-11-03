export const getData = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

export const storeData = (key, value) => {
  let data = JSON.stringify(value);
  return localStorage.setItem(key, data);
};

export const deleteData = (key) => {
  return localStorage.removeItem(key);
};
