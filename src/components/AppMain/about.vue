<template>
  <div v-loading="loading" element-loading-text="正在加载中..." element-loading-spinner="el-icon-loading">
    <el-card shadow="never">
      <div class="about">
        <img :src="avatar" alt="头像">
        <div>
          <p><b>基本信息</b></p>
          <ul>
            <li>姓名: wsy</li>
            <li>出生日期: 1995-7-14</li>
            <li>籍贯: 云南</li>
            <li>现居地: 成都</li>
            <li>职业: web前端工程师</li>
            <li>出生日期: 2019年10月10日</li>
            <li>兴趣: 运动 音乐</li>
          </ul>
          <p><b>联系作者</b></p>
          <ul>
            <li>Email: shyee-wsy@outlook.com</li>
            <li>Github: https://github.com/Shyee-wsy</li>
          </ul>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import user from '@/api/user'
export default {
  data(){
    return {
      avatar: '',
      loading: false
    }
  },
  methods: {
    getAvatar(){
      this.loading = true
      user.getInfo().then( resp => {
        let data = resp.data
        this.avatar = data['avatar_url']
      }).then(() => this.loading = false)
        .catch(error => console.log('获取头像失败' + error))
    }
  },
  mounted: function(){
    this.getAvatar()
  }
}
</script>

<style>
  img{
    float: left;
    width: 150px;
    height: 150px;
    margin-right: 80px;
  }
  .about{
    display: flex;
    padding-left: 100px;
    font-size: 1.2rem;
    line-height: 1.5em;
  }
p{
  margin-top: 20px;
}
</style>
