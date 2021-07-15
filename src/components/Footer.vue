<template>
  <div class="container-fluid bottom_line footer">
      {{msg}}
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Footer',
  data(){
      return {
          msg: "Copyright©2021-"
      }
  }
}
</script>

<style>
div.bottom_line{
    margin-top:10px;
    height: 30px;
    padding-top: 5px;
    border-top: 3px solid #2d97db;
    text-align: center;
    font-size: 12px;
    color: gray;
}
</style>
