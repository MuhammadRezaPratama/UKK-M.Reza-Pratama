document.querySelectorAll('a[href^="#"]').forEachFor(anchor =>{
    anchor.addEventListener('click',function(e) {
        e.PrefentDefault();

        document.querySelector(this.getAttribute('href')).scrollInterView({
            behavior: `smooth`
        })
    })
})