let premieres =[
    {
        img:"https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/738x416.webp",
        name:"TED LASSO",
        embed:"https://www.youtube.com/embed/3u7EIiohs6U"
    },
    {
        img:"https://is5-ssl.mzstatic.com/image/thumb/7SeRlnCzKlgeqrg6-ixkig/738x416.webp",
        name:"SEE",
        embed:"https://www.youtube.com/embed/mwXK06A2sYM?controls=0"
        
    },
    {
        img:"https://is1-ssl.mzstatic.com/image/thumb/gkWjLqLfF8Pahc6a6Udtxg/738x416.webp",
        name:"SLOW HORSES",
        embed:"https://www.youtube.com/embed/O9ZJChzPn0U"
    },
    {
        img: "https://is3-ssl.mzstatic.com/image/thumb/EuF6BWsgBeic_Ap2qeAGBQ/738x416.webp" ,
        name:"ECHO",
        embed:"https://www.youtube.com/embed/rJ_CMFSaOO8"
    },
    {
        img: "https://is3-ssl.mzstatic.com/image/thumb/Auxgchkiva7ORjAQy9DP6w/738x416.webp" ,
        name:"MYTHIC QUIST",
        embed:"https://www.youtube.com/embed/BURYVH4V-WE"
    },
    {
        img:"https://is1-ssl.mzstatic.com/image/thumb/NuIOgsGJ11I4jRoa7-GbSA/738x416.webp",
        name:"BAD SISTERS",
        embed:"https://www.youtube.com/embed/IZUrhfCl0Xc"
    },
    {
        img:"https://is5-ssl.mzstatic.com/image/thumb/PWsYggMXgU6kQrxaB3MZPQ/738x416.webp",
        name:"SHANTARAM",
        embed:"https://www.youtube.com/embed/9SSHhQRsYcM"
    },
    {
        img:"https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
        name:"THE MORNING SHOW",
        embed:"https://www.youtube.com/embed/iJjp5p51Cow"
    },

]
console.log('ldksk');
let media = document.getElementById("premiere");
// media.innerHTML="asdsad"
// console.log(media);

premieres.forEach((el)=>{
    let div = document.createElement("div");
    div.setAttribute("class","media-element");
    let img= document.createElement("img");
    img.src=el.img;
    img.onclick = ()=>{
        localStorage.setItem("playMovie",JSON.stringify(el))
        // console.log();
        window.open("movies.html")
    }
    // let p =document.createElement("p");
    // p.innerText=el.name;
    // p.setAttribute("class","title")

    div.append(img)

    media.append(div)
})



let MostPopularData =[
    {
        img:"https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/738x416.webp",
        name:"TED LASSO"
    },
    {
        img:"https://is5-ssl.mzstatic.com/image/thumb/lgskq6n1xkUI5DOyA5tWWQ/738x416.webp",
        name:"EMANCIPATION"
    },
    {
        img:"https://is2-ssl.mzstatic.com/image/thumb/a_voEGGOjHGvUUhwrbStXQ/738x416.webp",
        name:"SPIRITED"
    },
    {
        img: "https://is2-ssl.mzstatic.com/image/thumb/IZLh7W9XMi2iYTPqqFwRYg/738x416.webp" ,
        name:"A CHARLIE BROWN CHRISTMAS"
    },
    {
        img: "https://is4-ssl.mzstatic.com/image/thumb/C7vq4me467uKBCWL8QZA6g/738x416.webp" ,
        name:"THE MOSQUITO COAST"
    },
    {
        img:"https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/738x416.webp",
        name:"FOR ALL MANKIND"
    },
    {
        img:"https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/738x416.webp",
        name:"Serverance"
    },
    {
        img:"https://is5-ssl.mzstatic.com/image/thumb/7SeRlnCzKlgeqrg6-ixkig/738x416.webp",
        name:"SEE"
    },
]

let MostPopular = document.getElementById("MostPopular");
// media.innerHTML="asdsad"
// console.log(media);

MostPopularData.forEach((element)=>{
    let div = document.createElement("div");
    div.setAttribute("class","media-element");
    let img= document.createElement("img");
    img.src=element.img;
    // let p =document.createElement("p");
    // p.innerText=el.name;
    // p.setAttribute("class","title")

    div.append(img)
console.log(div);
    MostPopular.append(div)
})

let EntireSeasonsData =[
    {
        img:"https://is2-ssl.mzstatic.com/image/thumb/SEsiWD2cTDShiJqUtRPAxg/738x416.webp",
        name:"The Shrink Next Door"
    },
    {
        img:"https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/738x416.webp",
        name:"Serverance"
    },
    {
        img:"https://is1-ssl.mzstatic.com/image/thumb/Tb1jarRHaWN_SFiMjZcDHw/738x416.webp",
        name:"PACHINKO"
    },
    {
        img:"https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/738x416.webp",
        name:"FOR ALL MANKIND"
    },
    {
        img: "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/738x416.webp" ,
        name:"BLACK BIRD"
    },
    {
        img:"https://is1-ssl.mzstatic.com/image/thumb/IyvoDdhWEjtSADaSryepIw/738x416.webp",
        name:"LOOT"
    },
    {
        img:"https://is5-ssl.mzstatic.com/image/thumb/NHLksWLSZpTcIw36-n7vWA/738x416.webp",
        name:"INVOSION"
    },
    {
        img:"https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/738x416.webp",
        name:"PREHISTORIC PLANET"
    },
    {
        img:"https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp",
        name:"TEHRAN"
    }
]

let EntireSeasons = document.getElementById("EntireSeasons");

EntireSeasonsData.forEach((e)=>{
    let div = document.createElement("div");
    div.setAttribute("class","media-element");
    let img= document.createElement("img");
    img.src=e.img;
    // let p =document.createElement("p");
    // p.innerText=el.name;
    // p.setAttribute("class","title")

    div.append(img)
// console.log(div);
    EntireSeasons.append(div)
})

let OriginalsData =[
    {
        img:"https://is5-ssl.mzstatic.com/image/thumb/lgskq6n1xkUI5DOyA5tWWQ/1478x832.webp",
        name:"EMANCIPATION"
    },
    {
        img:"https://is5-ssl.mzstatic.com/image/thumb/BG3rKYXaPe9KkpZOZUjj_w/1478x832.webp",
        name:"little america"
    },
    {
        img:"https://is4-ssl.mzstatic.com/image/thumb/ba3Q2gHzrcpC69JvKRy_bg/1478x832.webp",
        name:"Puppy Place"
    },
    {
        img:"https://is1-ssl.mzstatic.com/image/thumb/gkWjLqLfF8Pahc6a6Udtxg/738x416.webp",
        name:"SLOW HORSES"
    },
    {
        img: "https://is3-ssl.mzstatic.com/image/thumb/EuF6BWsgBeic_Ap2qeAGBQ/738x416.webp" ,
        name:"ECHO"
    },
    {
        img:"https://is2-ssl.mzstatic.com/image/thumb/a_voEGGOjHGvUUhwrbStXQ/738x416.webp",
        name:"SPIRITED"
    },
    {
        img:"https://is1-ssl.mzstatic.com/image/thumb/Ogd5vHGYkYpUIzgQCTqBXQ/739x416.webp",
        name:"CHICKEN"
    },
    {
        img: "https://is3-ssl.mzstatic.com/image/thumb/Auxgchkiva7ORjAQy9DP6w/738x416.webp" ,
        name:"MYTHIC QUIST"
    },
    {
        img:"https://is3-ssl.mzstatic.com/image/thumb/xEt4MZZlgE0IeQMnUSG65Q/739x416.webp",
        name:"circuit breakers"
    },
    {
        img:"https://is3-ssl.mzstatic.com/image/thumb/CUcDZ-At1_oNSxrwvuRguA/739x416.webp",
        name:"CAUSEWAY"
    }
]

let Originals = document.getElementById("Originals");

OriginalsData.forEach((letest)=>{
    let div = document.createElement("div");
    div.setAttribute("class","media-element");
    let img= document.createElement("img");
    img.src=letest.img;
    let p =document.createElement("p");
    p.innerText=letest.name;
    p.setAttribute("class","title")
    let desc = document.createElement("p");
    desc.innerText="Will Smith stars as an enslaved man on a journey to reunited with his family"
    div.append(img,p,desc)
// console.log(div);
    Originals.append(div)
})
let HitsData =[
    {
        img:"https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/31/30/9c/31309c13-aeee-fe56-ee48-381a4bec47fd/9230471d-171a-4347-8f1a-59267f718c32.lsr/739x416fe.webp",
        name:"Coming"
    },
    {
        img:"https://is1-ssl.mzstatic.com/image/thumb/Features122/v4/76/95/90/76959068-90b5-4f88-c342-5db27696da8e/8f0c8afb-a007-4426-b535-0aa57f4d6777.lsr/739x416fe.webp",
        name:"TRUTH"
    },
    {
        img:"https://is5-ssl.mzstatic.com/image/thumb/Features112/v4/8e/5f/ef/8e5fef83-e31c-6bfa-eae0-cc6a55bfdb61/33708d12-0019-435e-82c3-a861e0ddd2fe.lsr/739x416fe.webp",
        name:"HELLO TOMORROW"
    },
    {
        img: "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/b2/d8/d9/b2d8d98c-d95c-0c9b-6bec-494d1dba21e9/fd33af20-02e5-4807-9b6b-83a7f5635f0f.lsr/739x416fe.webp" ,
        name:"SERVANT"
    },
    {
        img:"https://is2-ssl.mzstatic.com/image/thumb/a_voEGGOjHGvUUhwrbStXQ/738x416.webp",
        name:"SPIRITED"
    },
    {
        img:"https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/26/f7/e8/26f7e8a4-1553-411a-f416-36d0fdfdc61f/739889b4-e3a3-42e3-ad99-da125f548d9c.lsr/739x416fe.webp",
        name:"THE WAR FOR FOOTBALL"
    },
    {
        img: "https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/54/00/68/54006836-b2c2-c27b-f43f-6c324c16ebd7/291dad5b-5bd9-4a67-b1a1-b8828fc73742.lsr/739x416fe.webp" ,
        name:"SHARPER"
    },
]
let Hits = document.getElementById("Hits");

HitsData.forEach((le)=>{
    let div = document.createElement("div");
    div.setAttribute("class","media-element");
    let img= document.createElement("img");
    img.src=le.img;
    // div.setAttribute("class","hitImg")
    
    div.append(img)
// console.log(div);
    Hits.append(div)
})

let HistoricalData =[
    {
        img:"https://is5-ssl.mzstatic.com/image/thumb/lgskq6n1xkUI5DOyA5tWWQ/738x416.webp",
        name:"Coming"
    },
    {
        img:"https://is1-ssl.mzstatic.com/image/thumb/Tb1jarRHaWN_SFiMjZcDHw/738x416.webp",
        name:"TRUTH"
    },
    {
        img:"https://is1-ssl.mzstatic.com/image/thumb/jvpbfkNAZaLIN3DZJUDX8Q/738x416.webp",
        name:"HELLO TOMORROW"
    },
    {
        img: "https://is2-ssl.mzstatic.com/image/thumb/vkRecJ7JSiYQecCMWMmzOA/738x416.webp" ,
        name:"SERVANT"
    },
    {
        img:"https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/738x416.webp",
        name:"SPIRITED"
    },
    {
        img:"https://is1-ssl.mzstatic.com/image/thumb/oANBVngpEJDvHRhdyozySA/738x416.webp",
        name:"THE WAR FOR FOOTBALL"
    },
    {
        img: "https://is3-ssl.mzstatic.com/image/thumb/3iAbZQ4pznOpDRenkvOhNA/738x416.webp" ,
        name:"SHARPER"
    },
]
let Historical = document.getElementById("Historical");

HistoricalData.forEach((l)=>{
    let div = document.createElement("div");
    div.setAttribute("class","media-element");
    let img= document.createElement("img");
    img.src=l.img;
    
    div.append(img)
// console.log(div);
    Historical.append(div)
})