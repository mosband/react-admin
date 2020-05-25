import store from "store";
const USER_KEY = "user_key";

let _user = undefined;

export const setUser = user => {
  _user = user;
  store.set(USER_KEY, user);
};

export const getUser = () => _user || store.get(USER_KEY);

export const removeUser = () => {
  _user = undefined;
  store.remove(USER_KEY);
};
