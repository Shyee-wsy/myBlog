<template>
  <div>
    <el-card shadow="never">
      <div class="about">
        <img :src="avatar" alt="头像">
        <div>
          <p><b>基本信息</b></p>
          <ul>
            <li>姓名: XXX</li>
            <li>籍贯: 成都</li>
            <li>职业: 攻城狮</li>
            <li>出生日期: 2019年10月10日</li>
            <li>兴趣: 吃饭睡觉打豆豆</li>
          </ul>
          <p><b>联系作者</b></p>
          <ul>
            <li>Email: XXX@email.com</li>
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
      avatar: ''
    }
  },
  methods: {
    getAvatar(){
      user.getInfo().then( resp => {
        this.avatar = resp['avatar_url']
      })
        .catch(() => console.log('获取头像失败'))
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
