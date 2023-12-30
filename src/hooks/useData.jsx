import { useMemo } from 'react'
import baseData from '../assets/data'

const useData = (...dataSections) => {
  const data = useMemo(() => {
    if (dataSections.length === 0) return baseData

    const modifiedData = {}
    dataSections.forEach((section) => {
      modifiedData[section] = baseData[section]
    })

    return modifiedData
  }, [])

  return data
}

export default useData
