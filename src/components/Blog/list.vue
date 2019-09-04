<template>
  <div>
    <el-button type="primary" icon="el-icon-edit" @click="newBlog">新建文章</el-button>
    <el-card v-for="item in blogList" :key="item.id" class="blogCard" style="margin: 20px;">
      <div slot="header">
        <el-row>
          <el-col :span="15"><span>{{item.title}}</span></el-col>
          <el-col :span="9">
            <div style="position: absolute; right: 0;">
              <el-button  type="primary" icon="el-icon-edit" circle size="mini"></el-button>
              <el-button type="info" icon="el-icon-share" circle size="mini"></el-button>
              <el-button type="danger" icon="el-icon-delete" circle size="mini"></el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <div>
        <time style="font-size:0.8em; margin-right: 20px; color: darkred;">发布时间：{{item.createdDate}}</time>
        <time style="font-size: 0.8em; color: darkred">更新时间：{{item.updateDate}}</time>
        <article style="margin-top: 20px">{{item.content}} </article>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    data() {
      return{
        blogList: [
          {id: 0, title: '第一篇文章', createdDate: '2018-2', updateDate: '2018-9', content: '第一篇文章的内容'},
          {id: 1, title: '第二篇文章', createdDate: '2019-2', updateDate: '2019-4', content: '第二篇文章的内容'},
          {id: 2, title: '第三篇文章', createdDate: '2018-3', updateDate: '2018-3', content: '第三篇文章的内容比较长，有多长呢，很长很长很长很长很长很长超级长，不知道有多长呢,很长很长很长很长很长很长超级长很长很长很长很长很长很长超级长很长很长很长很长很长很长超级长很长很长很长很长很长很长超级长很长很长很长很长很长很长超级长很长很长很长很长很长很长超级长很长很长很长很长很长很长超级长很长很长'}
        ]
      }
    },
    computed: {
      ...mapGetters([
        'token'
      ])
    },
    methods: {
      newBlog() {
        if(!this.token){
          this.$message({
            message: '请绑定有效的Token',
            type: 'warning'
          })
        } else {
          this.$router.push('/blog/edit')
        }
      },

    }
  }
</script>

<style>
article{
  height: 40px;
  text-overflow:ellipsis;
  -o-text-overflow:ellipsis;
  overflow:hidden;
  white-space: nowrap;
}
.el-card__header{
  background-color: #0001;
}
</style>
