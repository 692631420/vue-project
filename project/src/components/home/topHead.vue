<template>
  <el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="16">
      <div class="grid-content bg-purple-light">
        <h2>电商后台管理系统</h2>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple">
        <a href="#" class="tuichu" @click.prevent="exit">退出</a>
      </div>
    </el-col>
  </el-col>
</template>

<script>
export default {
  mounted() {
    // 页面一打开，判断用户是否登录
    const token = window.localStorage.getItem("token");
    if (!token) {
      this.$router.push("/login");
      this.$message("请先登录");
    }
  },
  methods: {
    // 询问用户是否退出--到首页--清除token
    exit() {
      this.$confirm("您确定要退出吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$router.push("/login");
          window.localStorage.removeItem("token");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  }
};
</script>

<style>
.el-col,
.grid-content {
  height: 100%;
}

.grid-content h2 {
  color: #ffffff;
  font-weight: 400;
  text-align: center;
}

.tuichu {
  color: orange;
  position: absolute;
  right: 30px;
}
</style>
