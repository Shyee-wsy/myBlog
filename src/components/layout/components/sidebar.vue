<template>
  <div>
    <el-card shadow="hover">
      <el-menu>
        <el-menu-item v-for="item in constantRouterMap" :key="item.id">
          <i :class="item.icon"></i>
          {{item.content}}
        </el-menu-item>
      </el-menu>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        constantRouterMap: [
          {id: 1, content: '文章', icon: 'el-icon-notebook-2'},
          { id: 2, content: '社交', icon: 'el-icon-user'},
          { id: 3, content: '开源项目', icon: 'el-icon-s-grid'},
          { id: 4, content: '评论', icon: 'el-icon-chat-dot-round'},
          { id: 5, content: '关于作者', icon: 'el-icon-user-solid'}
        ]
      }
    }
  }
</script>
