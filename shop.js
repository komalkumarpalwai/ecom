let shop=null;
fetch('shop.json')
.then(response => response.json())
.then(data =>
    {
        shop=data;
        console.log(shop);
        adddtatohtml();

    })
    let listproducts=document.querySelector(".contbox")
    function adddtatohtml()
    {
        shop.forEach(product => {
            let newproduct=document.createElement("a")
            listproducts.appendChild(newproduct)
            newproduct.href='/det.html?id='+product.id;
            newproduct.classList.add('box');
            newproduct.innerHTML=`
            <img src="${product.image}">
            <h2>${product.name}</h2>
           
            <h2>${product.price}</h2>
            <div class="price">${product.description}</div`
          
        });
    }