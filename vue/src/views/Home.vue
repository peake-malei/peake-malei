<template>
  <div>

    <Index msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>
// @ is an alias to /src
import Index from '@/views/Index.vue'

export default {
  name: 'home',
  components: {
      Index
  }
}
</script>
