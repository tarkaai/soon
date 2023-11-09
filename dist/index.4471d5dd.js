const inputEmail=document.querySelector(".input-email"),btnSubmit=document.querySelector(".btn-submit"),outputMsg=document.querySelector(".output-message"),darkModeToggle=document.getElementById("dark-mode-checkbox"),root=document.documentElement,validateEmail=e=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|mil|edu|biz|gov|info|name|museum|[a-zA-Z]{2})$/.test(e);btnSubmit.addEventListener("click",(function(e){e.preventDefault();let t="";const o=inputEmail.value;return""===o?(t="Whoops! It looks like you forgot to add your email",outputDesign("error")):/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|mil|edu|biz|gov|info|name|museum|[a-zA-Z]{2})$/.test(o)?(t="Thank you for subscribing!",outputDesign("success"),inputEmail.value=""):(t="Please provide a valid email.",outputDesign("error")),outputMsg.textContent=t}));const outputDesign=function(e){"error"===e?(outputMsg.style.color="var(--light-red)",inputEmail.style.borderColor="var(--light-red)"):"success"===e&&(inputEmail.style.borderColor="var(--pale-blue)",outputMsg.style.color="var(--success)")},darkMode=function(){!0===darkModeToggle.checked?root.classList.add("dark-mode"):root.classList.remove("dark-mode")};darkModeToggle.addEventListener("change",darkMode),window.addEventListener("load",darkMode);
//# sourceMappingURL=index.4471d5dd.js.map
