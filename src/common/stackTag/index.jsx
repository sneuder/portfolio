import style from './index.module.scss'

const StackTag = ({ stack }) => {
  return (
    <div key={stack} className={style.stackTag}>
      {stack}
    </div>
  )
}

export default StackTag
