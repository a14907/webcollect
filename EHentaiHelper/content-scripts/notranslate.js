
if (window.location.host == 'www.newtonsoft.com') {
    document.querySelectorAll('.codeSnippetContainerTabSingle').forEach(m => m.classList.add('notranslate'))
    document.querySelectorAll('#tocNav').forEach(m => m.classList.add('notranslate'))
    document.querySelectorAll('.tableSection').forEach(m => m.classList.add('notranslate'))
}

if (window.location.host == 'endjin.com') {
    document.querySelectorAll('.js-table-wrap').forEach(m=>m.classList.add('notranslate'))
}