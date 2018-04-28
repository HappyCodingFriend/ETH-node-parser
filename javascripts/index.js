let web3 = new Web3('http://localhost:8545')
let account = 'null'


function creat() {
    account = web3.eth.accounts.create()
    account = account.encrypt($('#password').val())
    $('#out').text(JSON.stringify(account, undefined, 4))
}

$('#upload').change((event) => {

    let accountFile = event.target.files[0]
    let fileReader = new FileReader()
    fileReader.onload = (event) => {
        account = event.target.result
        $('#out').text(JSON.stringify(JSON.parse(account), undefined, 4))
    }
    fileReader.readAsText(accountFile)
})

function download() {

    let accountBlob = new Blob([JSON.stringify(account)], {
        type: 'text/json'
    })

    let downloadLink = document.createElement('a') //新增連結
    downloadLink.download = 'keyfile.txt' //檔名
    downloadLink.innerHTML = 'Download File'
    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(accountBlob)
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(accountBlob)
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = 'none'
        document.body.appendChild(downloadLink)
    }

    downloadLink.click() //按下連結
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}

function tx() {

}

function signTx() {


}