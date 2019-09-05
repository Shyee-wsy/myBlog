<template>
  <div>
    <el-button type="primary" icon="el-icon-edit" @click="newBlog">新建文章</el-button>
    <el-card v-for="item in blogList" :key="item.id" class="blogCard" style="margin: 20px;">
      <div slot="header">
        <el-row>
          <el-col :span="15">
            <span style="font-size: 1.3rem;color: #409EFF">{{item.title}}</span>
            <el-tag size="mini" effect="plain" style="margin-left: 1rem;">
              {{item.tag}}
            </el-tag>
          </el-col>
          <el-col :span="9">
            <div style="position: absolute; right: 0;">
              <el-button  type="primary" icon="el-icon-edit" circle size="mini" v-if="token"></el-button>
              <el-button type="info" icon="el-icon-share" circle size="mini"></el-button>
              <el-button type="danger" icon="el-icon-delete" circle size="mini" @click="deleteBlog(item.id)" v-if="token"></el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <div>
        <time style="font-size:0.8em; margin-right: 20px; color: darkred;">发布时间：{{item.createdDate}}</time>
        <time style="font-size: 0.8em; color: darkred">更新时间：{{item.updateDate}}</time>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import gistApi from '@/api/gist'

  export default {
    data() {
      return{
        blogList: []
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
      fetchAllBlog(){
        gistApi.gistsCollection().then(resp => {
          for(let i = 0; i < resp.length; i++) {
            this.blogList.push({
              id: resp[i].id,
              title: Object.keys(resp[i].files).join(''),
              createdDAte: resp[i]['created_at'],
              updateDate: resp[i]['updated_at'],
              tag: resp[i].description
            })
          }
        })
      },
      deleteBlog(id) {
        this.$confirm('此操作将永久删除该文章，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then( () => {
          gistApi.deleteGist(id).then( () => {
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            // this.fetchAllBlog()
          })
        }).catch( () => {
          this.$message({
            message: '已取消删除',
            type: 'info'
          })
        })
      }
    },
    mounted: function () {
      this.fetchAllBlog()
    }
  }
</script>

<style>
/*article{*/
  /*height: 40px;*/
  /*text-overflow:ellipsis;*/
  /*-o-text-overflow:ellipsis;*/
  /*overflow:hidden;*/
  /*white-space: nowrap;*/
/*}*/
/*.el-card__header{*/
  /*background-color: #0001;*/
/*}*/
</style>
