export const GetStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const SetStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const RemoveStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    return false;
  }
};

export const RemoveAllStorage = () => {
  try {
    localStorage.clear(); // 全清
  } catch (error) {
    return false;
  }
};
