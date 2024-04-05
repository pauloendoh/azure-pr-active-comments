export const csHandleActiveComments = async () => {
  // div that contains "Show everything" text
  const divs = document.querySelectorAll(
    '.bolt-dropdown-expandable-button-label'
  )

  if (!divs) return

  const div = Array.from(divs).find((div) =>
    div.textContent?.includes('Show everything')
  )

  if (!div) return

  let clickable = div as HTMLElement
  clickable.click()

  const allDivs = document.querySelectorAll('span')

  if (!allDivs) return

  const activeCommentDiv = Array.from(allDivs).find((div) =>
    div.textContent?.includes('Active comments')
  )

  if (!activeCommentDiv) return

  clickable = activeCommentDiv as HTMLElement
  clickable.click()
}
