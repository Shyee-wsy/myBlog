<template>
  <div>
    <el-card shadow="hover">
      <el-menu @select="onSelect">
        <el-menu-item v-for="item in RouterMap" :key="item.path" :index="item.path">
          <i :class="item.meta.icon"></i>
          {{item.meta.title}}
        </el-menu-item>
      </el-menu>
    </el-card>

    <el-card v-if="this.token" style="margin-top:15px;" shadow="hover">
      <span>取消绑定</span>
      <el-button type="text" @click="cancelToken">取消token绑定</el-button>
    </el-card>
    <el-card v-else style="margin-top:15px;" shadow="hover">
      <span>&nbsp;&nbsp;Token未绑定&nbsp;&nbsp;</span>
      <el-button type="text" @click="openTokenDialog">绑定</el-button>
    </el-card>
    <token-dialog ref="tokenDialog"></token-dialog>
  </div>
</template>

<script>
  import { RouterMap } from '@/router/index'
  import tokenDialog from './tokenDialog'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      tokenDialog
    },
    data() {
      return {
        RouterMap
      }
    },
    computed: {
      ...mapGetters([
        'token',
        'githubUsername'
      ])
    },
    methods: {
      onSelect(index) {
        this.$router.push(index)
      },
      openTokenDialog(){
        this.$refs.tokenDialog.open(() => {})
      },
      //取消token绑定
      cancelToken(){
        if(this.token){
          this.$store.dispatch('Cancellation')
        }
      }
    },
  }
</script>
