<template>
    <div class="nav">
      <div class="logo"></div>
      <div class="title">推荐书屋</div>
      <div class="book" @click="mybook()"></div>
    </div>
</template>
<script>
export default {
  methods:{
      mybook(){
      this.$router.push({path:"/mybook"});
    }
  }
}
</script>
<style lang="scss" scoped>
.nav {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: #3A97FF;
  overflow: hidden;
  .logo {
    width: 0.3rem;
    height: 0.3rem;
    background: url(/img/zhui.png) no-repeat;
  }
  .title{
    color: #fff;
    font-size: 20px;
  }
  .book {
    width: 0.3rem;
    height: 0.3rem;
    background: url(/img/book.png) no-repeat;
    align-items: center;
  }
}
</style>