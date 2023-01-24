const getParks = () => {
    fetch("http://localhost:3000/parks")
        .then(resp => resp.json())
        .then(parks => renderParks(parks))
}

const createCard = (p) => {
    const card = document.createElement('div')
    card.className = "national-parks__card"

    const banner = document.createElement('div')
    banner.textContent = p.parktype
    banner.className = "card__banner"
    card.appendChild(banner)

    const img = document.createElement('img')
    img.src = p.image
    img.className = "card__image"
    card.appendChild(img)

    const bodyText = document.createElement('div')
    bodyText.textContent = p.body
    bodyText.className = "card__body"
    card.appendChild(bodyText)

    const cta = document.createElement('a')
    cta.href = p.link
    cta.className = 'card__cta'
    card.appendChild(cta)

    return card
}

const renderParks = (parks) => {
    console.log(parks)
    const parksContainer = document.querySelector('.national-parks')
    parks.forEach(p => {
        const card = createCard(p)
        parksContainer.appendChild(card)
    });
}


const init = () => {
    getParks()
}

init()