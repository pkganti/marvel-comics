$(document).ready(function () {
    $('button').on('click', function () {
      var comicname = $('#comicname').val();
      var publicKey = "marvel-api-publickey";
      var privateKey = "marvel-api-privatekey";
      var timeStamp = Math.floor(Date.now() / 1000);
      var stringToHash = timeStamp + privateKey + publicKey;
      var hash = calcMD5(stringToHash);
      var comictitle = $('#comicname').val();
      var url = ("http://gateway.marvel.com/v1/public/characters?ts="+timeStamp+"&apikey="+publicKey+"&hash="+hash+"&name="+comictitle);
      // var xhr = new XMLHttpRequest(); // Instantiate our AJAX request object.
      // xhr.open('GET', url); // Set up our request: method and the URL or path
      //   xhr.onreadystatechange = function () { // Set up our callback
      //   if (xhr.readyState !== 4) { return; } // Don't do anything until the request is complete
      //   var info = JSON.parse(xhr.responseText);

      /*The below is the jQuery ajax call which is simpler and easier*/
      $.ajax(url).done(function(info){
        console.log(info);
        $('#placehere').html("");
        for (var i=0; i<info.data.results.length; i++){
          // var elem = document.createElement("img");
          // elem.setAttribute("src", info.data.results[i].thumbnail.path+".jpg");
          // elem = $("img").attr("src", info.data.results[i].thumbnail.path+".jpg");
          $("#placehere").append($("<img>").attr("src", info.data.results[i].thumbnail.path+".jpg"));
          }
        });

      //
      //
      // xhr.send();
    // });
  });
});
