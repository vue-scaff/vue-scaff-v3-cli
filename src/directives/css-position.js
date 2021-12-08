export default (target, { value }) => {
  Object.assign(target.style, { position: 'fixed', ...value });
};
