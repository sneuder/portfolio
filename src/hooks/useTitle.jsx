const useTitle = (titleToLight) => {
  const partialTitle = titleToLight.trim().split(' ')
  const highlightedWord = partialTitle.pop()

  return {
    partialTitle: partialTitle.join(' '),
    highlightedWord,
  }
}

export default useTitle
