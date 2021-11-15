
//Handle Memory
const baseMemory=document.getElementById('memory-base');
const extraMemory=document.getElementById('memory-extra');
const extraMemoryPrice=document.getElementById('extra-memory-price');
baseMemory.addEventListener('click',function(){
    extraMemoryPrice.innerText="0";  
    updateTotalPrice(); 
})

extraMemory.addEventListener('click',function(){
    extraMemoryPrice.innerText="180";
    updateTotalPrice();

})

//handle storage
const storage1=document.getElementById("extra-storage-1");
const storage2=document.getElementById("extra-storage-2");
const storage3=document.getElementById("extra-storage-3");
const extraStoragePrice=document.getElementById("extra-storage-price");


storage1.addEventListener('click',function(){
    extraStoragePrice.innerText="0";  
    updateTotalPrice();
})

storage2.addEventListener('click',function(){
    extraStoragePrice.innerText="100";
    updateTotalPrice();
})

storage3.addEventListener('click',function(){
    extraStoragePrice.innerText="180";
    updateTotalPrice();
})

//Handle Delivery
const freeDelivery=document.getElementById('free-delivery');
const expressDelivery=document.getElementById('express-delivery');
const shippingCost=document.getElementById('delivery-chrage');

freeDelivery.addEventListener('click',function(){
    shippingCost.innerText="0";
    updateTotalPrice();
})
expressDelivery.addEventListener('click',function(){
    shippingCost.innerText="20";
    updateTotalPrice();
})


//Total Price hanlde
let totalPrice=document.getElementById("total-price");
const bestPrice=document.getElementById("best-price");
//Update TotalPrice
function updateTotalPrice(){
    const bestPricee=Number(bestPrice.innerText);
    const memoryPrice=Number(extraMemoryPrice.innerText);
    const storagePrice=Number(extraStoragePrice.innerText);
    const shippingCharge=Number(shippingCost.innerText);
    const grandTototal= bestPricee+memoryPrice+storagePrice+shippingCharge;
    totalPrice.innerText=grandTototal;
    finalTotalPrice.innerText=grandTototal;
}
//Coupon handle 
let applyCoupon=document.getElementById('apply-coupon');
let couponinput=document.getElementById('coupon-code');
applyCoupon.addEventListener('click',function(){
    let updatedPrice=Number(totalPrice.innerText);
    if(couponinput.value=="stevekaku"){
        let discountPrice=updatedPrice*(20/100);
        updatedPrice=updatedPrice-discountPrice;
        finalTotalPrice.innerText=updatedPrice;
        couponinput.value='';
    }
})

//Final Total Price Update
const finalTotalPrice=document.getElementById("final-total");









