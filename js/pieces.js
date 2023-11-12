

const response = await fetch('pieces-autos.json')
const pieces = await response.json()

const article = pieces[0]

const imageElement = document.createElement('img')
imageElement.src = article.image
const nomElement = document.createElement('h4')
nomElement.textContent = article.nom
const prixElement = document.createElement('p')
prixElement.textContent = 'Prix : ' + article.prix + ' €'
const categorieElement = document.createElement('p')
categorieElement.textContent = article.categorie

const sectionFiches = document.querySelector('#fiches')
const ficheElement = document.createElement('article')
ficheElement.setAttribute( 'class', 'col-3' )
ficheElement.appendChild( imageElement )
ficheElement.appendChild( nomElement )
ficheElement.appendChild( prixElement )
ficheElement.appendChild( categorieElement )

sectionFiches.appendChild( ficheElement )
