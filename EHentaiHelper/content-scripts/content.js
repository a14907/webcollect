chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    if (request.type == "detailPage" && window.location.href.startsWith('https://e-hentai.org/g/')) {
        console.log('收到处理详情页的命令')
        var ele = document.querySelector("#gd5 > p:nth-child(3) > a")
        var content = ele.textContent.replace('Torrent Download (', '').replace(')', '');
        var num = parseInt(content)
        if (num > 0) {
            console.log('bt文件数量大于0，继续处理：' + num)
            ele.click()
            //window.close()
        } else {
            console.log('bt文件数量等于0，不继续处理：' + num)
        }

    } 
    
    else if (request.type == "downloadPage" && window.location.href.startsWith('https://e-hentai.org/gallerytorrents.php')) {

        console.log('收到处理下载页的命令')
        var nodelist = document.querySelectorAll("#torrentinfo > div > form")
        var sortSeed = Object.values(nodelist).map(m => {
            var seedStr = m.querySelector('div > table > tbody > tr:nth-child(1) > td:nth-child(4)').textContent.replace('Seeds: ', '')
            seeds = parseInt(seedStr)
            return { seeds: seeds, form: m }
        }).sort((a, b) => b.seeds - a.seeds)
        if (sortSeed.length > 0) {
            var a = sortSeed[0].form.querySelector('div > table > tbody > tr:nth-child(3) > td > a')
            a.click()
            console.log('存在可下载的bt')
        }

    } 
    
    else if (request.type == "downloadPageClose" && window.location.href.startsWith('https://e-hentai.org/gallerytorrents.php')) {

        console.log('收到处理下载页关闭的命令')
        window.close()
    }
    
    else if (request.type == "onlyShowComment" && window.location.href.startsWith('https://www.bilibili.com/video')) {

        console.log('收到处理只显示评论区的命令')
        //删除头部
        document.querySelector("#biliMainHeader").remove()
        //删除视频区
        document.querySelector("#playerWrap").remove()
        //删除广告区
        document.querySelector("#bannerAd").remove()
        //删除右侧
        document.querySelector("#app > div > div.right-container").remove()
    }

    sendResponse({ fromcontent: "This message is from content.js" });
});