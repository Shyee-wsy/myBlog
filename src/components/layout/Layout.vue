<template>
  <el-container>
    <el-header style="padding: 5rem; background-color: #159957;background-image: linear-gradient(120deg, #155799, #159957);color: white;">
      <el-row :gutter="15">
        <el-col :span="5">
          <img :src="avatar" alt="头像" style="width: 110px;height: 110px;position:relative;top:-40px;">
        </el-col>
        <el-col :span="19">
          <el-card shadow="hover" :body-style="{padding:'3px'}">
            <el-row :gutter="20">
              <el-col :span="14">
                <el-menu mode="horizontal" @select="handleSelect">
                  <el-submenu index="about">
                    <template slot="title"> 社区 </template>
                    <el-menu-item index="github">Github</el-menu-item>
                    <el-menu-item index="zhihu">知乎</el-menu-item>
                    <el-menu-item index="jianshu">简书</el-menu-item>
                  </el-submenu>
                </el-menu>
              </el-col>
              <el-col :span="10">
                <audio controls="controls" style="padding-top: 3px; outline:none;" loop >
                  <source src="../../assets/music.mp3"></source>
                </audio>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row  :gutter="20">
        <el-col :span="5">
          <sidebar></sidebar>
        </el-col>
        <el-col :span="19">
          <AppMain></AppMain>
        </el-col>
      </el-row>
    </el-main>
    <el-footer style="padding: 1rem 6rem; background-color: #afafb6; color: white;">
      <address>Copyright &copy2019 Shyee-wsy</address>
    </el-footer>
  </el-container>
</template>

<script>
  import sidebar from './components/sidebar'
  import AppMain from './components/AppMain'
  import user from '@/api/user'

  export default {
    components:{
      sidebar,
      AppMain
    },
    data(){
      return {
        value: [],
        avatar: '',
        gitHubUrl: ''
      }
    },
    methods: {
      handleSelect(index) {
        switch (index) {
          case 'github':
            window.open(this.gitHubUrl)
                break
          case 'zhihu':
            window.open('https://www.zhihu.com/people/shyee-69/activities')
                break
        }
      },
      getAvatar() {
        user.getInfo().then(resp =>{
          let data = resp.data
          this.avatar = data['avatar_url']
          this.gitHubUrl = data['html_url']
        })
          .catch(error => console.log('获取头像失败'))
      }
    },
    mounted: function(){
      this.getAvatar();
    }
  }
</script>

<style>
  *{
    margin: 0;
  }
</style>
