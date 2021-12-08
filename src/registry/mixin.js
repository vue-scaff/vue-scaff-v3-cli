// Use Map State
import { mapState } from 'vuex';

// Computed Stores
const storeMapping = mapState({
  // 示例
  start: ({ start }) => start,
});

// Export
export default {
  computed: {
    ...storeMapping,
  },
};
