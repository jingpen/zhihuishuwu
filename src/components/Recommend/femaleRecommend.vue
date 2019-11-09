<template>
  <div>
    <div class="title">女生推荐</div>
    <div class="pressnew" v-for="(item,index) in femaledata" :key="index" @click="setdetail(item)">
      <div class="new">
        <div class="img">
          <img class="auto-img" :src="imgurl(index)"/>
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
</template>
<script>
export default {
    props:["femaledata"],
    methods:{
       imgurl(index) {
      return unescape(this.femaledata[index].cover).slice(7);
    } ,
    setdetail(item){
           this.$router.push({path:"/calssification/info/detail",query:{title:item.title,id:item._id}})
    } 
    }
}
</script>
<style lang="scss" scoped>
.title {
  padding: 0.1rem;
  font-size: 0.2rem;
  font-weight: 700;
  border-left: 0.05rem solid #3a97ff;
  margin: 0.1rem;
}
.pressnew {
  .new {
    display: flex;
    margin: 0.1rem;
  }
  .img {
    width: 25%;
  }
  .noveltext {
    width: 75%;
    h4{
      font-size: .2rem;
      color:rgb(71, 71, 71);
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
    p{
        display: inline-block;
    }
    .auther{
        padding: 0.05rem;
        background: #F02715;
        color: #fff;
        text-align: center;
        margin-top: 0.05rem;
        border-radius: .1rem
    }
    .type{
        padding: 0.05rem;
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
    max-width: 1rem;
    max-height: 1rem;
  }
}
</style>