<template>
  <div>
    <el-card shadow="hover">
      <!--<blog></blog>-->
      <router-view/>
      <!--<social></social>-->
      <!--<about></about>-->
    </el-card>
  </div>
</template>

<script>
import social from '../.././AppMain/social'
import about from '../.././AppMain/about'
import blog from '../.././AppMain/blog'
  export default {
    components: {
      social,
      about,
      blog
    },
    data() {
      return {

      }
    }
  }
</script>
