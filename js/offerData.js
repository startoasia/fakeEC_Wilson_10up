let offerData = [{
        id: "teiki1",
        src: "./images/offer/offer_teiki1.webp",
        txt: "定期一入"
    },
    {
        id: "teiki2",
        src: "./images/offer/offer_teiki2.webp",
        txt: "定期二入"
    },
    {
        id: "single1",
        src: "./images/offer/offer_single1.webp",
        txt: "單品一入"
    },
    {
        id: "single2",
        src: "./images/offer/offer_single2.webp",
        txt: "單品二入"
    },
    {
        id: "teiki1c",
        src: "./images/cart/cart_teiki1.webp",
        txt: "定期一入cart",
        acsCode: '4560313623038-T'
    },
    {
        id: "teiki2c",
        src: "./images/cart/cart_teiki2.webp",
        txt: "定期二入cart",
        acsCode: 'venus-T2'
    },
    {
        id: "single1c",
        src: "./images/cart/cart_single1.webp",
        txt: "單品一入cart",
        acsCode: 'venus1'
    },
    {
        id: "single2c",
        src: "./images/cart/cart_single2.webp",
        txt: "單品二入cart",
        acsCode: 'venus2'
    },
];

// 下拉式選單數值改變時即時更新圖片
function changeValue(e) {
    let Select = document.querySelector(`${e}`);
    console.log(Select.value);

    let Offer = Select.nextElementSibling;
    let Product = Offer.querySelector('.Product');
    let SubmitBtn = document.querySelector('.submitBtn')

    for (let i = 0; i < offerData.length; i++) {
        if (offerData[i].id == Select.value) {
            Product.innerHTML = `<img src="${offerData[i].src}" alt="">`;
            SubmitBtn.innerHTML = `
                <a class="scrollToCart" href="#lp_form" onclick="acsSelect('${offerData[i].acsCode}')">
                    <img src="./images/cart/submit.webp" alt="">
                </a>
            `
        }
    }
    console.log(Product);
    scrollToCart();
}

//前往購物車
function goToCart(e) {
    let Select = document.querySelector(`${e}`);
    console.log(Select.value);

    let LP = document.querySelector('#LP');
    let Cart = document.querySelector('#cart');

    LP.style.display = 'none';
    Cart.style.display = 'block';

    window.scrollTo({ top: 0, behavior: "smooth" });

    let AllValue = document.querySelector('#AllValue');
    let optionToSelect = AllValue.querySelector(`option[value="${Select.value}c"]`);
    optionToSelect.selected = true;

    let Offer = AllValue.nextElementSibling;
    let Product = Offer.querySelector('.Product');

    let SubmitBtn = document.querySelector('.submitBtn')

    for (let i = 0; i < offerData.length; i++) {
        if (offerData[i].id == AllValue.value) {
            Product.innerHTML = `<img src="${offerData[i].src}" alt="">`;
            SubmitBtn.innerHTML = `
                <a class="scrollToCart" href="#lp_form" onclick="acsSelect('${offerData[i].acsCode}')">
                    <img src="./images/cart/submit.webp" alt="">
                </a>
            `
        }
    }
    console.log(Product);
    scrollToCart();
}

//回到LP
function backToHome() {
    let LP = document.querySelector('#LP');
    let Cart = document.querySelector('#cart');
    let LPform = document.querySelector('#lp_form');

    Cart.style.display = 'none';
    LP.style.display = 'block';
    window.scrollTo({ top: 0, behavior: "smooth" });

    LPform.style.display = 'none';
}

// 滾動到購物車
function scrollToCart() {
    let LPform = document.querySelector('#lp_form');
    let ScrollToCart = document.querySelector('.scrollToCart');

    ScrollToCart.addEventListener('click', function(e) {
        e.preventDefault();
        LPform.style.display = 'block';
        setTimeout(() => {
            window.scrollTo({
                top: LPform.offsetTop,
                behavior: "smooth"
            });
        }, 500)
    })
}