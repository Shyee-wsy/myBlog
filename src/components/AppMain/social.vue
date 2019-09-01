<template>
  <div>
      <template>
        <el-tabs>
          <el-tab-pane label="关注">
            <div v-if="following.length">
              <el-row style="min-height: 200px;" :gutter="20">
                <el-col v-for="item in following" :key="item.id" :span="6" style="padding:10px;">
                  <el-card shadow="hover" style="font-size:16px;line-height: 20px;">
                    <i class="el-icon-star-off"></i>
                    <a>{{item.name}}</a><br/>
                    <i class="el-icon-message"></i>
                    <a :href="item.url" target="_blank" style="text-decoration: none; color: deepskyblue;">TA的主页</a><br/>
                    <img :src="item.avatar" style="width:100%;height:100%">
                  </el-card>
                </el-col>
              </el-row>
            </div>
            <div v-else>
              <b>暂无关注~</b>
            </div>
          </el-tab-pane>

          <el-tab-pane label="粉丝">
            <div v-if="follower.length">
              <el-row style="min-height: 200px;" :gutter="20">
                <el-col v-for="item in follower" :key="item.id" :span="6" style="padding:10px;">
                  <el-card shadow="hover" style="font-size:16px;line-height: 20px;">
                    <i class="el-icon-star-off"></i>
                    <a>{{item.name}}</a><br/>
                    <i class="el-icon-message"></i>
                    <a :href="item.url" target="_blank" style="text-decoration: none; color: deepskyblue;">TA的主页</a><br/>
                    <img :src="item.avatar" style="width:100%;height: 100%">
                  </el-card>
                </el-col>
              </el-row>
            </div>
            <div v-else>
              <b>暂无粉丝</b>
            </div>
          </el-tab-pane>
        </el-tabs>
      </template>
  </div>
</template>

<script>
import user from '@/api/user'

  export default {
    data() {
      return {
        follower:[],
        following: []
      }
    },
    methods:{
      fetchFollower(){
        user.followers().then(data => {
          for(let i = 0; i < data.length; i++){
            this.follower.push({id: data[i].id, name: data[i].login, avatar: data[i].avatar_url, url: data[i].html_url})
          }
        })
      },
      fetchFollowing(){
        user.following().then(data =>{
          console.log(data)
          for(let i = 0; i < data.length; i++){
            this.following.push({id: data[i].id, name: data[i].login, avatar: data[i].avatar_url, url: data[i].html_url})
          }
        })
      }
    },
    mounted(){
      this.fetchFollower();
      this.fetchFollowing();
    }
  }
</script>
