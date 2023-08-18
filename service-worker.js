

chrome.runtime.onInstalled.addListener(() => {

    chrome.declarativeNetRequest.updateEnabledRulesets(
        {
            enableRulesetIds:['ruleset']
        }
    )

})