<template>
  <div>
    <!--<el-card>-->

    <!--</el-card>-->
    <el-card v-for="item in blogList" :key="item.id" class="blogCard" style="margin: 20px;">
      <div slot="header">
        <span>{{item.title}}</span>
      </div>
      <div>
        <time style="font-size:0.8em; margin-right: 20px;">发布时间：{{item.createdDate}}</time>
        <time style="font-size: 0.8em;">更新时间：{{item.updateDate}}</time>
        <article style="margin-top: 20px">{{item.content}} </article>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        blogList: [
          {id: 0, title: '第一篇文章', createdDate: '2018-2', updateDate: '2018-9', content: '第一篇文章的内容'},
          {id: 1, title: '第二篇文章', createdDate: '2019-2', updateDate: '2019-4', content: '第二篇文章的内容'},
          {id: 2, title: '第三篇文章', createdDate: '2018-3', updateDate: '2018-3', content: '第三篇文章的内容比较长，有多长呢，很长很长很长很长很长很长超级长，不知道有多长呢,很长很长很长很长很长很长超级长很长很长很长很长很长很长超级长很长很长很长很长很长很长超级长很长很长很长很长很长很长超级长很长很长很长很长很长很长超级长很长很长很长很长很长很长超级长很长很长很长很长很长很长超级长很长很长'}
        ]
      }
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
</style>
