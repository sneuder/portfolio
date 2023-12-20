import style from './index.module.scss'

import linksPage from '../../../../constants/linksPage'

import Vertical from '../../../../common/layouts/vertical'
import Title from '../../../../common/title'
import StackTag from '../../../../common/stackTag'

const Experience = () => {
  const { sections, jobs } = require('../../../../assets/data/index.json')
  const { title, text } = sections.experience

  return (
    <Vertical idPage={linksPage.experience}>
      <Title title={title} description={text}></Title>

      <div className={style.containerJobs}>
        {jobs.map((job) => (
          <div key={job.id} className={style.containerJob}>
            <h3>
              {job.company} · {job.rol}
            </h3>
            <p className={style.date}>{job.date}</p>
            <p className={style.brief}>{job.brief}</p>

            <div className={style.containerStackTags}>
              {job.stack.map((stack) => (
                <StackTag stack={stack} key={stack} />
              ))}
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </Vertical>
  )
}

export default Experience
