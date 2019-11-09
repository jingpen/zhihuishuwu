<template>
  <div class="bg">
    <div class="box">
      <p @click="next()">上一章</p>
      <p @click="ret()">返回目录</p>
      <p @click="prev()">下一章</p>
    </div>
    <div class="title">
      <p>{{ this.$route.query.title}}</p>
    </div>
    <div class="text"><p v-for="(item,index) in note" :key="index">{{item}}</p></div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      // cur: 0
      // total: 0,
      note:{}
    };
  },
    activated() {
      this.getnote();
    },
  methods: {
    ret() {
    // this.$emit('retEvent')
     this.$router.go(-1);
    },
    getnote(){
      // console.log(encodeURIComponent(this.$route.query.link))
      let noveldata=JSON.parse(localStorage.getItem('novel'));
      // console.log(noveldata)
         let url ='/chapter/'+ encodeURIComponent(noveldata[this.$route.query.index].link)
      this.$http({
        url,
        method: 'get'
      }).then(res => {
        let data = res.data.chapter.body.split('\n');
        this.note = data;
        // console.log(this.note);
        
      })
    
    },
    next() {
       
      this.$route.query.index--;
      if(this.$route.query.index<0){
        return
      }
      // console.log(this.$route.query.index)

    //  console.log(this.$route.query.index)

      // console.log('a',noveldata);
      // for(let i=0;i<noveldata.length;i++){
          //  console.log(noveldata[i].link)
        
      // }
     let noveldata=JSON.parse(localStorage.getItem('novel'));
      // console.log(this.$route.query.index)
      this.$route.query.title=noveldata[this.$route.query.index].title;
      // console.log(this.$route.query.title)      
      this.getnote();
    },
    prev() {
     let noveldata=JSON.parse(localStorage.getItem('novel'));
     this.$route.query.index++;
      if( this.$route.query.index > noveldata.length-1){
        return
      }
       this.$route.query.title=noveldata[this.$route.query.index].title;
       this.getnote();
      // if(this.cur>this.chapterslist.length){
      //   return
      //  }
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #ddd;
  .title {
    margin: 0.1rem;
    text-align: center;
    p {
      padding: 0.1rem;
      font-size: 0.2rem;
      border-bottom: 0.01rem solid rgb(28, 23, 53);
      color: rgb(28, 23, 53)
    }
  }
  .box {
    margin: 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      padding: 0.1rem;
      color: #615e71;
    }
  }
  .tabbox {
    position: fixed;
    display: flex;
    left: 0;
    right: 0;
    bottom: 0;
    height: 55px;
    margin: 0.1rem;
    border-top: 0.01rem solid rgb(28, 23, 53);
    justify-content: space-between;
    align-items: center;
    p {
      padding: 0.1rem;
      color: #615e71;
    }
  }
  .text{
    padding: 0.2rem;
    height: calc(100vh - 36px - 41px);
    overflow-y: auto;
    p{
      font-size: 0.2rem;
      color: rgb(28, 23, 53)
    }
  }
}
</style>