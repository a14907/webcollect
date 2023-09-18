
if (window.location.host == 'www.newtonsoft.com') {
    document.querySelectorAll('.codeSnippetContainerTabSingle').forEach(m => m.classList.add('notranslate'))
    document.querySelectorAll('#tocNav').forEach(m => m.classList.add('notranslate'))
    document.querySelectorAll('.tableSection').forEach(m => m.classList.add('notranslate'))
}

if (window.location.host == 'endjin.com') {
    document.querySelectorAll('.js-table-wrap').forEach(m=>m.classList.add('notranslate'))
}

if (window.location.host == 'devblogs.microsoft.com') {
    document.querySelectorAll('.table-responsive').forEach(m=>m.classList.add('notranslate'))
}

if (window.location.host == 'learn.microsoft.com') {
    document.querySelectorAll('#left-container').forEach(m=>m.classList.add('notranslate'))
}

if (window.location.host == 'tieba.baidu.com') {
    setTimeout(function(){
        document.querySelectorAll('.userbar').forEach(m=>m.style.visibility='hidden')
        document.querySelector("body > ul").hidden=true
        document.querySelector("#spage-tbshare-container").hidden=true
    },1000)

    document.querySelectorAll('.search-sec').forEach(m=>m.style.visibility='hidden')
    document.querySelectorAll('.top-sec').forEach(m=>m.style.visibility='hidden')
    document.querySelectorAll('.left-sec').forEach(m=>m.style.visibility='hidden')
    document.querySelectorAll('.r-top-sec').forEach(m=>m.style.visibility='hidden')
    document.querySelectorAll('.r-right-sec').forEach(m=>m.style.visibility='hidden')

    
    document.querySelectorAll('#head').forEach(m=>m.style.visibility='hidden')
    document.querySelectorAll('.right_section').forEach(m=>m.style.visibility='hidden')
    document.querySelectorAll('.p_author_face').forEach(m=>m.style.visibility='hidden')
    
}
 