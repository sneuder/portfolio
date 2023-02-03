import linksPage from '../constants/linksPage'

import Horizontal from '../common/layouts/horizontal'
import Responsive from '../common/layouts/responsive'
import Vertical from '../common/layouts/vertical'
import Title from '../common/title'
import ContactForm from '../components/contactForm'
import Image from '../components/image'

const Contact = () => {
  return (
    <Vertical idPage={linksPage.contact} >
      <Title
        title="Contact me"
        description="If you would like to type me a message, fill the form below, I will type you back"
      />
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