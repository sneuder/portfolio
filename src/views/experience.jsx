import linksPage from '../constants/linksPage'

import Jobs from '../components/jobs'

import Vertical from '../common/layouts/vertical'
import Title from '../common/title'

const Experience = () => {
  const { sections } = require('../assets/data/index.json')
  const { title, text } = sections.experience

  return (
    <Vertical idPage={linksPage.experience}>
      <Title title={title} description={text}></Title>
      <Jobs />
    </Vertical>
  )
}

export default Experience
