<template>
  <el-container>
    <el-header class="page-header">
      <el-row :gutter="15">
        <el-col :span="5">
          <img src="https://avatars2.githubusercontent.com/u/39408629?v=4" alt="头像" style="width: 110px;height: 110px;position:relative;top:-40px;">
        </el-col>
        <el-col :span="19">
          <el-card shadow="hover" :body-style="{padding:'3px'}">
            <el-row :gutter="20">
              <el-col :span="9">
                <el-menu mode="horizontal" @select="handleSelect">
                  <el-submenu index="about">
                    <template slot="title"> 社区 </template>
                    <el-menu-item index="github">Github</el-menu-item>
                    <el-menu-item index="zhihu">知乎</el-menu-item>
                    <el-menu-item index="jianshu">简书</el-menu-item>
                  </el-submenu>
                </el-menu>
              </el-col>
              <el-col :span="7">
                <el-form style="position:relative;top: 10px;">
                  <el-form-item>
                    <el-input placeholder="search..."></el-input>
                  </el-form-item>
                </el-form>
              </el-col>
              <el-col :span="8">
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
        <el-col :span="15">
          <AppMain></AppMain>
        </el-col>
      </el-row>
    </el-main>
    <el-footer ></el-footer>
  </el-container>
</template>

<script>
  import sidebar from './components/sidebar'
  import AppMain from './components/AppMain'
  export default {
    components:{
      sidebar,
      AppMain
    },
    data(){
      return {
        githubUsername: 'Shyee-wsy',
        value: []
      }
    },
    methods: {
      handleSelect(index) {
        switch (index) {
          case 'github':
            window.open('https://github.com/' + this.githubUsername)
                break
          case 'zhihu':
            window.open('https://www.zhihu.com/people/shyee-69/activities')
                break
        }
      },
      filterMethod(){},
      data(){}
    }
  }
</script>

<style>
  *{
    margin: 0;
  }
  .page-header{
    text-align: left;
    padding: 5rem 6rem;
    background-color: #159957;
    background-image: linear-gradient(120deg, #155799, #159957);
    color: white;
  }

</style>
