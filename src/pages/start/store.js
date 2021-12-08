export default ({ hello, $http, $api }) => {
  const state = {
    name: 'Scaffold Start',
    count: 100,
  };

  const mutations = {};

  const actions = {
    ACTION_COUNT({ state }) {
      return ++state.count;
    },
  };

  return { state, mutations, actions };
};
