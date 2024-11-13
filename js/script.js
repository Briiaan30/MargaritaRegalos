const arrayProd =[]

async function productosJSON(){
    try {
        
        const response = await fetch('../api/data.json')
        datosJson = await response.json()
        datosJson.forEach(element => {
            arrayProd.push(element)
        });
        

    } catch (error) {
        console.log('Error: ',error)
    }
}

productosJSON()
console.log('Array: ',arrayProd)

