<template>
  <div class="nav">
    <div class="middle">
        <ul>
            <li><img src="../assets/img/cloud.svg"></li>
        </ul>
        <ul v-for='(item, index) in dataAll'
        :class="{active: dataIndex==index}"
        @click="changeData(index)"
        @mouseover="over(index)"
        @mouseout="out(index)"
        :key='index'>
            <li>
              {{item.lable}}
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import {updatePic, getIndexFromValue, pushRouter} from 'assets/js/func.js'

// @ is an alias to /src
export default {
  name: 'Nav',
  props:['dataAll'],
  data(){
    return{
      dataIndex: 100
    }
  },
  methods:{
    changeData(index){
      this.$emit("changeData", index);
      pushRouter(index, 0, 0, 0, this)
    },
    over(index){
      this.dataIndex  = index
    },
    out(index){
      this.dataIndex  = 100
    }
  }
}
</script>

<style>
@import '~assets/css/Nav.css'
</style>
