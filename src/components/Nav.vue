<template>
  <div class="nav">
    <div class="middle">
        <ul>
            <li><img src="../assets/img/cloud.svg"></li>
        </ul>
        <ul v-for='(item, index) in dataAll'
        @click="changeData(index)"
        :key='index'>
            <li>
              <a href="">{{item.lable}}</a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Nav',
  props:['dataAll'],
  methods:{
    changeData(index){
      this.$router.push({
        path: '/show/' + index + '/0/',
      })
    }
  }
}
</script>

<style>
@import '~assets/css/Nav.css'
</style>
