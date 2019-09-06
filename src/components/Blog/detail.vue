<template>
  <div>
    <article>
      <h1 style="font-size: 2rem;">{{blog.title}}</h1>
      <div style="font-size: 0.8rem">
        <el-tag effect="dark" size="mini" style="margin:2rem 0" type="danger"><i class="el-icon-s-flag"></i>&nbsp;{{blog.tag}}</el-tag>
        <time style="margin: 0 2rem; color: darkred;">创建时间：{{blog.createdAt}}</time>
        <time style="color: darkred;">更新时间：{{blog.updatedAt}}</time>
      </div>
      <p style="font-size: 1.2rem; margin-bottom: 2rem;">{{blog.content}}</p>
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
          for(let key in resp.files){
            this.blog.title = key
            this.blog.content = resp.files[key].content
          }
          this.blog.tag = resp.description
          this.blog.createdAt = resp['created_at']
          this.blog.updatedAt = resp['updated_at']
        })
      }
  },
  mounted: function () {
    this.fetchBlog()
  }
}
</script>

