// カーソル変更
const changeCursor = () => {
    const body = document.querySelector('body');
    body.style.cursor = 'crosshair';
}

// カラー情報取得
const getCursorLocation = () => {
    const body = document.querySelector('body');
    body.addEventListener('click', (event) => {
        const targetStyle = window.getComputedStyle(event.target)
        const color = targetStyle.color;
        const backgroundColor = targetStyle.backgroundColor;
        sendColorInfo(color, backgroundColor);
    })
}

// rgbをHEX値にする

// カラーコードをクリップボードにコピーする
const sendColorInfo = (color, backgroundColor) => {
    navigator.clipboard.writeText(color);
}

// クリックイベントをindexに送る
chrome.runtime.onMessage.addListener(() => {
    changeCursor();
    getCursorLocation();
})