let products=null;
fetch('products.json')
.then(response => response.json())
.then(data =>
    {
        products=data;
        console.log(products);
        adddtatohtml();

    })
    let listproducts=document.querySelector(".contbox")
    function adddtatohtml()
    {
        products.forEach(product => {
            let newproduct=document.createElement("a")
            listproducts.appendChild(newproduct)
            // newproduct.href='/det.html?id='+product.id;
            newproduct.classList.add('box');
            newproduct.innerHTML=`
            <img src="${product.image}">
            <h2>${product.name}</h2>
           
            <h2>${product.price}</h2>
            <div class="price">${product.description}</div`
            console.log(product.id)
            
            if(product.id==1)
            { 
              
                 newproduct.href='/det.html?id='+product.id;
                
            }
           
            else if(product.id==2)
            {
                newproduct.href='/det.html?id='+product.id;
            }
            else{
  
            }
          
        
        });
       
    }
   