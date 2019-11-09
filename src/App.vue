<template>
  <div id="app" class="app">
       
   <div class="box">
      
         <router-link to="/" tag="div" exact class="tab-item">首页</router-link>
       
        <router-link to="/about" tag="div" class="tab-item" >推荐</router-link>
        <router-link to="/classification" tag="div" class="tab-item" >分类</router-link>
        <router-link to="/Ranking" tag="div" class="tab-item">排行榜</router-link>
   </div>
   <keep-alive>
     <router-view></router-view>
    </keep-alive>
  </div>
</template>


<script>



export default {
  data(){
    return{
      pressmonth:{}
    }
  },
  methods: {
      // getbookdata() {
      //   this.$http("/ranking/564ef4f985ed965d0280c9c2").then(res => {
      //     let data = res.data;
      //     this.pressmonth = data;
      //     console.log(this.pressmonth);
      //   });
      // },
     
  },
  mounted() {
    // this.getbookdata();
  },
   components:{
  }
  
 
    
};
</script>

<style lang="scss" scoped>
 
.app{
  background: #f2f2f2;
}
.box{
  position: fixed;
  display: flex;
  left: 0;
  right: 0;
  bottom: 0;
  height: 55px;
  border-top:0.01rem solid #ccc
}
 .box .tab-item {
  text-decoration:none;
  outline: none;
  flex: 1;
  line-height: 55px;
  text-align: center;
  cursor: pointer;
  border-right:0.01rem solid #ccc;
  &:last-child{
    border: 0;
  }
}
// .box .router-link-active {
//   background:#3A97FF;
//   color: #fff;
//  }
//  .middlebox{
  
//    height:calc(100vh - #{$taberheight} - #{$listheigth});
//    overflow-y: auto;
//  }


</style>
