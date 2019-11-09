<template>
  <div class="about">
    <rankingtitle/>
    <div class="box">
      <div class="aboutbox">
        <router-link to="malerank" tag="div" excat class="tabs-item">男生</router-link>  
        <router-link to="femalerank" tag="div" class="tabs-item">女生</router-link>
        <router-link to="epubrank" tag="div" class="tabs-item" >出版</router-link> 
      </div>
      <keep-alive>
         <router-view :ranking="ranking"></router-view>
      </keep-alive>
    </div> 
  </div>
</template>
<script>
import rankingtitle from '../components/title/rankingtitle.vue'
export default {
  data(){
    return{
       ranking:{},
       currentIndex: 0,
    }
   
  },
  created(){
    this.getranking();

  },
  methods:{
    getranking(){
      this.$http("/ranking/gender").then(res=>{
        let data=res.data;
        this.ranking=data;
        // console.log(this.ranking)
     })
    }
  },
   components:{
    rankingtitle
  }
}
</script>
<style lang="scss" scoped>
.box{
  height: calc(100vh - 50px - 55px);
  overflow-y: auto;
}
.aboutbox{
    display: flex;
  .tabs-item{
    text-align: center;
    color: #aaa;
    cursor: pointer;
    line-height: 0.32rem;
    border-right:0.01rem solid #ccc;
    border-bottom: 0.01rem solid #ccc;
    background: #fff; 
    flex: 1;
  &:last-child{
    border: 0;
  }
  }
}
.aboutbox .router-link-active {
  color: rgb(252, 69, 24);
 }

</style>