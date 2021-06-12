// ボタン押す→カーソル変わる
const sendInfoCursor = () => {
    chrome.tabs.query({active:true, currentWindow:true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {message: 'クリック'})
    })
}

// カーソル変更
const btn = document.getElementById('changeCursorBtn')
btn.addEventListener('click', () => {
    sendInfoCursor();
})