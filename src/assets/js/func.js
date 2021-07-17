function updatePic(obj) {
  if(obj.curLevel=='无'){
    var ll = ''
    var addr = "http://localhost/data/" + obj.dataValue + "/" + obj.date + obj.iniTime + "/"+ obj.varValue +
    "/" + obj.varValue + "_" + obj.date + obj.iniTime + "_" + obj.curLeadTime + ".png"
    obj.imgAdr = addr
  }
  else{
    var addr = "http://localhost/data/" + obj.dataValue + "/" + obj.date + obj.iniTime + "/"+ obj.varValue +
    "/" + obj.varValue + "_" + "H" + obj.curLevel + "_" + obj.date + obj.iniTime + "_" + obj.curLeadTime + ".png"
    obj.imgAdr = addr
  }
}

function getIndexFromValue(lst, value){
  var i = 0;
  var l = lst.length
  for (i; i<=l; i++){
    if (lst[i] == value){
      return i
    }
  }
}

function pushRouter(dataIndex, varIndex, leadTimeIndex, levelIndex, obj){
  obj.$router.push({
    path: '/show/' + dataIndex
    + '/' + varIndex
    + '/' + leadTimeIndex
    + '/' + levelIndex
  })
}

export {
  updatePic,
  getIndexFromValue,
  pushRouter
}