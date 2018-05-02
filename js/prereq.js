var counter = 1;
var counterDisplay = document.getElementById("counter");
var disp = document.getElementById("aok");

var file = "https://easylist.to/easylist/easylist.txt";
var requestInterval = 5;

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
                 strf = "https://www.adblocktester1Bd.com" + str;
              } else if(str.startsWith("://")){
                 strf = "https" + str + "/adasfdasdf83.html";
              } else if(str.startsWith("=")){
                 strf = "https://www.adblocktester1Bd.com/?type" + str;
              } else if(str.startsWith("?")){
                 strf = "https://www.adblocktester1Bd.com/" + str;
              } else if(str.startsWith("^")){
                 strf = "https://www.adblocktester1Bd.com/" + str;
              } else if(str.startsWith("/\\") || str.startsWith("_")){
                 strf = "https://www.adblocktester1Bd.com/a" + str;
              } else if(str.startsWith("#")){
                 strf = str;
              } else if(str.startsWith("||")||str.startsWith("||@@")){
                 str = str.replace("||", "");
                 str = str.replace("@@", "");
                 strf = "https://www.adblocktester1Bd.com/?" + str;
              } else{
                 strf = "https://www.adblocktester1Bd.com/?" + str;
              }
              if (strf !== "") { 
                HttpQueueObj.newRequest(strf, function(data) {
                  counterDisplay.innerHTML = counter++;
                  disp.innerHtml = str;
                }, function(err) {
                  counterDisplay.innerHTML = counter++;
                  disp.innerHTML = str;
                });
              }
          }
        });
    }); 
}
chkad();
