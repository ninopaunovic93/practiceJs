// const body = document.body
// var mojh1 = document.createElement('h1')
// mojh1.innerText = `enakdskndn`
// body.appendChild(mojh1)
// let mojNiz = [2, 3, 5, 7, 8, 9, 6, 4, 1]
// console.log(mojNiz)
// console.log(mojNiz)

// const array = ["one", "two", "three", "four", "fife"]
// array.sort(function() {
//     return Math.random() -0.5
// })
// console.log(array)
// div1.previousSibling, .nextSibling, .children[1], .parentElement, 


const body = document.body

const mojDiv = document.createElement('div')
mojDiv.setAttribute('id', 'vezba')
body.appendChild(mojDiv)
// mojDiv.innerHTML = '<h1>proba</h1>'

const navigacija = document.createElement('nav')
mojDiv.appendChild(navigacija)

const unLi = document.createElement('ul')
navigacija.appendChild(unLi)

//sledeca 3 elemenata napraviti iz petlje

for(let i=0; i<3; i++){
    const liElementi = document.createElement('li')
    unLi.appendChild(liElementi)
    liElementi.innerText = 'neki tekst'
    console.log(liElementi)

    for(let i=0; i<liElementi.length; i++) {
        const aTagovi = document.createElement('a')
        liElementi.appendChild(aTagovi)
        console.log(aTagovi)
    }
}


// const liHome = document.createElement('li')
// liHome.setAttribute('id', 'home')
// unLi.appendChild(liHome)

// const liContact = document.createElement('li')
// liContact.setAttribute('id', 'contact')
// unLi.appendChild(liContact)

// const liAbout = document.createElement('li')
// liAbout.setAttribute('id', 'about')
// unLi.appendChild(liAbout)


const forma = document.createElement('form')
mojDiv.appendChild(forma)
const paragraf = document.createElement('p')
paragraf.innerText = `Ovo je neki paragraf`
forma.appendChild(paragraf)

const labela = document.createElement('label')
labela.for = 'cars'
labela.textContent= `Choose a car`
forma.appendChild(labela)

const selectTag = document.createElement('select')
selectTag.name = 'cars'
selectTag.id = 'cars'

forma.appendChild(selectTag)

for (let i = 0; i < 3; i++) {
    const optGroup = document.createElement('optgroup')
    selectTag.appendChild(optGroup)

    for (let i = 0; i < 2; i++) {
        const option = document.createElement('option')
        optGroup.appendChild(option)
    }
}
selectTag.children[0].label = `Swedish car`
selectTag.children[0].children[0].innerText = `Volvo`
selectTag.children[0].children[1].innerText = `Saab`
selectTag.children[1].label = `American car`
selectTag.children[1].children[0].innerText = `Dodge`
selectTag.children[1].children[1].innerText = `Chevrolet`
selectTag.children[2].label = `Germany car`
selectTag.children[2].children[0].innerText = `Mercedes`
selectTag.children[2].children[1].innerText = `BMW`








