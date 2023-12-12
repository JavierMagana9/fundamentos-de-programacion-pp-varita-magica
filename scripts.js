
//1

let enlaces=document.querySelectorAll("a")


enlaces.forEach((enlace)=>{
    enlace.addEventListener('click',(ev)=>{
ev.preventDefault()
       
    });

})

//2.1


let imagenes=document.querySelectorAll('img')

imagenes.forEach((item) => {
    item.addEventListener('click', (ev)=>{
        ev.target.src = 'assets/magic-1.gif'
    })

    //O esto: item.setAttribute('src', 'assets/magic-1.gif')
});

//2.2 && 5
let parrafos = document.querySelectorAll('p')
parrafos.forEach((item)=>{
    item.addEventListener('click',(ev)=>{
            item.style.background=getRandom(colors);//el 5
            item.style.color='orange';
            
        })
})

//2.3
let artSect = document.querySelectorAll('article', 'section')

artSect.forEach((item)=>{
    item.addEventListener('click', ()=>{
        item.style.background='purple'
    })
})


//3.1


imagenes.forEach((item)=>{
    let valorOriginal;
    item.addEventListener('mouseenter', (ev)=>{
        valorOriginal=ev.target.src;
        ev.target.src='assets/abracadabra.gif'
    })
    item.addEventListener('mouseleave', (ev)=>{
        ev.target.src=valorOriginal
    })

})

//3.2
parrafos.forEach((item)=>{
    let valorOriginal;
    item.addEventListener('mouseenter', (ev)=>{
        valorOriginal=item.style.background;
        item.style.background='yellow'
    })
    item.addEventListener('mouseleave', (ev)=>{
        item.style.background=valorOriginal
    })

})

//3.3
artSect.forEach((item)=>{
    let valorOriginal;
    item.addEventListener('mouseenter', (ev)=>{
        valorOriginal=item.style.background;
        item.style.background='red'
    })
    item.addEventListener('mouseleave', (ev)=>{
        item.style.background=valorOriginal
    })

})

//4.Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.

const colors = ['red', 'blue', 'green']

const getRandom = (array) => {


  return colors[Math.floor(Math.random() * array.length)]
   
}

console.log(getRandom(colors))
// imprime 'red', 'blue' o 'green'


//5 esta en el 2.2

//6
