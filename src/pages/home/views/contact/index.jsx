import linksPage from '../../../../constants/linksPage'

import Horizontal from '../../../../common/layouts/horizontal'
import Responsive from '../../../../common/layouts/responsive'
import Vertical from '../../../../common/layouts/vertical'
import Title from '../../../../common/title'
import ContactForm from '../../../../components/contactForm'
import Image from '../../../../components/image'

import useData from '../../../../hooks/useData'

const Contact = () => {
  const { sections } = useData('sections')
  const { title, text } = sections.contact

  return (
    <Vertical idPage={linksPage.contact}>
      <Title title={title} description={text} />
      <Horizontal>
        <ContactForm />
        <Responsive>
          <Image imageName="contact" />
        </Responsive>
      </Horizontal>
    </Vertical>
  )
}

export default Contact
