<template>
  <div>
   <Tittle />
    <div class="search">
      <div class="search-input">
        <input class="text" type="text" placeholder="搜索书名，作者名" v-model="value"/>
        <div class="icon">
          <img src="/img/search.png" alt @click="search">
        </div>
      </div>
      <div class="rotation" :style="{'height':Height+'px'}">
        <div class="imgbox" ref="div_0" :style="{'z-index':cur==0?3:1}">
            <img class="auto-img" src="http://plf-bucket.zhuishushenqi.com/management/images/20191016/bb2cc6ae6436405fa982c3b813870316.jpg"/>
        </div>
        <div class="imgbox" ref="div_1" :style="{'z-index':cur==1?3:1}">
          <img class="auto-img" src="http://plf-bucket.zhuishushenqi.com/management/images/20191016/028722b4ac2144e48d427db909b35875.jpg"/>
        </div>
        <div class="imgbox" ref="div_2" :style="{'z-index':cur==2?3:1}">
          <img class="auto-img" src="http://plf-bucket.zhuishushenqi.com/management/images/20191016/6a01d6a91a2843c79eac6645de03ee32.jpg"/>
        </div>
      </div> 
      <pressnew :pressmonth="pressmonth"/>
    </div>
   
  </div>
</template>
<script>
import pressnew from '../components/pressnew.vue';
import Tittle from '../components/title/Tittle.vue'
export default {
  data() {
    return {
      Height: 0,
      timer: null,
      cur: 0,
      pressmonth:{},
      searchlist:{},
      value:''
    };
  },
  methods: {
      getbookdata() {
        this.$http("/book/by-categories?gender=press&type=new&major=出版小说&minor=&start=0&limit=10").then(res => {
          let data = res.data.books;
          this.pressmonth = data;
          // console.log(this.pressmonth);
        });
      },
      move() {
      this.timer = setInterval(() => {
        this.cur++;
        if (this.cur > 2) {
          this.cur = 0;
        }
      }, 3000);
    },
    search(){
       if (!this.value) {
        return;
      }
        this.$router.push({path:'/calssification/info/detail/searchlist',query:{value:this.value}})
       this.value = ""
    }
  },
  mounted() {
    this.Height = this.$refs.div_0.offsetHeight;
    this.move();
    this.getbookdata();
  },
  components:{
    pressnew,
    Tittle
  }
};
</script>
<style lang="scss" scoped>
 $taberheight:50px;
 $listheigth:55px;
.search{
  width: 100%;
  padding-top: 0.1rem;
  height:calc(100vh - #{$taberheight} - #{$listheigth});
  overflow-y: auto;
  .search-input{
    background: #ccc;
    width: 96%;
    height: 35px;
    margin: 0 auto;
    border-radius: 0.1rem;
    position: relative;
    .text{
      outline: none;
      border: none;
      width: 90%;
      height: 30px;
      background: #ccc;
      position: absolute;
      left: 0.3rem;
      top: 0;
    }
    .icon {
      position: absolute;
      left: 90%;
      top: 0;
    }
  }
}
.rotation{
  width: 100%;
  position: relative;
  margin-top: 0.1rem;
  .imgbox{
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  }
.auto-img{
  display: block;
  width: 100%;
}
}


</style>
