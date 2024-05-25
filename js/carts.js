const userProductBox=document.querySelector('.container-box');
const items=JSON.parse(localStorage.getItem('items'));
const totalPrice=document.getElementById('totalPrice');
const favBox=document.querySelector('.swiper-wrapper')
let favItems=JSON.parse(localStorage.getItem('favourite')) 


function drawUserProduct(){
    userProductBox.innerHTML=''
    for(let i in items){

        userProductBox.innerHTML+=`
        <div class="ele">
            <img src="${items[i].img}" alt="product1" height="150px">
                <div class="ele-content">
                        <p>Product : ${items[i].name}</p>
                        <p>Category: ${items[i].category} </p>
                        <p>Price: ${items[i].price}</p>
                        <div class="ele-content2">
                    <div class="plus">
                        <span>${items[i].count}</span>
                        <a href="#" class="pluss"><i class="fas fa-plus text-success" onclick="plusBtn(${items[i].id})"></i></a>
                        <a href="#" class="minus"><i class="fas fa-minus text-danger" onclick="minusBtn(${items[i].id})"></i></a>
                    </div>
                    <button class="btn btn-danger" onclick="removeItems(${items[i].id})">Remove</button>
                    </div>
                </div> <!-- End of ele-content -->
        </div> <!-- End of elemant -->
        `
    }
}
drawUserProduct()

function getTotalPrice(){
    let sum=0;
    let prices=items.map((ele)=>{
        let price=ele.price.split(' ')
        return parseInt(price[0]) ;
    })
    for(let i in items){
        sum += prices[0] * parseInt(items[i].count) 
    }
    totalPrice.innerHTML=sum+'$';
}
 getTotalPrice()

 function removeItems(id){
   var index= items.findIndex((x)=>{
    return x.id==id
 })
 items.splice(index,1)
 localStorage.setItem('items',JSON.stringify(items))
 console.log(items);
 drawUserProduct()
 getTotalPrice()
}
function plusBtn(id , e){
    ele=items.find((x)=>{
       return x.id==id
    })
    ele.count++;
    localStorage.setItem('items',JSON.stringify(items))
    drawUserProduct()
    getTotalPrice()
}

function minusBtn(id){
    ele=items.find((x)=>{
       return x.id==id
    })
            if(ele.count !=1){
                ele.count--;
                localStorage.setItem('items',JSON.stringify(items))
                drawUserProduct()
                getTotalPrice()
            }else{
                let index= items.indexOf(ele)
                items.splice(index,1)
                localStorage.setItem('items',JSON.stringify(items))
                drawUserProduct()
                getTotalPrice()
            }
    }

function drawFav(){
    favBox.innerHTML='';
    for(let i in favItems){
        favBox.innerHTML+=`
        <div class="swiper-slide" style="background-color:gainsboro;height:345px; width:366.667px;border-radius:20px;display:flex;flex-direction:column; transition:0.5s;">
        <div class="swiper-img" style="width:200px; height:200px;position: absolute; top:20px">
                <img src="${favItems[i].img}" alt="${favItems[i].name}" >
        </div>
        <div class="card-body2">
            <div class="card-text" style="padding-top:15px;  position: absolute;top: 246px; left: 36px; ">
                <p>Product : ${favItems[i].name}</p> 
                <p>Category : ${favItems[i].category}</p>
            </div> <!-- Card text -->
                <a href="#" ><i class="fas fa-heart" style="font-size: 2rem; color:red;  position: absolute; ; bottom:14px; right:14px" onclick='removeFavourite(${favItems[i].id})'  style="backgound-color: red;"></i></a>
        </div> <!-- Card body -->
    </div>
        `
    }
}
drawFav()

function removeFavourite(id){
    let index =favItems.findIndex((x)=>{
      return  x.id==id
    })

    favItems.splice(index,1)
    localStorage.setItem('favourite',JSON.stringify(favItems))
    console.log(favItems)
    

    addEventListener('click',(e)=> e.preventDefault())
    location.reload()
    drawFav()

}

function size(){
        let width;
    if(window.innerWidth>=993){
        width =3
    } else if(window.innerWidth>=560){
        width =2
    }else{
        width=1
    }
    var swiper = new Swiper(".mySwiper", {
        
        slidesPerView: width,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
size()

let minus=document.querySelectorAll('.fa-minus')
let plus=document.querySelectorAll('.plus')
console.log(minus,plus)

minus.forEach(ele=>{
    ele.addEventListener('click',(e)=>{
        e.preventDefault();
    })
})
plus.forEach(ele=>{
    ele.addEventListener('click',(e)=>{
        e.preventDefault();
    })
})


