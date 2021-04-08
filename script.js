/*****************************************************
*  project: multilingual fonts switch               *
*  description: switch font when language changes    *
*  author: horans@gmail.com                          *
*  url: https://github.com/horans/multi-lang-fonts   *
*  update: 210408                                    *
*****************************************************/
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('form input')[0].focus()
  document.querySelectorAll('form')[0].addEventListener('change', e => {
    const lang = e.target.value
    const html = document.querySelectorAll('html')[0]

    // only apply to alternate stylesheets
    document.querySelectorAll('link[rel*=stylesheet][title]').forEach(item => {
      item.disabled = true
      if (item.title === lang) item.disabled = false
    })

    html.lang = lang
    html.dir = lang === 'ar' ? 'rtl' : 'ltr'
  })
})
