// Menu Tags Animation

const activeTag = document.querySelector("#active-tag");
const menuTags = document.querySelectorAll(".menu-tag");

menuTags.forEach((tag, index) => {
    tag.addEventListener("click", () => {
        gsap.to("#active-tag", {
            x: `${15.5 * index}vw`,
            ease: "power4.out",
            duration: 1,
        });

        gsap.to(".tag-content", {
            x: `-${100*index}vw`
        });
    });
});

// Menu Card Animation

const menuCards = document.querySelectorAll(".menu-card");

menuCards.forEach((menuCard) => {
    const menuItemImg = menuCard.children[0];
    const menuItemDet = menuCard.children[1].children[1];

    // mouse enter

    menuCard.addEventListener("mouseenter", () => {    
        gsap.to(menuItemImg, {
            height: "70%",
            duration: 0.5,
        });
        
        gsap.to(menuItemDet, {
            y: "-5vw",
            duration: 0.6,
        });
    });
    
    // mouse leave
    
    menuCard.addEventListener("mouseleave", () => {
        gsap.to(menuItemImg, {
            height: "80%"
        });

        gsap.to(menuItemDet, {
            y: 0,
            duration: 0.7,
        });
    });
});

// Orders Page
// This will add Orders in the Orders List

let empty = true;

const orderBtns = document.querySelectorAll(".order-btn");

orderBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const parent = btn.closest(".tag-item") || btn.closest(".menu-card");
        
        let name, image, price;

        // to get the dets of the item

        if (parent.classList.contains("tag-item")) {
            // For tag item
            name = parent.querySelector(".tag-item-dets h1").innerText;
            image = parent.querySelector("img").getAttribute("src");
            price = parent.querySelector(".tag-item-dets .tag-item-det p span").innerText;
        } else if (parent.classList.contains("menu-card")) {
            // For menu card
            name = parent.querySelector(".menu-item-bottom .menu-item-name h1").innerText;
            image = parent.querySelector(".menu-item-img img").getAttribute("src");
            price = parent.querySelector(".menu-item-bottom .menu-item-dets p span").innerText;
        }

        addNewOrder(name, image, price);
        addOrderInCheckout(name);
        updateTotalAmount(price);
        revealCheckout();
    });
});

function addNewOrder(name, image, price) {
    const ordersList = document.querySelector(".orders-list");
    const newOrder = document.createElement("div");

    newOrder.innerHTML = `
        <div class="order">
           <div class="order-left">
            <div class="order-img"><img src=${image} alt=""></div>
                <div class="order-name">
                    <h1>${name}</h1>
                </div>
            </div> 
            <div class="order-right">
                <h1>Amount</h1>
                <p>${price}</p>
            </div>
        </div>
    `;

    ordersList.appendChild(newOrder);
}

function addOrderInCheckout(name) {
    const myOrders = document.querySelector(".checkout .checkout-top .my-orders .my-orders-list");
    
    const newOrder = document.createElement("p");

    newOrder.innerText = name;

    myOrders.appendChild(newOrder);
}

function revealCheckout() {
    // removes the empty cart page from the screen
    document.querySelector("#empty-cart").closest(".order").style.display = "none";

    // add the checkout menu
    
    const checkout = document.querySelector(".checkout");

    // checkout.classList.remove("hide");
    const ordersList = document.querySelector(".orders-list");
    checkout.style.display = "flex";
    ordersList.style.width = "70vw";
}

// To get the total amount

let amount = 0;
function updateTotalAmount(price) {
    const totalAmount = document.querySelector(".total-amount span");
    amount += Number(price);
    totalAmount.innerHTML = amount;
}

// Footer animation

const footer = document.querySelector(".footer");

gsap.to(footer, {
    bottom: "3%",
    duration: 0.6,
    scrollTrigger: {
        trigger: ".orders-page",
        scroller: "body",
        start: "top 0",
        end: "top 5%",
        // scrub: 1,
        toggleActions: "play none none reverse",
    }
});