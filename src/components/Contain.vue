<template>
<div class="middle  products" style="overflow:hidden">
    <!-- 产品开始处 -->
    <div class="left">
        <div class="dataHead">
          {{dataLable}}
        </div>
        <div class="dataBody">
            <ul>
                <li 
                  v-for='(item,index) in dataAll[dataIndex].children' 
                  @click='selectVar(index)'
                  :key=index
                  :class="{active: varIndex==index}"
                  >
                  {{item.lable}}
                </li>
            </ul>
        </div>
    </div>
    <!-- 产品结束处 -->
    <!-- 图片展示区开始处 -->
    <div class="right">
        <div class="path">
              <b-icon icon="house"></b-icon>           
            <span class="align-middle">{{dataLable}}/{{varLable}}</span>
        </div>
        <div class="selection">
            <div>
                日期:
            </div>
            <div class="date">
              <input type="text" class="date" v-model="date">
            </div> 
            <div>
                预报时次:
            </div>           
            <div class="iniTime">
                <select name="iniTime" v-model='iniTime'>                  
                    <option 
                      v-for='(item, index) in iniTimes' 
                      :key='index'
                      :value="item">
                      {{item}}h
                    </option>
                </select>
            </div>            
            <div>
                预报时效:
            </div>           
            <div class="leadTime">
                <select name="leadTime" v-model="curLeadTime">
                    <option 
                      v-for='(item, index) in leadTimes' 
                      :key='index'
                      :value="item">
                      {{item}}
                    </option>
                </select>
            </div>
            <div>
                层次:
            </div>           
            <div class="level">
                <select name="level" v-model="curLevel">
                    <option 
                      v-for='(item, index) in levels' 
                      :value="item"
                      :key='index'>
                      {{item}}
                    </option>
                </select>
            </div>
        </div>            
    <div class="pic">
        <img id="result" :src="imgAdr">
    </div> 
    </div>
</div>
</template>

<script>
import laydate from 'layui-laydate'

export default {
  name: 'contain',
  props:['dataAll','leadTime',"level"],
  data(){
    return {
      iniTimes: ['00'],
      iniTime: '00',
      date: '20210712',
      imgAdr: '#'
    }
  },
  computed:{
    dataIndex(){
      return this.$route.params.dataIndex
    },
    dataLable(){
      return this.dataAll[this.$route.params.dataIndex].lable
    },
    dataValue(){
      return this.dataAll[this.$route.params.dataIndex].value
    },
    varIndex(){
      return this.$route.params.varIndex
    },
    varLable(){
      return this.dataAll[this.$route.params.dataIndex].children[this.$route.params.varIndex].lable
    },
    varValue(){
      return this.dataAll[this.$route.params.dataIndex].children[this.$route.params.varIndex].value
    },
    leadTimes(){
      return this.dataAll[this.$route.params.dataIndex].children[this.$route.params.varIndex].leadTimes
    },
    levels(){
      return this.dataAll[this.$route.params.dataIndex].children[this.$route.params.varIndex].levels
    },
    curLeadTime:{
      get(){
        return this.dataAll[this.$route.params.dataIndex].children[this.$route.params.varIndex].leadTimes[0]
      },
      set(newValue){
        console.log(456)
        this.$emit("changeLeadTime", newValue)
      }
    },
    curLevel:{
      get(){
        return this.dataAll[this.$route.params.dataIndex].children[this.$route.params.varIndex].levels[0]
      },
      set(newValue){
        this.$emit("changeLevel", newValue)
      }
    }
  },
  methods:{
    selectVar(index){
      this.$router.push({
        path: '/show/' + this.dataIndex + '/' + index
      })
    },
  },
  mounted(){
    var _this = this
    laydate.render({
        elem: 'input.date', //指定元素,
        // type: 'date',
        value: "20210712",
        format:'yyyyMMdd',
        min: '2021-7-12',
        max: '2021-7-12',
        btns: ['now', 'confirm'],
        done: function(value){
          _this.date = value   
        }
    });
    if(this.curLevel=='无'){
      var ll = ''
      var addr = "http://localhost/data/" + this.dataValue + "/" + this.date + this.iniTime + "/"+ this.varValue +
      "/" + this.varValue + "_" + this.date + this.iniTime + "_" + this.curLeadTime + ".png"
      this.imgAdr = addr
    }
    else{
      var addr = "http://localhost/data/" + this.dataValue + "/" + this.date + this.iniTime + "/"+ this.varValue +
      "/" + this.varValue + "_" + "H" + this.curLevel + "_" + this.date + this.iniTime + "_" + this.curLeadTime + ".png"
      this.imgAdr = addr
      console.log(addr);
    } 
  },
  updated(){    
    if(this.curLevel=='无'){
      var ll = ''
      var addr = "http://localhost/data/" + this.dataValue + "/" + this.date + this.iniTime + "/"+ this.varValue +
      "/" + this.varValue + "_" + this.date + this.iniTime + "_" + this.curLeadTime + ".png"
      this.imgAdr = addr
    }
    else{
      var addr = "http://localhost/data/" + this.dataValue + "/" + this.date + this.iniTime + "/"+ this.varValue +
      "/" + this.varValue + "_" + "H" + this.curLevel + "_" + this.date + this.iniTime + "_" + this.curLeadTime + ".png"
      this.imgAdr = addr
      console.log(addr);
    }

  }
}
</script>

<style>
  @import "~assets/laydate/theme/default/laydate.css";
  @import url('~assets/css/contain.css');
</style>
