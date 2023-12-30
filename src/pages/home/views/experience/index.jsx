import style from './index.module.scss'

import linksPage from '../../../../constants/linksPage'

import Vertical from '../../../../common/layouts/vertical'
import Title from '../../../../common/title'
import StackTag from '../../../../common/stackTag'
import GoTo from '../../../../common/goTo'

import useData from '../../../../hooks/useData'

const Experience = () => {
  const { sections, jobs } = useData('sections', 'jobs')
  const { title, text } = sections.experience

  const goToInstruction = {
    text: 'View full Resume',
    to: require('../../../../assets/resume.pdf'),
    tab: true
  }

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
      </div>

      <GoTo instruction={goToInstruction} />
    </Vertical>
  )
}

export default Experience
