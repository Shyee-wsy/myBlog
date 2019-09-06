<template>
  <div>
    <el-form ref="editForm" :model="form" label-width="auto" :rules="rules">
      <el-form-item label="标题" prop="filename">
        <el-input v-model="form.filename"></el-input>
      </el-form-item>
      <el-form-item label="标签" prop="tag">
        <el-radio-group v-model="form.tag">
          <el-radio label="JS"></el-radio>
          <el-radio label="html"></el-radio>
          <el-radio label="python"></el-radio>
          <el-radio label="css"></el-radio>
          <el-radio label="日记"></el-radio>
          <el-radio label="其他"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <el-input v-model="form.content" type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('editForm')">发表文章</el-button>
        <el-button @click="resetForm('editForm')">重置</el-button>
        <el-button @click="$router.go(-1)">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import gistApi from '@/api/gist'
export default {
    data(){
      return {
        form: {
          filename: '',
          tag: '',
          content: ''
        },
        rules: {
          filename: [
            {required: true, message: '请输入文章标题', trigger: 'blur'}
          ],
          tag: [
            {required: true, message: '请选择一个标签', trigger: 'change'}
          ],
          content: [
            {required: true, message: '内容不能为空', trigger: 'blur'}
          ]
        }
      }
    },
  methods: {
    fetchBlog(){
      gistApi.singleGist(this.$route.params.id).then(resp => {
        for(let key in resp.files){
          this.form.filename = key
          this.form.content = resp.files[key].content
        }
        this.form.tag = resp.description
      }).catch(error => console.log(error))
    },
    submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if(valid){
            gistApi.editGist(this.$route.params.id, this.form).then(() => {
              this.$message({
                message: '发布成功',
                type: 'success'
              })
            }).then(this.$router.push('/blog/detail/' + this.$route.params.id))
          } else {
            console.log('submit error')
            return false
          }
        })
    },
    resetForm(formName){
      this.$refs[formName].resetFields()
    }
  },
  mounted: function () {
    this.fetchBlog()
  }
}
</script>

<style>
textarea{
  min-height: 20em;
}
</style>
