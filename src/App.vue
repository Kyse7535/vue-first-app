<template>
<Header />
<router-view></router-view>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto';
  letter-spacing: 1px;

}

body, html {
  min-height: 100%;
  min-width: 300px;
}
</style>
