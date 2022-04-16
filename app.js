const body = document.body
let sati = new Date().getHours()
let minuti = new Date().getMinutes()
let sekunde = new Date().getSeconds()

const generateTime = () => {
    const divTime = document.querySelector('#time')
    let sati = new Date().getHours()
    let minuti = new Date().getMinutes()
    let sekunde = new Date().getSeconds()
    let vreme = ''

    if (sati < 10) {
        sati = '0' + sati
    }
    if (minuti < 10) {
        minuti = '0' + minuti
    }
    if (sekunde < 10) {
        sekunde = '0' + sekunde
    }

    vreme = `${sati}:${minuti}:${sekunde}`
    divTime.textContent = vreme

    return setTimeout(() => {
        generateTime()
    }, 1000)
}
generateTime()
const vreme = `${sati}:${minuti}:${sekunde}`

const kolicina =  document.querySelector('#kolicina')
const poruci =  document.querySelector('#poruci')
const newParagraf = document.createElement('p')
const kolicinaPica = document.createElement('p')
body.appendChild(kolicinaPica)
body.appendChild(newParagraf)

let brojac = 0

kolicina.addEventListener('click', (event) => {
        brojac++
        kolicinaPica.textContent = brojac
})
poruci.addEventListener('click', (event) => {
    newParagraf.innerText = `porucili ste ${brojac} pice u ${vreme} sati`
})
