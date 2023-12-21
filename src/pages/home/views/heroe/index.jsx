import linksPage from '../../../../constants/linksPage'

import Responsive from '../../../../common/layouts/responsive'
import Horizontal from '../../../../common/layouts/horizontal'
import Image from '../../../../components/image'
import MainHeader from '../../../../components/mainHeader'

const Heroe = () => {
  return (
    <main id={linksPage.home}>
      <Horizontal>
        <MainHeader />
        <Responsive>
          <Image imageName="aboutme" />
        </Responsive>
      </Horizontal>
    </main>
  )
}

export default Heroe
