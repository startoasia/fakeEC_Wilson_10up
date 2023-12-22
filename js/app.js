// 為每筆資料加上條件篩選的四種數值 a:滿意度 b:年齡 c:性別 img:圖片 若default => 0
function addABC() {
    for (let i = 0; i < data.length; i++) {
        if (data[i].satisfacion == '1') {
            data[i].a = 1;
        } else if (data[i].satisfacion == '2') {
            data[i].a = 2;
        } else if (data[i].satisfacion == '3') {
            data[i].a = 3;
        } else if (data[i].satisfacion == '4') {
            data[i].a = 4;
        } else if (data[i].satisfacion == '5') {
            data[i].a = 5;
        } else {
            data[i].a = 0;
        }

        if (data[i].year == '10~19') {
            data[i].b = 1;
        } else if (data[i].year == '20~29') {
            data[i].b = 2;
        } else if (data[i].year == '30~39') {
            data[i].b = 3;
        } else if (data[i].year == '40~49') {
            data[i].b = 4;
        } else if (data[i].year == '50~59') {
            data[i].b = 5;
        } else {
            data[i].b = 0;
        }

        if (data[i].gender == '男性') {
            data[i].c = 2;
            data[i].img = "./images/man.webp"
        } else if (data[i].gender == '女性') {
            data[i].c = 1;
            data[i].img = "./images/woman.webp"
        } else {
            data[i].c = 0;
            data[i].img = "./images/man.webp"
        }
    }
    console.log(data)

    let xxx = addStars();

    // 原始畫面
    let render = document.querySelector(".carousel-inner");
    let result = "";
    for (let i = 0; i < data.length; i++) {
        if (i == 0) {
            result += `               
                    <div class="carousel-item active">
                        <div class="bg--comment" data-id="${i}">
                            <div class="card-flex card-mb">
                                <img class="gender_icon" src="${data[i].img}">
                                <span class="card-name">${data[i].name} (${data[i].gender} / ${data[i].year})</span>
                            </div>
                            <div class="card-mb">
                                <span class="card-sat">滿意度 <span class="satStars">${xxx[i]}</span> </span>
                            </div>
                            <span class="card-txt">${data[i].text}</span>
                        </div>
                    </div>`
        } else {
            result += `
                    <div class="carousel-item">
                        <div class="bg--comment" data-id="${i}">
                            <div class="card-flex card-mb">
                                <img class="gender_icon" src="${data[i].img}">
                                <span class="card-name">${data[i].name} (${data[i].gender} / ${data[i].year})</span>
                            </div>
                            <div class="card-mb">
                                <span class="card-sat">滿意度 <span class="satStars">${xxx[i]}</span> </span>
                            </div>
                            <span class="card-txt">${data[i].text}</span>
                        </div>
                    </div>`
        }
    };
    render.innerHTML = result;
}
addABC();


// click render
function processFormData() {
    const nameEl = document.getElementById("name");
    let nameVal = nameEl.value;

    const genderEl = document.querySelector('input[name=gender]:checked');
    let genderVal = genderEl.value;

    let img = ''
    if (genderVal == '女性') {
        img = "./images/woman.webp"
    } else {
        img = "./images/man.webp"
    }

    const yearEl = document.getElementById("yearold");
    let yearVal = yearEl.value;

    const satisfacionEl = document.querySelector('input[name=stars]:checked');
    let satisfacionVal = satisfacionEl.value;

    const textEl = document.getElementById("textarea");
    let textVal = textEl.value;

    let newVal = {
        name: nameVal,
        gender: genderVal,
        year: yearVal,
        satisfacion: satisfacionVal,
        text: textVal,
        img: img
    }
    console.log(newVal)

    data.unshift(newVal)
    console.log(data)

    let nameArr = []; // 姓名
    let genderArr = []; // 性別
    let yearArr = []; // 年齡
    let satisfacionArr = []; // 滿意度
    let textArr = []; // 留言
    let imgArr = []; //性別圖片

    for (let i = 0; i < data.length; i++) {
        nameArr.push(data[i].name)
        genderArr.push(data[i].gender)
        yearArr.push(data[i].year)
        satisfacionArr.push(data[i].satisfacion)
        textArr.push(data[i].text)
        imgArr.push(data[i].img)
    }

    // 儲存至localstorage
    localStorage.setItem("name", nameArr);
    localStorage.setItem("gender", genderArr);
    localStorage.setItem("year", yearArr);
    localStorage.setItem("satisfacion", satisfacionArr);
    localStorage.setItem("text", textArr);
    localStorage.setItem("img", imgArr);

    // 從localstorage取出
    let nameL = localStorage.getItem("name");
    let genderL = localStorage.getItem("gender");
    let yearL = localStorage.getItem("year");
    let satisfacionL = localStorage.getItem("satisfacion");
    let textL = localStorage.getItem("text");
    let imgL = localStorage.getItem("img");

    // 分割
    let nameSplit = nameL.split(",");
    let genderSplit = genderL.split(",");
    let yearSplit = yearL.split(",");
    let satisfacionSplit = satisfacionL.split(",");
    let textSplit = textL.split(",");
    let imgSplit = imgL.split(",");

    // render
    let render = document.querySelector(".carousel-inner");
    let result = "";

    let xxx = addStars();

    for (let i = 0; i < nameSplit.length; i++) {
        if (i == 0) {
            result += `               
                <div class="carousel-item active">
                    <div class="bg--comment">
                        <div class="card-flex card-mb">
                            <img class="gender_icon" src="${imgSplit[i]}">
                            <span class="card-name">${nameSplit[i]} (${genderSplit[i]} / ${yearSplit[i]})</span>
                        </div>
                        <div class="card-mb">
                        <span class="card-sat">滿意度 <span class="satStars">${xxx[i]}</span> </span>
                        </div>
                        <span class="card-txt">${textSplit[i]}</span>
                    </div>
                </div>
            `
        } else {
            result += `
                <div class="carousel-item">
                    <div class="bg--comment">
                        <div class="card-flex card-mb">
                            <img class="gender_icon" src="${imgSplit[i]}">
                            <span class="card-name">${nameSplit[i]} (${genderSplit[i]} / ${yearSplit[i]})</span>
                        </div>
                        <div class="card-mb">
                        <span class="card-sat">滿意度 <span class="satStars">${xxx[i]}</span> </span>
                        </div>
                        <span class="card-txt">${textSplit[i]}</span>
                    </div>
                </div>
            `
        }
    };
    console.log(result)

    render.innerHTML = result;

    $(".box").addClass("circle_animate");
    $(".reload").fadeIn(0);
    setTimeout(() => {
        $(".box").removeClass("circle_animate");
        $(".reload").fadeOut(1000);
    }, 1500);
    setTimeout(() => {
        // alert("感謝填寫");
    }, 2400);
}

let select_Sat = document.querySelector('#floatingSelect1'),
    select_Year = document.querySelector('#floatingSelect2'),
    select_Gender = document.querySelector('#floatingSelect3');

// 點擊篩選器觸發 取得value
function getSelectVal() {
    let select_Sat_Val = select_Sat.value; //取得選擇的value
    // console.log('選擇的滿意度為：', select_Sat_Val);
    let point_Sat = ''; //對不同的滿意度個別賦值

    if (select_Sat_Val == '1') {
        point_Sat = 1;
        console.log(`滿意度賦值: ${point_Sat}`)
    } else if (select_Sat_Val == '2') {
        point_Sat = 2;
        console.log(`滿意度賦值: ${point_Sat}`)
    } else if (select_Sat_Val == '3') {
        point_Sat = 3;
        console.log(`滿意度賦值: ${point_Sat}`)
    } else if (select_Sat_Val == '4') {
        point_Sat = 4;
        console.log(`滿意度賦值: ${point_Sat}`)
    } else if (select_Sat_Val == '5') {
        point_Sat = 5;
        console.log(`滿意度賦值: ${point_Sat}`)
    } else if (select_Sat_Val == 'default') {
        point_Sat = 0;
        console.log(`滿意度賦值: ${point_Sat}`)
    }

    let select_Year_Val = select_Year.value;
    // console.log('選擇的年齡為：', select_Year_Val)
    let point_Year = '';

    if (select_Year_Val == '10~19') {
        point_Year = 1;
        console.log(`年齡賦值: ${point_Year}`)
    } else if (select_Year_Val == '20~29') {
        point_Year = 2;
        console.log(`年齡賦值: ${point_Year}`)
    } else if (select_Year_Val == '30~39') {
        point_Year = 3;
        console.log(`年齡賦值: ${point_Year}`)
    } else if (select_Year_Val == '40~49') {
        point_Year = 4;
        console.log(`年齡賦值: ${point_Year}`)
    } else if (select_Year_Val == '50~59') {
        point_Year = 5;
        console.log(`年齡賦值: ${point_Year}`)
    } else {
        point_Year = 0;
        console.log(`年齡賦值: ${point_Year}`)
    }

    let select_Gender_Val = select_Gender.value;
    // console.log('選擇的性別為：', select_Gender_Val)
    let point_gender = '';

    if (select_Gender_Val == '男性') {
        point_gender = 2;
        console.log(`性別賦值: ${point_gender}`)
    } else if (select_Gender_Val == '女性') {
        point_gender = 1;
        console.log(`性別賦值: ${point_gender}`)
    } else if (select_Gender_Val == 'default') {
        point_gender = 0;
        console.log(`性別賦值: ${point_gender}`)
    }
    dataFilter(point_Sat, point_Year, point_gender); //將賦值丟進function內做邏輯判斷
}

//篩選輸出結果
function dataFilter(a, b, c) {
    // console.log(a, b, c)
    let Filter = data.filter(function(item, index, array) {
        // console.log(item.a, item.b, item.c)
        if (a == 0 && b == 0 && c == 0) {
            return array;
        } else if (a !== 0 && b !== 0 && c !== 0) {
            return (item.a == a) && (item.b == b) && (item.c == c);
        } else if (a !== 0 && b == 0 && c == 0) {
            return item.a == a;
        } else if (a == 0 && b !== 0 && c == 0) {
            return item.b == b;
        } else if (a == 0 && b == 0 && c !== 0) {
            return item.c == c;
        } else if (a !== 0 && b !== 0 && c == 0) {
            return (item.a == a) && (item.b == b);
        } else if (a == 0 && b !== 0 && c !== 0) {
            return (item.b == b) && (item.c == c);
        } else if (a !== 0 && b == 0 && c !== 0) {
            return (item.a == a) && (item.c == c);
        }
    })
    console.log(Filter)
    let render = document.querySelector(".carousel-inner");
    let result = "";

    addStars();

    for (let i = 0; i < Filter.length; i++) {
        if (i == 0) {
            result += `               
                <div class="carousel-item active">
                    <div class="bg--comment">
                        <div class="card-flex card-mb">
                            <img class="gender_icon" src="${Filter[i].img}">
                            <span class="card-name">${Filter[i].name} (${Filter[i].gender} / ${Filter[i].year})</span>
                        </div>
                        <div class="card-mb">
                            <span class="card-sat">滿意度 <span class="satStars">${Filter[i].star}</span> </span>
                        </div>
                        <span class="card-txt">${Filter[i].text}</span>
                    </div>
                </div>
            `
        } else {
            result += `
            <div class="carousel-item">
                <div class="bg--comment">
                    <div class="card-flex card-mb">
                    <img class="gender_icon" src="${Filter[i].img}">
                        <span class="card-name">${Filter[i].name} (${Filter[i].gender} / ${Filter[i].year})</span>
                    </div>
                    <div class="card-mb">
                        <span class="card-sat">滿意度 <span class="satStars">${Filter[i].star}</span> </span>
                    </div>
                    <span class="card-txt">${Filter[i].text}</span>
                </div>
            </div>
            `
        }
    };
    console.log(result)

    render.innerHTML = result;

    $(".box").addClass("circle_animate");
    $(".reload").fadeIn(0);
    setTimeout(() => {
        $(".box").removeClass("circle_animate");
        $(".reload").fadeOut(1000);
    }, 1500);
    setTimeout(() => {
        // alert("感謝填寫");
    }, 2400);
}

function addStars() {

    let satStars = [];
    let count = ''
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].satisfacion; j++) {
            count += `<i class="fa fa-star"></i>`
        }
        satStars.push(count)
        data[i].star = count
        count = ''
    }
    return satStars;
}