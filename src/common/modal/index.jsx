import useGetStates from '../../hooks/useGetStates'
import style from "./index.module.scss";

const Modal = ({children}) => {
  const { modal } = useGetStates()
  return (
    <dialog open={modal}>
      {children}
    </dialog>
  );
};

export default Modal;
