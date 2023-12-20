import style from './index.module.scss'
import StackTag from '../../common/stackTag'

const Jobs = () => {
  const { jobs } = require('../../assets/data/index.json')

  return (
    <div className={style.containerJobs}>
      {
        jobs.map(job => (
          <div key={job.id} className={style.containerJob}>
            <h3>{job.company} · {job.rol}</h3>
            <p className={style.date}>{job.date}</p>
            <p className={style.brief}>{job.brief}</p>
            <StackTag stacks={job.stack} />
          </div>
        ))
      }
      <div></div>
    </div>
  )
}

export default Jobs
