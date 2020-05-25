import request, { get, post } from "./api";
import classNames from "classnames";
import { setUser, getUser, removeUser } from "./utils/userUtils";

export default function(React) {
  React.$request = request;
  React.$get = get;
  React.$post = post;

  React.$classNames = classNames;

  React.$setUser = setUser;
  React.$getUser = getUser;
  React.$removeUser = removeUser;
}
