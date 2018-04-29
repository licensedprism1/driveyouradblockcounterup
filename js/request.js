var counter = 0;
var counterDisplay = document.getElementById("counter");

setInterval(function() {
  fetch("https://www.agsdfklasfhadslfsdaivnerwioufakdsjfbharhwedfjawefilewurlncjkadfhaew.com//?ok&ad_slot=6&ad_time=5&ad_type=2&ad_channel=1");
  counterDisplay.innerHTML = counter++;
}, 5);
