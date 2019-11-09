<template>
    <div>
       <div class="contntbox">
        <div class="left-content">
          <ul>
            <li class="booklist" v-for="(val,index) in  ranking.male" :key="index" :class="{active: index === currentIndex}" @click="selected(index)">
             <div class="list-name" >{{val.shortTitle}}</div>
            </li>
          </ul>
        </div>
        <div class="right-content">
           
            <div class="new" v-for="(item,index) in maleranking" :key="index" @click="setdetail(item)">
            <div class="img">
                <img class="auto-img" :src="imgurl(index)" alt="">
            </div>
            <div class="noveltext">
                <h4>{{item.title}}</h4>
                <p class="text">{{item.shortIntro}}</p>
                <div>
                    <p class="auther">{{item.author}}</p>
                    <p class="type">{{item.majorCate}}</p>
                </div>
            </div>
        
    </div>
        </div>
      </div>
    </div>
</template>
<script>

export default {
    props:['ranking'],
    data(){
        return{
            currentIndex:0,
            maleranking:{},
        }
    },
    methods:{
       selected(index) {
          this.currentIndex = index
          this.$http(`/ranking/${this.ranking.male[index]._id}`).then(res=>{
               let data=res.data.ranking.books;
               this.maleranking=data;
           })
       },
        imgurl(index){
           return unescape(this. maleranking[index].cover).slice(7);

        }, setdetail(item){
           this.$router.push({path:"/calssification/info/detail",query:{title:item.title,id:item._id}})
    } 
      
    }
}
</script>
<style lang="scss" scoped>
 .contntbox{
   display: flex;
   .left-content{
     flex: 0 0 1rem;
     text-align: center;
   }
   .list-name{
     padding: 0.1rem;
     border-right: 0.01rem solid #3A97FF;
     color: #8a8a8f
   } 
   .left-content{
       height: calc(562px - 33px);
       overflow-y: auto;
   }
 }
 .active{
     border-left: 0.05rem solid #3A97FF
   }
   .right-content {
    height: calc(562px - 33px);
       overflow-y: auto;
  .new {
    display: flex;
    margin: 0.1rem;
  }
  .img {
    width: 25%;
  }
  .noveltext {
    width:75%;
    h4{
      font-size: .2rem;
      color:rgb(71, 71, 71);
    }
    .text {
      line-height: 0.2rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #aaa;
    }
    p{
        display: inline-block;
    }
    .auther{
        font-size: 0.14rem;
        padding: 0.02rem;
        background: #F02715;
        color: #fff;
        text-align: center;
        margin-top: 0.05rem;
        border-radius: .1rem
    }
    .type{
        padding: 0.02rem;
        font-size: 0.14rem;
        background: #E8A23B;
        color: #fff;
        float: right;
        text-align: center;
        margin-top: 0.05rem;
        border-radius: .1rem;
    }
  }
  .auto-img {
    display: block;
    max-width: 0.5rem;
    max-height: 1rem;
  }
}
</style>