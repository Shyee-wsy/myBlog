<template>
  <div>
    <el-card shadow="hover">
      <el-menu>
        <el-menu-item v-for="item in constantRouterMap">{{item.content}}</el-menu-item>
      </el-menu>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        constantRouterMap: [
          {id: 1, content: '文章'},
          { id: 2, content: '社交'},
          { id: 3, content: '开源项目'},
        ]
      }
    }
  }
</script>
