<template>
  <div>
    <Head/>
    <Nav 
      :dataAll='dataAll'
     >
     </Nav>
     <router-view
      :dataAll='dataAll'
      level='level'
      leadTime='leadTime'
      @changeLeadTime='changeLeadTime'
      @changeLevel='changeLevel'
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
