/**
 * Dark theme hook for tailwindcss
 * @author nhalq <me@nhalq.dev>
 */

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
document.documentElement.classList.toggle('dark', prefersDarkScheme.matches)
prefersDarkScheme.addEventListener('change', (event) => {
  document.documentElement.classList.toggle('dark', event.matches)
})
