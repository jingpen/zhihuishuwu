<template>
    <div>
      <div class="nav">
        <div class="logo" @click="ret()"></div>
        <div class="title">章节列表</div>
        <div class="book"  @click="mybook()"></div>
      </div>
      <dir class="chapterlist">
          <ul>
              <li class="list-meum" v-for="(item,index) in chapterslist" :key="index" @click="novelinfo(item,index)">{{item.title}}</li> 
          </ul>
          <!-- <novelinfo v-show="show" @retEvent="novelinfo()"/> -->
      </dir>
  
    </div>
</template>
<script>
// import novelinfo from 'F:/a/one-project/src/components/novelinfo.vue'
export default {
    data(){
        return{
            chapterslist:{},
            show:false,
            //  note:{},
            //  cur:0
        }
    },
   activated() {
    this.getchapter();
  },
    methods:{
    ret() {
      this.$router.go(-1);
    },
   
    getchapter(){
      this.$http(`/toc/mix?bookId=${this.$route.query.id}`).then(res => {
        let data = res.data.chapters;
        this.chapterslist = data;
        // console.log(this.chapterslist);
        // let noveldata=localStorage.getItem('novel');
        //     noveldata=noveldata?JSON.parse(noveldata):[]; 
        //     noveldata.push(this.chapterslist);
            localStorage.setItem('novel',JSON.stringify(this.chapterslist));
      })
      // this.$http('/chapter/'+ encodeURIComponent(this.chapterslist[this.cur].link)).then(res => {
      //   let data = res.data.chapter.body.split('\n');
      //   this.note = data;
      //   console.log(this.note);
      // })
    },
    novelinfo(item,index){
     this.show = !this.show;
      this.$router.push({path:'/calssification/info/detail/novelinfo',query:{link:item.link,title:item.title,index:index}})
  // localStorage.setItem('novel',this.chapterslist)
    },
    mybook(){
      this.$router.push({path:"/mybook"});
    }
    },
    // components:{
    //   novelinfo
    // }
}
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
.chapterlist{
     margin: 0;
     padding: 0;
     height: calc(100vh - 50px - 55px);
     overflow-y: auto;
     .list-meum{

         padding: 0.1rem;
         border-bottom: 0.01rem solid #ccc;
         overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
     }

}
</style>