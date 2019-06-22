<template>
  <div class="bg">
    <div class="content">
      <h2>用户登录</h2>
      <el-form label-width="100px" :model="form" label-position="top" :rules="rules" ref="formDom">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <!-- 验证表单需要用到validate  需要跟ref属性一起使用 -->
          <el-button type="primary" style="width:100%" @click="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        // rules要有prop 并且要跟：model 以及v-model的内容保持一致
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 11, message: '长度在 6到 11 个字符', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    //   提交按钮
    submit () {
      this.$refs.formDom.validate(valid => {
        if (valid) {
          //   验证成功后再去请求数据;
          this.$http({
            method: 'post',
            url: 'http://localhost:8888/api/private/v1/login',
            data: this.form
          }).then(result => {
            console.log(result)
            const { data, meta } = result.data
            if (meta.status === 200) {
              this.$message({
                message: '恭喜你，登录成功',
                type: 'success'
              })

              this.$router.push('/')
              // 并且保存token--唯一标识的信息
              window.localStorage.setItem('token', data.token)
            } else {
              this.$message.error(meta.msg)
            }
          })
        }
      })
    }
  }
}
</script>

<style>
.bg {
  height: 100%;
  background-color: rgb(49, 64, 81);
}

.content {
  width: 580px;
  height: 432px;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  padding: 40px;
  box-sizing: border-box;
}
</style>
