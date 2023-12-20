import style from './index.module.scss'

const StackTag = ({ stacks }) => {
  return (
    <div className={style.containerStackTags}>
      {
        stacks.map((stack) => (
          <div key={stack} className={style.stackTag}>{ stack }</div>
        ))
      }
    </div>
  )
}

export default StackTag
