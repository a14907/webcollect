document.getElementById("openDownloadPage").onclick=function () {
    chrome.tabs.query({ url:'https://e-hentai.org/g/*' }, function(tabs) {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(
                tab.id,
                {
                    type: 'detailPage'
                },
                function(response) {
                    window.close();
                }
            ); 
        });        
    });
}


document.getElementById("download").onclick=function () {
    chrome.tabs.query({ url:'https://e-hentai.org/gallerytorrents.php*' }, function(tabs) {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(
                tab.id,
                {
                    type: 'downloadPage'
                },
                function(response) {
                    window.close();
                }
            ); 
        });
        
    });
}

document.getElementById("downloadClose").onclick=function () {
    chrome.tabs.query({ url:'https://e-hentai.org/gallerytorrents.php*' }, function(tabs) {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(
                tab.id,
                {
                    type: 'downloadPageClose'
                },
                function(response) {
                    window.close();
                }
            ); 
        });
        
    });
}