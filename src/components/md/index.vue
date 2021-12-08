<template>
  <component :is="`md-${file}-readme`" class="markdown-body" />
</template>

<script>
import 'github-markdown-css';
import 'highlight.js/styles/atom-one-dark.css';

export default {
  props: {
    file: {
      type: [String],
      default() {
        return '';
      },
    },
  },
};
</script>
