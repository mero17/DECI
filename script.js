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
function themeSwitch()
{
    document.getElementById("newswitch").classList.toggle("dark-mode")
    body.classList.toggle("dark-mode")
    document.getElementById("sun_icon").classList.toggle("dark-mode")
    document.getElementById("moon_icon").classList.toggle("dark-mode")
    document.getElementById("theme-change").classList.toggle("dark-mode")
    all.forEach(element => {
        element.classList.toggle("dark-mode")
    })
    if (body.classList.contains("dark-mode"))
    {
        document.getElementById("moon").classList.add("dark-mode")
        document.getElementById("sun").classList.remove("light-mode")
        document.getElementById("switch").classList.add("dark-mode")
    }
    else
    {
        document.getElementById("moon").classList.remove("dark-mode")
        document.getElementById("sun").classList.add("light-mode")
        document.getElementById("switch").classList.remove("dark-mode")
    }
}
function showElement()
{
    var showBox = window.innerHeight * 0.9
    hidden.forEach(element => {
        if (element.getBoundingClientRect().top -50 < showBox)
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
