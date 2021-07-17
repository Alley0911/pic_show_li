<template>
  <div>
    <Head/>
    <Nav 
      :dataAll='dataAll'
      @changeData='changeData'    
     >
     </Nav>
     <router-view
      :dataAll='dataAll'
      @changeLeadTime='changeLeadTime'
      @changeLevel='changeLevel'
      @changeVar='changeVar'
      >

     </router-view>
    <Footer></Footer>
  </div>  
</template>

<script>
// @ is an alias to /src
import Head from 'components/Head.vue';
import Nav from 'components/Nav.vue';
import Contain from 'components/Contain.vue'
import Footer from 'components/Footer.vue'
import items from 'assets/json/items.json'

export default {
  name: 'home',
  components:{
      Head,
      Nav,
      Contain,
      Footer
  },
  data(){
    return {      
        dataAll: items,
        level: '500',
        leadTime: "0"     
    }
  },
  methods:{
    changeData(index){
      this.level = this.dataAll[index].children[0].levels[0]
      this.leadTime = this.dataAll[index].children[0].leadTimes[0]
    },
    changeVar(index){
      this.level = this.dataAll[this.$route.params.dataIndex].children[index].levels[0]
      this.leadTime = this.dataAll[this.$route.params.dataIndex].children[index].leadTimes[0]
    },    
    changeLevel(value){
      this.level = value
    },
    changeLeadTime(value){
      this.leadTime = value
    },    
  }
}
</script>
<style>

</style>
