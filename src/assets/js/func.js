
function get_ori_data() {
  var xhr = new XMLHttpRequest();
  let params = 'data=' + data_selected
  xhr.open('get', '/get_data?' + params)
  xhr.send();
  xhr.onload = function () {
      if (xhr.status == 200) {
          data = (xhr.responseText)
          var dataObj = eval("(" + data + ")")  //接受的是字符串数据，必须执行此句才能处理
          app.all_data = dataObj          
      }
  }

}