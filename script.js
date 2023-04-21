console.log("script work")
uppercase.addEventListener("click",() => {
    console.log("Transforming to uppercse")
    inpText.value = inpText.value.toUpperCase()
})

lowercase.addEventListener("click",() => {
    console.log("Transforming to lowercase")
    inpText.value = inpText.value.toLowerCase()
})

removespace.addEventListener("click",() => {
    console.log("Remove Extra Spaces")
    inpText.value = inpText.value.replace(/\s+/g,' ').trim();
})

removeline.addEventListener("click",() => {
    console.log("Remove Extra Line")
    inpText.value = inpText.value.replace(/\n+/g,'\n').trim();
})

inpText.addEventListener("click",() => {
    console.log("changed")
    char.innerText = inpText.value.length
    word.innerText = inpText.value.trim().split(" ").length
})