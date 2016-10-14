
var cityInput=document.getElementById('aqi_city_input');
var valueInput=document.getElementById('aqi_value_input');
var table=document.getElementById('aqi_table');
var aqiData={};


  //存储用户输入的空气指数数据
   function addAqiData(){
     
     var City=cityInput.value.trim();
     var Value=valueInput.value.trim();
     if(!City.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert("城市名必须为中英文字符！")
        return false;
      }
    if(!Value.match(/^\d+$/)) {
        alert("空气质量指数必须为整数！")
        return false;
    }
    aqiData[City] = Value;
   }
   
   //将数据存放在表格中

     function renderAqiList(){
         var str="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>"
         for(var City in aqiData)
         {
         	str=str+'<tr><td>'+City+'</td><td>'+aqiData[City]+'</td><td>'+"<button onclick='delBtnHandle(\""+City+"\")'>删除</button></td><tr>"
        }
       table.innerHTML=str;
   
     } 
   
   function addBtnHandle(){
   	addAqiData();
   	renderAqiList();
   }


   //删除数据
   function delBtnHandle(City){
     
    delete aqiData[City];
   	renderAqiList();
   }
   function init(){
   	 var btn1=document.getElementById('add_btn');
   	  btn1.onclick=addBtnHandle;
   	 
   } 
   init();