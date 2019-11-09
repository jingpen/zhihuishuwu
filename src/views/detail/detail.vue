<template>
  <div>
    <div class="nav">
      <div class="logo" @click="ret()"></div>
      <div class="title">{{this.$route.query.title}}</div>
      <div class="book " @click="mybook()"></div>
    </div>
    <div class="newwrap">
      <div class="new">
        <div class="img">
          <img class="auto-img" :src="imgurl()" alt />
        </div>
        <div class="noveltext">
          <h4>{{noveldetail.title}}</h4>
          <div>
            <p class="auther">
              <span>{{noveldetail.author}}</span>
              <i>|</i>
              <span>{{noveldetail.minorCate}}</span>
              <i>|</i>
              <span>{{word}}万字</span>
            </p>
            <p class="type">进度:{{noveldetail.lastChapter}}</p>
          </div>
        </div>
      </div>
      <div class="tag">
          <p class="tagicon">标签</p>
          <span class="icon" v-for="(item,index) in noveldetail.tags" :key="index" :style="{backgroundColor:'rgb('+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+')'}">{{item}}</span>
        </div>
      <div class="book">
        <div class="join"  :class="{active:isJoin}" @click="join()">加入书架</div>
        <div class="read" @click="setchapters()">开始阅读</div>
      </div>
      <div class="toplist">
        <p class="top">
          <span class="topmune">追人气</span>
          <span class="topdata">{{noveldetail.latelyFollower}}</span>
        </p>
        <p class="top">
          <span class="topmune">读者保存率</span>
          <span class="topdata">{{noveldetail.retentionRatio}}%</span>
        </p>
        <p class="top">
          <span class="topmune">日更字数/天</span>
          <span class="topdata">{{noveldetail.serializeWordCount}}</span>
        </p>
      </div>
      <div class="textbox">
        <p class="text">{{noveldetail.longIntro}}</p>
      </div>
      <div class="textbox1">
        <p class="text">{{noveldetail.copyrightDesc}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      noveldetail: {},
      chapters:{},
      cur:0,
      isJoin:false,
      
    }
  },
  // provide(){
  //   return{
  //     reload:this.reload
  //   }
        
  // },
  activated() {
    this.init();  
    this.getchapterlist();
    let data=localStorage.getItem('detail');
    let mid = this.$route.query.id
    if(data){
      data=JSON.parse(data);
      for(let i=0;i<data.length;i++){
      //  console.log(data[i]._id,mid)
        if(data[i]._id === mid){
           
          this.isJoin=true;
          return
        }
      }
      this.isJoin=false;
    }
        // console.log(this.isJoin)
    
  },
  computed: {
    word() {
      return unescape(this.noveldetail.wordCount).slice(0, 3);
    },
  },
  methods: {
    init() {
      this.$http(`/book/${this.$route.query.id}`).then(res => {
        let data = res.data;
        this.noveldetail = data;
        // console.log(this.noveldetail);
      });
    },
     getchapterlist(){
        this.$http(`/search/suggest?key=${this.$route.query.title}`).then(res => {
          for(var i=0;i<res.data.keywords.length;i++){
            if(this.noveldetail.title==res.data.keywords[i].text && this.noveldetail.author==res.data.keywords[i].author){
             let data = res.data.keywords[i];
             this.chapters = data; 
             }
         }
        //  console.log(this.chapters)
      });
    },
    imgurl() {
      return unescape(this.noveldetail.cover).slice(7);
    },
    ret() {
      this.$router.go(-1);
    },
    setchapters(){
      this.$router.push({path:'/calssification/info/detail/chapters',query:{id:this.chapters.id}})
    },
    join(){
      this.isJoin =!this.isJoin
       let data=localStorage.getItem('detail');
      
      data=data?JSON.parse(data):[]; 
      if(this.isJoin){
      data.push(this.noveldetail);
      localStorage.setItem('detail',JSON.stringify(data));
      }else{
        for(let i=0;i<data.length;i++){
            if(data[i]._id==this.$route.query.id){
                  data.splice(i,1)
                  localStorage.setItem('detail',JSON.stringify(data))
            }
        }
      }
    },
    mybook(){
      this.$router.push({path:"/mybook",query:{id:this.noveldetail._id}})

    },
    // reload(){
    //   this.mybook=false
    //   this.$nextTick(function(){
    //     this.mybook =true
    //   })
    // }
  },

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
.book {
  display: flex;
  padding: 0.3rem;
  padding-left: 0.2rem;
  padding-bottom: 0.2rem;
  border-bottom: 0.01rem solid #ccc;
  .join {
    font-size: 0.2rem;
    flex: 0 0 50%;
    text-align: center;
    border: 0.01rem solid #3a97ff;
    margin-right: 0.1rem;
    padding: 0.1rem;
    color: #3a97ff;
  }
  .read {
    font-size: 0.2rem;
    flex: 0 0 50%;
    text-align: center;
    border: 0.01rem solid #3a97ff;
    padding: 0.1rem;
    color: #fff;
    background: #3a97ff;
  }
}
.toplist {
  padding: 0.25rem;
  overflow: hidden;
  border-bottom: 0.01rem solid #ccc;
  .top {
    width: 33.33%;
    float: left;
    .topmune {
      color: #e8a23b;
      font-size: 0.12rem;
    }
    .topdata {
      margin-top: 0.1rem;
      color: #f02715;
    }
  }
  span {
    text-align: center;
    display: block;
  }
}
.textbox {
  padding: 0.15rem;
   border-bottom: 0.01rem solid #ccc;
  .text {
    line-height: 0.2rem;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #aaa;
  }
 
} 
.textbox1 {
    padding: 0.15rem;
    border-bottom: 0;
    .text {
    line-height: 0.2rem;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #aaa;
  }
}
.tag{
   margin: 0.1rem;
   .tagicon{
     color: #3a97ff
   }
   span{
     display: inline-block;
     color: #fff;
     margin: 0.05rem;
     padding: 0.05rem;
     
   }
}
.active{
  background: #f02715;
  color: #fff !important;
}
</style>