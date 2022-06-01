import productlist from '../productAPI'

const sportslist= []
const electronicslist=[]
    productlist.map((product)=>
    {
        if(product.category==='sports'){
            sportslist.push(product)
        }else{
            electronicslist.push(product)
        }
    })
export {
    sportslist, 
    electronicslist
}