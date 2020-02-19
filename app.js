fetch('')
.then(res => {
    console(res.json())
    return res.json()
})
.then (data => {
    console.log(data)
})