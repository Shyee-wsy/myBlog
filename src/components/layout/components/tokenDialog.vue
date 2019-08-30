<template>
  <div>
    <el-dialog title="绑定token" :visible.sync="show" width="500px">
      <el-form :model="tokenForm" ref="tokenForm" label-width="100px">
        <el-form-item label="Github">
          <el-tag>{{githubUsername}}</el-tag>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
      return {
        show: false,
        handleClose:null,
        tokenForm: {
          token: ''
        }
      }
    },
  computed: {
    ...mapGetters([
      'githubUsername'
    ])
  },
  methods: {
    open(handleClose){
      this.handleClose = handleClose
      this.show = true
    },
    onSubmit(){
      this.$refs["tokenForm"].validate((valid) => {
        if (valid) {
          this.$store.dispatch("Authentication", this.tokenForm.token)
          if (typeof this.handleClose == "function") {
            this.handleClose()
          }

        }
      })
      this.show = false
    }
  }
}
</script>

<style scoped>

</style>
