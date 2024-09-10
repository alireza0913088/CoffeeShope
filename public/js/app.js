const toggleThemeBtn = document.querySelectorAll(".toggle-theme");
for (let i = 0; i < toggleThemeBtn.length; i++) {
  toggleThemeBtn[i].addEventListener("click", () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      // let theme_content = document.getElementById("theme-content");
      // theme_content.innerHTML = "تم تیره";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      // let theme_content = document.getElementById("theme-content");
      // theme_content.innerHTML = "تم روشن";
    }
  });
}

// my code///--------->

// menu section\\\\\\\\\\
let shopBtn = document.querySelector("#shopBtn");
let subMenu = document.querySelector("#subMenu");

let menuBox = document.querySelector("#menuBox");
let menuBtn = document.querySelector("#menuBtn");
let closeBtn = document.querySelector("#closeBtn");
let back_cover_menu = document.querySelector("#back-cover-menu");
menuBtn.addEventListener("click", () => {
  menuBox.classList.remove("translate-x-full");
  menuBox.classList.remove("hidMenuMobile");
  menuBox.classList.add("showMenuMobile");
  back_cover_menu.classList.remove("hid");
  back_cover_menu.classList.remove("hidden");
});


closeBtn.addEventListener("click", () => {
  menuBox.classList.add("hidMenuMobile");
  menuBox.classList.remove("showMenuMobile");
  back_cover_menu.classList.add("hid");
});
back_cover_menu.addEventListener("click", () => {
  menuBox.classList.add("hidMenuMobile");
  menuBox.classList.remove("showMenuMobile");
  back_cover_menu.classList.add("hid");
});
shopBtn.addEventListener("click", () => {
  subMenu.classList.toggle("showAndHidden");
  shopBtn.classList.toggle("active");
});
// _________________________________________/_/\
let back_cover_cart=document.querySelector("#back-cover-cart");
let cartBtn = document.querySelector("#cartBtn");
let close_cart = document.getElementById("close-cart");
cartBtn.addEventListener("click", () => {
  document.querySelector("#cart-box").classList.remove("-translate-x-full");
  document.querySelector("#cart-box").classList.remove("hidCartMobile");
  document.querySelector("#cart-box").classList.add("showCartMobile");
  back_cover_cart.classList.remove("hid");
  back_cover_cart.classList.remove("hidden");
});
close_cart.addEventListener("click", () => {
  document.querySelector("#cart-box").classList.add("hidCartMobile");
  document.querySelector("#cart-box").classList.remove("showCartMobile");
  back_cover_cart.classList.add("hid");
  
});
back_cover_cart.addEventListener("click", () => {
  document.querySelector("#cart-box").classList.add("hidCartMobile");
  document.querySelector("#cart-box").classList.remove("showCartMobile");
  back_cover_cart.classList.add("hid");
  
});




// ============================================
