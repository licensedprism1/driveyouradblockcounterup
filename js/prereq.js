var counter = 0;
var counterDisplay = document.getElementById("counter");

var file = "https://easylist.to/easylist/easylist.txt";
function chkad(){
    $.get(file,function(txt){
        var lines = txt.responseText.split("\n");
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
            fetch(strf);
            counterDisplay.innerHTML = counter++;
            
        }
    }); 
}
