<template>
  <div class="about">
    <tujiantitle/>
    <div class="aboutbox">
     <maleRecommend :maledata="maledata"/>
    <femaleRecommend :femaledata="femaledata"/>
    <epubRecommend :epubdata="epubdata"/>
    </div>
  </div>
</template>

<script>
import maleRecommend from '../components/Recommend/maleRecommend.vue'
import femaleRecommend from '../components/Recommend/femaleRecommend.vue'
import epubRecommend from '../components/Recommend/epubRecommend.vue'
import tujiantitle from '../components/title/tuijiantitle.vue'
export default{
  data(){
    return{
      maledata:[],
      femaledata:[],
      epubdata:[],
    }
  },
 activated(){
    this.$http(" /ranking/gender").then(res=>{
      let maleid=res.data.male[this.randomnum(res.data.male)]._id;
      let femaleid=res.data.female[this.randomnum(res.data.female)]._id;
      let epubid=res.data.epub[this.randomnum(res.data.epub)]._id
      // console.log(res.data);
      // console.log(maleid);
      // console.log(femaleid);
      // console.log(epubid);
      this.gethotdata(maleid,this.maledata);
      this.gethotdata(femaleid,this.femaledata);
      this.gethotdata(epubid,this.epubdata);
    })
  },
  methods:{
    randomnum(arr){
      return parseInt(Math.random()*(arr.length-1));
    },
    gethotdata(id,list){
      this.$http(` /ranking/${id}`).then(res=>{
        let books=(res.data.ranking.books).slice(0,5);
        books.forEach(book=>{
          list.push(book)
        })
        // console.log(list)
      })
    },
  },
  // mounted(){
  //   // this.gethotdata();
  // },
  components:{
    maleRecommend,
    femaleRecommend,
    epubRecommend,
    tujiantitle

  }

}
</script>
<style lang="scss" scoped>
.aboutbox{
   height:calc(100vh - 50px - 55px);
  overflow-y: auto;
}
</style>
