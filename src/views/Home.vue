<template>
  <div>
    <Head/>
    <Nav 
      :dataIndex='dataIndex'
      :dataAll='dataAll'
      @changeData='changeData'
     >
     </Nav>
    <Contain 
      :varIndex='varIndex'
      :dataIndex='dataIndex'
      :dataAll='dataAll'
      :leadTime="leadTime"
      :level="level"
      @changeLeadTime='changeLeadTime'
      @changeLevel='changeLevel'
      @changeVar='changeVar'>
    </Contain>
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
        dataIndex: 0,
        varIndex: 0,
        level: '500',
        leadTime: "0"     
    }
  },
  methods:{
    changeData(index){
      this.dataIndex = index
      this.varIndex = 0
      this.leadTime = this.dataAll[index].children[this.varIndex].leadTimes[0]
      this.level = this.dataAll[index].children[this.varIndex].levels[0]
    },
    changeVar(index){
      this.varIndex = index
      this.leadTime = this.dataAll[this.dataIndex].children[index].leadTimes[0]
      this.level = this.dataAll[this.dataIndex].children[index].levels[0]
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
