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


htmlInput.addEventListener('input', () => {
  const htmlContent = htmlInput.value
  localStorage.setItem('htmlContent', htmlContent)
})
window.addEventListener('load', () => {
  const savedHtmlContent = localStorage.getItem('htmlContent');
  if (savedHtmlContent) {
    htmlInput.value = savedHtmlContent;
  }
}); 

cssInput.addEventListener('input', () => {
  const cssContent = cssInput.value
  localStorage.setItem('cssContent', cssContent)
})
window.addEventListener('load', () => {
  const savedCssContent = localStorage.getItem('cssContent');
  if (savedCssContent) {
    cssInput.value = savedCssContent;
  }
});

jsInput.addEventListener('input', () => {
  const jsContent = jsInput.value
  localStorage.setItem('jsContent', jsContent)
})
window.addEventListener('load', () => {
  const savedjsContent = localStorage.getItem('jsContent');
  if (savedjsContent) {
    jsInput.value = savedjsContent;
  }
});

htmlInput.addEventListener('input', () => {
  const htmlContent = htmlInput.value
  localStorage.setItem('htmlContent', htmlContent)
})
window.addEventListener('load', () => {
  const savedHtmlContent = localStorage.getItem('htmlContent');
  if (savedHtmlContent) {
    htmlInput.value = savedHtmlContent;
  }
});


