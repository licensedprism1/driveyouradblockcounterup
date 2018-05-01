var counter = 1;
var counterDisplay = document.getElementById("counter");

var file = "https://easylist.to/easylist/easylist.txt";
var requestInterval = 1000;

var HttpQueueObj = new HttpQueue(requestInterval);

function chkad(){
    fetch(file).then(function(res) {
        res.text().then(function(data) {
          var lines = data.split("\n");
          for (var i = 0, len = lines.length; i < len; i++) {
              var str = lines[i];
              var strf = "";
              if(str.startsWith("&")){
                 strf = "https://www.ablocktesterlBd.com/?test" + str;
              } else if(str.startsWith("+") || str.startsWith("-")){
                 strf = "https://www.adblocktester1Bd.com/test" + str;
              }  else if(str.startsWith(".")){
                 strf = "https://www.adblocktester1Bd" + str;
              } else if(str.startsWith("/")){
                 strf = "https://www.adblocktester1Bd" + str;
              } else{
                  
              }
              if (strf !== "") { 
                HttpQueueObj.newRequest(strf, function(data) {
                  console.log(data);
                  counterDisplay.innerHTML = counter++;
                }, function(err) {
                  console.log(err);
                  counterDisplay.innerHTML = counter++;
                });
              }
          }
        });
    }); 
}
chkad();