window.onload = function() {

    var total = 0,
        sizePrice,
        extraPrice,
        displayTotal = document.getElementById('total'),
        fr = document.forms['orderPizza'],
        selectedSize = fr.elements['pizzaSize'],
        selectedTopping = fr.elements['topping'],
        selectedNum = fr.elements['numPizza'],
        priceForSize,
        top,
        pizzaNum = parseFloat(selectedNum.value);
    selectedTopping[0].price = 2;
    selectedTopping[1].price = 2;
    selectedTopping[2].price = 1;
    selectedTopping[3].price = 2;
    selectedTopping[4].price = 2;
    selectedSize[0].price = 8;
    selectedSize[1].price = 10;
    selectedSize[2].price = 12;
    selectedNum.addEventListener('change',calTotal,false);

    function calTotal(){
        console.log(sizePrice());
        console.log(topPrice()); 
        total = (sizePrice()+topPrice()) * pizzaNum;
        console.log(pizzaNum);
        console.log(priceForSize,top);
        displayTotal.innerHTML= total;
    };


    for (let i = 0; i < selectedSize.length; i = i + 1) {
        selectedSize[i].addEventListener('change', sizePrice, false);
    };

    function sizePrice() {
        total = 0;
        for(let i=0;i<selectedTopping.length;i=i+1){
            selectedTopping[i].checked =false;
        }
        selectedNum.value ="1";
        sPrice = parseFloat(this.price);
        if(this.checked){
         priceForSize =parseFloat(total + sPrice);
        displayTotal.innerHTML = priceForSize;
        }
        return priceForSize;
        
    };

    for(var j=0;j<selectedTopping.length;j=j+1){
        selectedTopping[j].addEventListener('change',topPrice,false);
    };

    function topPrice(){
        
        extraPrice= parseFloat( this.price);
        total = parseFloat(displayTotal.innerHTML);
        if(this.checked){ 
            toppingsPrice = total + (extraPrice*pizzaNum);

        displayTotal.innerHTML = toppingsPrice;
        }else{
            toppingsPrice = total - (extraPrice*parseFloat(selectedNum.value));
            displayTotal.innerHTML = toppingsPrice;
        }
        return top = toppingsPrice-(priceForSize*pizzaNum);

    };

};