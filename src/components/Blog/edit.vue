<template>
  <div>
    <el-form ref="editForm" :model="form" label-width="auto" :rules="rules">
      <el-form-item label="标题" prop="filename">
        <el-input v-model="form.filename"></el-input>
      </el-form-item>
      <el-form-item label="标签" prop="tags">
        <!--<el-input v-model="form.tag"></el-input>-->
        <el-radio-group v-model="form.tags">
          <el-radio label="JS"></el-radio>
          <el-radio label="html"></el-radio>
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
  export default {
    data() {
      return {
        form: {
          filename: '',
          tag: '',
          tags: [],
          content: ''
        },
        rules: {
          filename: [
            {required: true, message: '请输入文章标题', trigger: 'blur'}
          ],
          tags: [
            {required: true, message: '请选择一个标签', trigger: 'change'}
          ],
          content: [
            {required: true, message: '内容不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if(valid) {
            alert('submit');
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
  textarea{
    min-height: 35em;
  }
</style>
