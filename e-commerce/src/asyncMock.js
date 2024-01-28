 const listProducts = [
    {id:"1",
    nameP:"Canvas BackPack",
    price:75,
    category:"middle-backPack",
    img:"https://static.wixstatic.com/media/a9ff3b_f852b0f8d589446d9b672173e24008f9.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a9ff3b_f852b0f8d589446d9b672173e24008f9.jpg",
    stock:30,
    description:"#"
},
{
    id:"2",
    nameP:"Technical BackPack",
    price:130,
    category:"Big-backPack",
    img:"https://static.wixstatic.com/media/a9ff3b_b0e020a191534969bccc74fb5f27684c.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a9ff3b_b0e020a191534969bccc74fb5f27684c.jpg",
    stock:20,
    description:"#" 
},
{
    id:"3",
    nameP:"Camo BackPack",
    price:95,
    category:"backPack",
    img:"https://static.wixstatic.com/media/84770f_7b18884ff3e343208842ae1f30df28aa.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_7b18884ff3e343208842ae1f30df28aa.jpg",
    stock:20,
    description:"#" 
}
]

export const getFirstProducts = () =>{
    return new Promise((response)=>{
        setTimeout(()=>{
            response(listProducts)
        },1300)
    })
}

export const getSecondProductsByCategory = (category) =>{
    return new Promise((responseCId)=>{
        setTimeout(()=>{
            responseCId(listProducts.filter(item => item.category === category))
        },1200)
    })
}

export const getThirdProductsById = (pId) =>{
    return new Promise((responseId)=>{
        setTimeout(()=>{
            responseId(listProducts.find(itemId => itemId.id === pId ))
        },1000)
    })
}