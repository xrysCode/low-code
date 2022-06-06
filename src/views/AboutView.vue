<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <designer-test></designer-test>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import DesignerTest from '@/components/DesignerTest.vue'

@Options({
  components: {
    DesignerTest
  }
})
export default class AboutView extends Vue {}
</script>
