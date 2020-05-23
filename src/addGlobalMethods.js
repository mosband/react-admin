import request, { get, post } from "./api";
import classNames from "classnames";
export default function(React) {
  React.$request = request;
  React.$get = get;
  React.$post = post;
  React.$classNames = classNames;
}
