function lightUp() {
    document.body.style.background = 'yellow';
 
    setInterval(function () {
        document.body.style.background = 'blue';
         
    }, 200)


    setInterval(function () {
        document.body.style.background = 'green';
    }, 400)
    
    setInterval(function () {
        document.body.style.background = 'red';
    }, 500)

    
    setInterval(function () {
        document.body.style.background = 'orange';
    }, 600)
}