document.body.querySelectorAll('p').forEach(element => {
    element.innerText = element.innerText.replace(/l|r/g, 'w')
});