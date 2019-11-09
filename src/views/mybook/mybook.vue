<template>
    <div>
       <div class="nav">
          <div class="logo" @click="ret()"></div>
          <div class="title">书架</div>
          <div class="book"></div>
       </div>
       <div class="my">
          <div class="bookmenu"> 我的书架</div>
          <div class="new" v-for="(item,index) in data" :key="index">
             <div class="img">
               <img class="auto-img" :src="imgurl(item.cover)" alt />
             </div>
             <div class="noveltext">
               <h4>{{item.title}}</h4>
               <div>
                 <p class="auther">
                  <span>{{item.majorCate}}</span>
                  <i></i>
                  <span>{{item.minorCate}}</span>
                  <!-- <i>|</i> -->
                 </p>
                 <p class="type">{{item.lastChapter}}</p>
               </div>
             </div> 
             <div class="delete" @click="del()">删除</div>
          </div>
         
       </div>
    </div> 
</template>
<script>
export default {
  // inject:['reload'],
  data(){
    return{
      data:{}
    }
  },
   activated() {
    this.getdata()
  },
    methods:{
         ret() {
      this.$router.go(-1);
    },
    getdata(){
     this.data= JSON.parse(localStorage.getItem('detail'))
    //  console.log(this.data);
    },
     imgurl(index) {

      return unescape(index).slice(7);
    },
    del(){
       let data=localStorage.getItem('detail');
        data=data?JSON.parse(data):[]; 
        // console.log(data)
         for(let i=0;i<data.length;i++){
          
            if(data[i]._id==this.$route.query.id){
              //  console.log(data[i]._id,this.$route.query.id)
                  data.splice(i,1)
                  localStorage.setItem('detail',JSON.stringify(data))
                  setTimeout(()=>{
                    this.$router.go(-1)
                  },1)
                  setTimeout(()=>{
                    this.$router.go(1)
                  },100)
                  // this.$router.go(0);
                  // this.reload();
                  // this.$nextTick(function(){
                  //   this.data
                  // })
                    // this.$forceUpdate()
                  // this.$router.replace({
                  //   path:'/mybookwhite',
                  //   name:'mybookwhite'
                  // })
            }
        }
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
.my{
    height: calc(100vh - 55px - 50px);
    overflow-y: auto;
    .bookmenu{
      color: #3a97ff;
      font-size: 0.2rem;
      padding: 20px;
      text-align: center;
      border-bottom: 0.01rem solid #aaa;
      ;
    }
    .new {
    display: flex;
    margin: 0.1rem;
    position: relative
  }
  .img {
    width: 25%;
  }
  .noveltext {
    width: 65%;
    
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
  .delete{
    text-align: center;
    padding: 0.01rem;
    height: 0.3rem;
    line-height: 0.3rem;
    color: #fff;
    background:#f02715;
    border-radius: 0.05rem;
    position: absolute;
    top: 0.3rem;
    right: 0;
  }
  .auto-img {
    display: block;
    max-width: 1rem;
    max-height: 1rem;
  }
  }
</style>