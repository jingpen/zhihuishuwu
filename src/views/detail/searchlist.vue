<template>
  <div>
    <div class="nav">
      <div class="logo" @click="ret()"></div>
      <div class="title">与"{{this.$route.query.value}}"有关的书籍</div>
    </div>
    <div class="newwrap" >
      <div class="new" v-for="(item,index) in searchlist" :key="index" @click="setdetail(item)">
        <div class="img">
          <img class="auto-img" :src="imgurl(index)" alt />
        </div>
        <div class="noveltext">
          <h4>{{item.title}}</h4>
          <div>
            <p class="auther">
              <span>{{item.author}}</span>
              <i>|</i>
              <span>{{item.minorCate}}</span>
              <i>|</i>
              <span>{{item.wordCount}}万字</span>
            </p>
            <p class="type">进度:{{item.lastChapter}}</p>
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
      searchlist: {}
    };
  },
  activated() {
    this.init();
  },
  methods: {
    init() {
      this.$http(`/book/fuzzy-search?query=${this.$route.query.value}`).then(
        res => {
          let data = res.data.books;
          this.searchlist = data;
          // console.log(this.searchlist);
        }
      );
    },
    imgurl(index) {
      return unescape(this.searchlist[index].cover).slice(7);
    },
     ret() {
      this.$router.go(-1);
    },
    setdetail(item){
      this.$router.push({path:"/calssification/info/detail",query:{title:item.title,id:item._id}})
    }
  }
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
    flex: 1;
    text-align: center;
  }
  .book {
    width: 0.3rem;
    height: 0.3rem;
    background: url(/img/book.png) no-repeat;
    align-items: center;
  }
}
.newwrap {
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

    p {
      display: block;
    }
    .auther {
      font-size: 0.15rem;
      color: #f02715;
      margin-top: 0.1rem;
    }
    i {
      margin: 0.1rem;
    }
    .type {
      color: #e8a23b;
      margin-top: 0.1rem;
    }
  }
  .auto-img {
    display: block;
    max-width: 1rem;
    max-height: 1rem;
  }
}
</style>