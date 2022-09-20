var page2IOB = new IntersectionObserver((entries,o)=>{
    entries.forEach(e=>{
        if(e.isIntersecting){
            Object.values(p2_b1.children).forEach(v=>{
                v.style.opacity = "1"
            })
            Object.values(p2_b2.children).forEach(v=>{
                v.style.opacity = "1"
            })
            console.log("abc")
            o.disconnect()   
        }else{
            console.log("dddd")
            var transition = 2000;
            Object.values(p2_b1.children).forEach(v=>{
                v.style.opacity = "0"
                v.style.transition = `all ${transition}ms`
            })
            Object.values(p2_b2.children).forEach(v=>{
                v.style.opacity = "0"
                v.style.transition = `all ${transition}ms`
            })
        }
    })
},{
    threshold : [0.9]
})

page2IOB.observe(page2)



window.onload = function() {
    particlesJS.load('particalBG1', 'json/particle.json', function() {
        console.log('callback - particles.js config loaded');
    });
    particlesJS.load('particalBG2', 'json/particle.json', function() {
        console.log('callback - particles.js config loaded');
    });
    setTimeout(()=>{
        scrollDown.style.opacity = "1"
    },4500)
};





