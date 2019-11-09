<template>
  <div>
    <div class="nav">
      <div class="logo" @click="ret()"></div>
      <div class="title">{{this.$route.query.major}}</div>
      <div class="book" @click="mybook()"></div>
    </div>
    <div class="pressnew">
      <div class="new" v-for="(val,index) in hotdata" :key="index" @click="setdetail(val)">
        <div class="img">
          <img class="auto-img" :src="imgurl(index)" alt />
        </div>
        <div class="noveltext">
          <h4>{{val.title}}</h4>
          <p class="text">{{val.shortIntro}}</p>
          <div>
            <p class="auther">{{val.author}}</p>
            <p class="lately">追随{{val.latelyFollower}}</p>
            <p class="type">{{val.majorCate}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hotdata: {}
    };
  },
  activated() {
    // if(this.$route.query.isFresh){
    this.init();
    // }else{
    //    this.$route.meta.isFresh = false;
    // }
  },
  methods: {
    init() {
      this.$http(
        `/book/by-categories?gender=${this.$route.query.gender}&type=hot&major=${this.$route.query.major}&minor=&start=0&limit=50`
      ).then(res => {
        let data = res.data.books;
        this.hotdata = data;
        // console.log(this.hotdata);
      });
    },
    // gethotdata(){

    // },
    imgurl(index) {
      return unescape(this.hotdata[index].cover).slice(7);
    },
    ret() {
      this.$router.go(-1);
    },
    setdetail(val) {
      this.$router.push({
        path: "/calssification/info/detail",
        query: { title: val.title, id: val._id }
      });
    },
    mybook() {
      this.$router.push({ path: "/mybook" });
    }
  }
  //  beforeRouteEnter(to, from, next) {
  //   if (from.name == 'Index') {
  //     to.meta.isFresh = true;
  //   }
  //   next();
  // }
  //  mounted(){
  //      this.gethotdata();
  //  }
};
</script>
<style lang="scss" scoped>
.nav {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: #3a97ff;
  overflow: hidden;
  .logo {
    width: 0.3rem;
    height: 0.3rem;
    background: url(/img/return.png) no-repeat;
  }
  .title {
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
.pressnew {
  height: calc(100vh - 50px - 55px);
  overflow-y: auto;
  .new {
    display: flex;
    margin: 0.1rem;
  }
  .img {
    width: 25%;
  }
  .noveltext {
    width: 75%;
    h4 {
      font-size: 0.2rem;
      color: rgb(71, 71, 71);
    }
    .text {
      line-height: 0.2rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      word-break: break-all;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #aaa;
    }
    p {
      display: inline-block;
    }
    .auther {
      padding: 0.05rem;
      background: #f02715;
      color: #fff;
      text-align: center;
      margin-top: 0.05rem;
      border-radius: 0.1rem;
    }
    .type {
      padding: 0.05rem;
      background: #e8a23b;
      color: #fff;
      float: right;
      text-align: center;
      margin-top: 0.05rem;
      border-radius: 0.1rem;
    }
    .lately {
      padding: 0.05rem;
      background: rgb(112, 250, 0);
      color: #fff;
      text-align: center;
      margin-top: 0.05rem;
      border-radius: 0.1rem;
    }
  }
  .auto-img {
    display: block;
    max-width: 1rem;
    max-height: 1rem;
  }
}
</style>