<template>
  <div>
    <el-button style="margin-bottom: 1rem;" @click="$router.go(-1)" size="mini">返回</el-button>
    <article>
      <h1 style="font-size: 2rem;">{{blog.title}}</h1>
      <div style="font-size: 0.8rem">
        <el-tag effect="dark" size="mini" style="margin:2rem 0" type="danger"><i class="el-icon-s-flag"></i>&nbsp;{{blog.tag}}</el-tag>
        <time style="margin: 0 2rem; color: darkred;">创建时间：{{blog.createdAt}}</time>
        <time style="color: darkred;">更新时间：{{blog.updatedAt}}</time>
      </div>
      <p style="font-size: 1.2rem; margin-bottom: 2rem;">
        <VueShowdown :markdown="blog.content" />
      </p>
    </article>
  </div>
</template>

<script>
import gist from '@/api/gist'
export default {
    data(){
      return {
        blog:{
          id: '',
          title:'',
          tag: '',
          content: '',
          createdAt: '',
          updatedAt: ''
        }
      }
    },
  methods:{
      fetchBlog(){
        this.blog.id = this.$route.params.id
        gist.singleGist(this.blog.id).then( resp => {
          let data = resp.data
          for(let key in data.files){
            this.blog.title = key
            this.blog.content = data.files[key].content
          }
          this.blog.tag = data.description
          this.blog.createdAt = data['created_at']
          this.blog.updatedAt = data['updated_at']
        })
      }
  },
  mounted: function () {
    this.fetchBlog()
  }
}
</script>

