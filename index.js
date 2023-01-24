const getParks = () => {
    fetch("http://localhost:3000/parks")
        .then(resp => resp.json())
        .then(parks => renderParks(parks))
}

const createCard = (p) => {
    const card = document.createElement('div')
    card.className = "national-parks__card"

    const banner = document.createElement('div')
    const bannerText = document.createElement('div')
    bannerText.textContent = p.parktype
    banner.classList.add("card__banner", `card__banner--${p.parktype}`)
    banner.appendChild(bannerText)
    card.appendChild(banner)

    const img = document.createElement('img')
    img.src = p.image
    img.className = "card__image"
    card.appendChild(img)

    const title = document.createElement('div')
    title.textContent = p.title
    title.className = "card__title"
    card.appendChild(title)

    const bodyText = document.createElement('div')
    bodyText.textContent = p.body
    bodyText.className = "card__body"
    card.appendChild(bodyText)

    const cta = document.createElement('button')
    const a = document.createElement('a')
    a.href = p.link
    a.textContent = "Find Out More"
    cta.className = 'card__cta'
    cta.appendChild(a)
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