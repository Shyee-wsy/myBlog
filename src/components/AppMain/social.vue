<template>
  <div>
      <template>
        <el-tabs>
          <el-tab-pane label="关注">
            <div v-if="following.length">
              <el-row style="min-height: 200px;">
                <el-col v-for="item in following" :key="item.id" :span="6" style="padding:10px;">
                  <el-card shadow="hover" style="font-size:16px;line-height: 20px;">
                    <i class="el-icon-star-off"></i>
                    <a>{{item.name}}</a><br/>
                    <i class="el-icon-message"></i>
                    <a>TA的主页</a><br/>
                    <img>
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
                    <a>TA的主页</a><br/>
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
import axios from 'axios'
  export default {
    data() {
      return {
        follower:[],
        following: [
          {id:0, name: 'sun'}
        ]
      }
    },
    methods:{
      fetchFollower(){
        axios.get('https://api.github.com/users/Shyee-wsy/following').then(resp => {
          let data = resp.data
          let name = data[0].login
          this.follower.push({id: 0, name: name + '', avatar: 'https://avatars3.githubusercontent.com/u/20197018?v=4'})
        })
      }

    },
    mounted(){
      this.fetchFollower();
    }
  }
</script>
