export const setWithExpiration = (
  key: string,
  value: string,
  expiration: number
) => {
  const now = new Date();
  const item = {
    value,
    expiration: now.getTime() + expiration,
  };

  localStorage.setItem(key, JSON.stringify(item));
};

export const getWithExpiration = (key: string) => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiration) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};

export const removeWithExpiration = (key: string) => {
  localStorage.removeItem(key);
};

export const clear = () => {
  localStorage.clear();
};
