// Sticky Navbar and Back to Top Button

const navBar = document.querySelector(".navbar");
const backTop = document.querySelector(".backtotop");

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navBar.classList.add("sticky-navbar");
    }
    else {
        navBar.classList.remove("sticky-navbar");
    }

    if (scrollHeight > 450) {
        backTop.classList.add('backTop');
    }
    else {
        backTop.classList.remove('backTop');
    }

});




// Display Portfolio Menu 

const menu = [
    {
        id: 1,
        img: "img/website_1.png",
        title: "isomeric perspective mock-up",
        category: "web",
    },
    {
        id: 2,
        img: "img/website_2.png",
        title: "time zone app ui",
        category: "apps",
    },
    {
        id: 3,
        img: "img/website_3.png",
        title: "viro media players ui",
        category: "apps",
    },
    {
        id: 4,
        img: "img/website_4.png",
        title: "blog/magazine useable icons",
        category: "icons",
    },
]

const sectionCenter = document.querySelector(".section-center");
const btnHolder = document.querySelector(".btn-holder");

window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item){

        return `
            <div class="cell col-lg-6 col-md-6 col-sm-12">
                <img src=${item.img} alt=${item.title}>
                <h5> ${item.title} </h5>
            </div>
        `

    });

    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}


function displayMenuButtons() {
    const categories = menu.reduce(function(values, item){
        if (!values.includes(item.category)) {
        values.push(item.category);
        }
        return values;
    },["all"]);

    const categoryBtns = categories.map(function(category){
        return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`
    }).join("");

    btnHolder.innerHTML = categoryBtns;

    const filterBtns = document.querySelectorAll(".filter-btn");

    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if (menuItem.category === category) {
                return menuItem;
            }

        });

    if (category === "all") {
      displayMenuItems(menu);
    }
    else {
      displayMenuItems(menuCategory);
    }


  });
  });
}