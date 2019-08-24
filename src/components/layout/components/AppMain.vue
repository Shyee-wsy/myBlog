<template>
  <div>
    <el-card shadow="hover">
      <!--<router-view/>-->
      <!--<social></social>-->
      <about></about>
    </el-card>
  </div>
</template>

<script>
import social from '../.././AppMain/social'
import about from '../.././AppMain/about'
  export default {
    components: {
      social,
      about
    },
    data() {
      return {

      }
    }
  }
</script>
