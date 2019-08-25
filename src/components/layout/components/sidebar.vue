<template>
  <div>
    <el-card shadow="hover"  style="height: 75vh;">
      <el-menu @select="onSelect">
        <el-menu-item v-for="item in RouterMap" :key="item.path" :index="item.path">
          <i :class="item.meta.icon"></i>
          {{item.meta.title}}
        </el-menu-item>
      </el-menu>
    </el-card>
  </div>
</template>

<script>
  import { RouterMap } from '@/router/index'
  export default {
    data() {
      return {
        RouterMap
      }
    },
    methods: {
      onSelect(index) {
        this.$router.push(index)
      }
    }
  }
</script>
