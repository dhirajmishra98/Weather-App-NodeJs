console.log("Frontside JavaScript")

const weatherForm = document.querySelector('form')
const searchQuery = document.querySelector('input')
const messageOne = document.querySelector('#msg-one')
const messageTwo = document.querySelector('#msg-two')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = searchQuery.value

    messageOne.textContent = 'loading...'
    messageTwo.textContent = ''

    //after deploy, remove local host url to use deployed url
    fetch(`/weather?address=${location}`).then((res)=>{
    res.json().then((data)=>{
        if(data.error){
            messageOne.textContent = data.error
            return;
        }

        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
    })
})
})