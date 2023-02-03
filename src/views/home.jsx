import Horizontal from "../common/layouts/horizontal"
import Image from "../components/image"
import MainHeader from "../components/mainHeader"

const Home = () => {
  return (
    <main>
      <Horizontal>
        <MainHeader />
        <Image imageName="aboutme" />
      </Horizontal>
    </main>
  )
}

export default Home