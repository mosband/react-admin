export const addRoutes = (target, source) => {
  source.forEach(route => {
    if (route.path && route.component) {
      target.push(route);
    } else if (route.children && Array.isArray(route.children)) {
      addRoutes(target, route.children);
    }
  });
};

export const makePathRouteMap = routes => {
  const map = Object.create(null);
  routes.forEach(route => {
    if (route.path && route.component) {
      map[route.path] = route;
    }
  });
  return map;
};
