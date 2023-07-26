const html = document.querySelector('.html-key');
const css = document.querySelector('.css-key');
const js = document.querySelector('.js-key');
const result = document.querySelector('.result');

const htmlInput = document.querySelector('.html-input');
const cssInput = document.querySelector('.css-input');
const jsInput = document.querySelector('.js-input');
const resultIframe = document.querySelector('.result-iframe');
const output = document.querySelector('.result-output')

function renderOutput() {
  const htmlContent = htmlInput.value
  const cssContent = cssInput.value 
  const jsContent = jsInput.value 
  
  const iframeContent = `<html>
    <head>
      <style>${cssContent}</style>
    </head>
    <body>
      ${htmlContent}
      <script>${jsContent}</script>
    </body>
  </html> `
  
  resultIframe.srcdoc = iframeContent
  
}
html.addEventListener('click', renderOutput)
css.addEventListener('click', renderOutput)
js.addEventListener('click', renderOutput)

htmlInput.addEventListener('input', renderOutput)
cssInput.addEventListener('input', renderOutput)
jsInput.addEventListener('input', renderOutput)



renderOutput()

html.addEventListener('click', () => {
  htmlInput.style.display = 'block'
  cssInput.style.display = 'none'
  jsInput.style.display = 'none'
  output.style.display = 'none'
})

css.addEventListener('click', () => {
  htmlInput.style.display = 'none'
  cssInput.style.display = 'block'
  jsInput.style.display = 'none'
  output.style.display = 'none'
})

js.addEventListener('click', () => {
  htmlInput.style.display = 'none'
  cssInput.style.display = 'none'
  jsInput.style.display = 'block'
  output.style.display = 'none'
})

result.addEventListener('click', () => {
  htmlInput.style.display = 'none'
  cssInput.style.display = 'none'
  jsInput.style.display = 'none'
  output.style.display = 'block'
})