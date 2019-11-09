<template>
  <div class="about">
    <classtitle />
    <div class="aboutbox">
      <boytext :maledata="bookdata.male"/>
      <girlstext :femaledata="bookdata.female"/>
      <presstext :pressdata="bookdata.press"/>
      <picturetext :picturedata="bookdata.picture"/>
     </div>
  </div>
</template>
<script>
import boytext from '../components/classification/boytext.vue'
import girlstext from '../components/classification/girlstext.vue'
import presstext from '../components/classification/presstext.vue'
import picturetext from '../components/classification/picturetext.vue'
import classtitle from '../components/title/classtitle.vue'

export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      bookdata: {},
    };
  },
  methods: {
    getbookdata() {
      this.$http("/cats/lv2/statistics").then(res => {
        let data = res.data;
        this.bookdata = data;
        // console.log(this.bookdata);
      });
    },
  },
  mounted() {
    this.getbookdata();
  },
  components:{
    boytext,
    girlstext,
    presstext,
    picturetext,
    classtitle
  }
}
</script>


<style lang="scss" scoped>
.aboutbox{
   height:calc(100vh - 50px - 55px);
  overflow-y: auto;
}
</style>