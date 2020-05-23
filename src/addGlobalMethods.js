import request, { get, post } from "./api";

export default function(React) {
  React.$request = request;
  React.$get = get;
  React.$post = post;
}
