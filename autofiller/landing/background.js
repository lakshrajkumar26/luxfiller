// on install run this

chrome.runtime.onInstalled.addListener(async ()=>{
   let url=chrome.runtime.getURL('landing/landing.html')
   let tab= await chrome.tabs.create({ url })
   console.log(`Created tab ${tab.id}`)
})