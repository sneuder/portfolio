import Horizontal from '../common/layouts/horizontal'
import Vertical from '../common/layouts/vertical'
import Title from '../common/title'
import ContactForm from '../components/contactForm'
import Image from '../components/Image'

const Contact = () => {
  return (
    <Vertical>
      <Title
        title="Contact me"
        description="If you would like to type me a message, fill the form below, I will type you back"
      />
      <Horizontal>
        <ContactForm />
        <Image />
      </Horizontal>
    </Vertical>
  )
}

export default Contact