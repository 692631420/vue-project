<template>
  <el-container>
    <!-- 顶部导航内容 -->
    <el-header>
      <topHead></topHead>
    </el-header>
    <el-container>
      <!-- 侧边栏内容 -->
      <sidebar></sidebar>
      <!-- main内容 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
// 导入组件
import topHead from '../home/topHead'
import sidebar from '../home/sidebar'

export default {
  components: {
    topHead: topHead,
    sidebar: sidebar
  }
}
</script>

<style>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;

  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
