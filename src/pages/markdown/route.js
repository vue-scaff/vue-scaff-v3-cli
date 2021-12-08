export default () => {
  return {
    path: '/markdown',
    name: 'markdown',
    component: () => import('@/pages/markdown/index.vue'),
  };
};
