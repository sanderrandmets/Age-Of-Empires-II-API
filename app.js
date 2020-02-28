fetch('https://dog.ceo/api/breeds/image/random')
.then(res => {
    return res.json()
})
.then (data => {
    console.log(data)
    const container = document.getElementById('container')  
    const dog_div = document.createElement('div')
    dog_div.innerHTML = '<image src="' + data.message + '">'
    dog_div.classList.add('dog')
    container.append(dog_div)
 
})