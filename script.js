
async function getProductsAsync(page = 1) 
{
  let response = await fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`);
  let data = await response.json()
  return data;
}

getProductsAsync()
  .then(data => console.log(data)); 

