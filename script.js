const toggleButton = document.getElementById("theme-change");
const body = document.body;
const allContainers = document.querySelectorAll("div")
allContainers.forEach(element => {
    element.classList.add("hidden")
    element.classList.add("common")
})
const all_links = document.querySelectorAll("a")
all_links.forEach(element => {
    element.classList.add("common")
})
const all = document.querySelectorAll(".common")
const hidden = document.querySelectorAll(".hidden")
// var rect = div4.getBoundingClientRect()
const showBox = window.innerHeight * 0.8
function themeSwitch()
{
    body.classList.toggle("dark-mode")
    all.forEach(element => {
        element.classList.toggle("dark-mode")
    })
    if (body.classList.contains("dark-mode"))
    {
        toggleButton.textContent = "☀️";
    }
    else
    {
        toggleButton.textContent = "🌙";
    }
}
function showElement()
{
    hidden.forEach(element => {
        if (element.getBoundingClientRect().top < showBox)
        {
            element.classList.remove("hidden")
        }
        else
        {
            element.classList.add("hidden")
        }
    })
    // alert(rect.top)
    
}
toggleButton.addEventListener("click", themeSwitch);
window.addEventListener('scroll', showElement)
showElement()