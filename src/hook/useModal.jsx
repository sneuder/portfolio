import { useState } from "react"

const useModal = () => {
  const [openedModal, setOpenedModal] = useState(false)

  const handleModal = () => {
    setOpenedModal(!openedModal)
  }

  return {
    handleModal
  }
}

export default useModal