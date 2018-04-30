var counter = 0;
var counterDisplay = document.getElementById("counter");

var file = "https://raw.githubusercontent.com/licensedprism1/driveyouradblockcounterup/master/Adblock%20lists/easylist.txt";
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
            fetch("https://www.agsdfklasfhadslfsdaivnerwioufakdsjfbharhwedfjawefilewurlncjkadfhaew.com/?ok&ad_slot=6&ad_time=5&ad_type=2&ad_channel=1");
            counterDisplay.innerHTML = counter++;
            
        }
    }); 
}
