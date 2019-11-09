<template>
  <div>
    <div class="girlbox">
      <div class="girl">女生</div>
      <ul>
        <li class="info" v-for="(item,index) in femaledata" :key="index"  @click="setinfo(item)">
          <div class="imgbox">
            <img class="auto-img" :src="imgurl(index)" />
          </div>
          <div class="text">
            <span>{{item.name}}</span>
            <span>{{item.bookCount}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["femaledata"],
  methods: {
    imgurl(index) {
      return unescape(this.femaledata[index].bookCover[0]).slice(7);
    },
    setinfo(item){
     
      this.$router.push({path:"/calssification/info",query:{gender:'female',type:'hot',major:item.name,start:0,limit:50}})
      //  console.log(item)
    }
  }
}
</script>

<style lang="scss" scoped>
.girlbox {
  width: 100%;
  overflow: hidden;
  ul {
    overflow: hidden;
  }
  .girl {
    width: 100%;
    font-size: 0.2rem;
    padding: 0.1rem;
    color: #3a97ff;
    font-weight: 700;
  }
  .info {
    display: flex;
    float: left;
    font-size: 0.2rem;
    width: 50%;
    border: 1px solid #ddd;
    .text {
      width: 45%;
      margin: 0 0.1rem 0.1rem 0.2rem;
    }
    .imgbox {
      width: 25%;
      margin-top: 0.05rem;
    }
  }
  span {
    display: block;
    margin-top: 0.1rem;
    color: #7c7c7c;
  }

  .auto-img {
    width: 100%;
    height: 0.6rem;
    display: block;
    background-size: cover;
  }
}
</style>