<template>
  <div>
    <el-row>
      <el-col :span="5">
        <el-button type="primary" icon="el-icon-edit" @click="newBlog">新建文章</el-button>
      </el-col>
      <el-col :span="7">
        <el-form style="position:absolute; right: 10%">
          <el-form-item>
            <el-input placeholder="搜索..."></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <div v-if="blogList.length > 0">
      <el-card v-for="(item, index) in blogList" :key="item.id" class="blogCard" style="margin: 15px;">
        <div slot="header">
          <el-row>
            <el-col :span="15">
              <span class="title" style="font-size: 1.3rem;color: #409EFF" @click="goDetail(item.id)">{{item.title}}</span>
              <el-tag size="mini" effect="dark" style="margin-left: 1rem;" type="danger">
                <i class="el-icon-s-flag"></i>&nbsp;
                {{item.tag}}
              </el-tag>
            </el-col>
            <el-col :span="9">
              <div style="position: absolute; right: 0;">
                <el-button  type="primary" icon="el-icon-edit" circle size="mini" v-if="token" @click="editBlog(item.id)"></el-button>
                <!--<el-button type="info" icon="el-icon-share" circle size="mini"></el-button>-->
                <el-button type="danger" icon="el-icon-delete" circle size="mini" @click="deleteBlog(item.id,index)" v-if="token"></el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div>
          <time style="font-size:0.8em; margin-right: 20px; color: darkred;">发布时间：{{item.createdDate}}</time>
          <time style="font-size: 0.8em; color: darkred">更新时间：{{item.updateDate}}</time>
        </div>
      </el-card>
      <div class="block" style="position: absolute; bottom: 1rem; left:50%;">
        <el-pagination
          layout="prev, pager, next"
          :total="(query.totalPage) * (query.page_size)"
          :page-size="query.page_size"
          :page-count="query.page_count"
          :current-page.sync="query.current_page"
          @current-change="refetchBlog"
        ></el-pagination>
      </div>
    </div>
    <div v-else style="margin-top: 5rem;margin-left: 3rem;">暂时还没有发表任何文章~</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import gistApi from '@/api/gist'

  export default {
    data() {
      return{
        query: {
          totalPage: 1,
          page_size: 4,
          page_count: 5,
          current_page: 1
        },
        blogList: [],
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
          this.$router.push('/blog/newBlog')
        }
      },
      fetchAllBlog(){
        gistApi.gistsCollection(this.query).then(resp => {
          let data = resp.data
          let totalPage = this.$util.parseHeader(resp.headers)
          this.query.totalPage = totalPage
          for(let i = 0; i < data.length; i++) {
            this.blogList.push({
              id: data[i].id,
              title: Object.keys(data[i].files).join(''),
              createdDate: data[i]['created_at'],
              updateDate: data[i]['updated_at'],
              tag: data[i].description
            })
          }
        })
      },
      refetchBlog(){
        this.blogList = []
        gistApi.gistsCollection(this.query).then(resp => {
          let data = resp.data
          for(let i = 0; i < data.length; i++) {
            this.blogList.push({
              id: data[i].id,
              title: Object.keys(data[i].files).join(''),
              createdDate: data[i]['created_at'],
              updateDate: data[i]['updated_at'],
              tag: data[i].description
            })
          }
        })
      },
      deleteBlog(id,index) {
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
            console.log(this.blogList)
            this.blogList.splice(index, 1)
            console.log(this.blogList)
            console.log('success')
            this.blogList = []
            this.fetchAllBlog()
          })
        }).catch( () => {
          this.$message({
            message: '已取消删除',
            type: 'info'
          })
        })
      },
      editBlog(id){
        this.$router.push('/blog/edit/' + id)
      },
      goDetail(id){
        this.$router.push('/blog/detail/' + id)
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
.title:hover{
  cursor: pointer;
}
</style>
