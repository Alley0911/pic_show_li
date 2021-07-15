<template>
  <div class="container-fluid" id='band'>
    <div class="middle">
        <h1>{{title}}</h1>
        <div id='head_nav'>
            <!-- <span><a href="/">首页</a></span> -->
            <!-- <span><a href="http://10.28.16.192/data">数据</a></span> -->
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Head',
  data(){
      return {
          title: "示范平台"
      }
  }
}
</script>

<style>
div#head_nav a{
  font-size: 18px;
  letter-spacing: 3px;
  color: white; 
  text-decoration: none;
}
div#head_nav a:hover {  
  color:#000; 
  text-decoration: underline;
}
div#band{
    height: 100px;
    background-image: url(../assets/img/head.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.middle{
    width: 1350px;
    margin:0 auto;
}

div.middle h1{
    height: 100px;
    line-height: 90px;  
    margin: 0px;  
    padding: 0px;
    color:#00529c;
    font-weight: 800;
}

span{
  padding: 10px 10px
}

div#head_nav{
  position: absolute;
  top:50px;
  right:40px;
}

</style>
