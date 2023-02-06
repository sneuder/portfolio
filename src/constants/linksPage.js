import linksInfo from './linksInfo'

const linksPage = buildLinks()

function buildLinks() {
  const preLinks = {}
  linksInfo.forEach((link) => {
    const textLink = link.to.replace('#', '')
    preLinks[textLink] = textLink
  })

  return preLinks
}

export default linksPage
