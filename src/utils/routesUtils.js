export const addRoutes = (target, source) => {
  source.forEach(route => {
    if (route.path && route.component) {
      target.push(route);
    } else if (route.children && Array.isArray(route.children)) {
      addRoutes(target, route.children);
    }
  });
};
