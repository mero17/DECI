const toggleButton = document.getElementById("theme-change");
const body = document.body;
const div1 = document.getElementById("cont1")
const div2 = document.getElementById("cont2")
const div3 = document.getElementById("cont3")
const link_1 = document.getElementById("link_1")
const link_2 = document.getElementById("link_2")
function themeSwitch()
{
    body.classList.toggle("dark-mode")
    div1.classList.toggle("dark-mode")
    div2.classList.toggle("dark-mode")
    div3.classList.toggle("dark-mode")
    link_1.classList.toggle("dark-mode")
    link_2.classList.toggle("dark-mode")
    if (body.classList.contains("dark-mode"))
    {
        toggleButton.textContent = "☀️";
    }
    else
    {
        toggleButton.textContent = "🌙";
    }
    
}
toggleButton.addEventListener("click", themeSwitch);
