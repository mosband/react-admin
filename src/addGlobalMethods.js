import request, { get, post, jsonp } from "./api";
import classNames from "classnames";
import { setUser, getUser, removeUser } from "./utils/userUtils";

export default function(React) {
  React.$request = request;
  React.$get = get;
  React.$post = post;
  React.$jsonp = jsonp;

  React.$classNames = classNames;

  React.$setUser = setUser;
  React.$getUser = getUser;
  React.$removeUser = removeUser;
}
