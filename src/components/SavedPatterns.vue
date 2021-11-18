<template>
  <div class="savedPatterns">
    {{savedPatterns}}
  </div>
</template>

<script>
import Body from './components/Body.vue';

export default defineComponent({
  name: 'savedPatterns',
  props: {
    text: String
  },
})
</script>
