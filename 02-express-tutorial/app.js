const { products } = require("./data");

console.log('Express Tutorial')


const express = require('express');
// const path = require('path');

const app = express();

// (middleware) all static resources are covered 
app.use(express.static('./public'))

app.get('/api/v1/test', (req, res) => {
    res.status(200).json({ message: "It worked!" });
})

// retrieving products from data.js
app.get('/api/v1/products', (req, res) => {
    res.status(200).json(products);
})

// retrieve a particular product by ID.
app.get('/api/v1/products/:productID', (req, res) => {

    // parse a string and return an integer. parseInt()
    // The req.params object allows you to capture dynamic values from the URL path. To access the value of the “id” parameter, you can use req.params.id in your route handler.
    const findID = parseInt(req.params.productID)

    const product = products.find((prod) => prod.id === findID)

    if(!product) {
        return res.status(404).send('That product was not found.')
    }
    return res.json(product)
})

app.get('/api/v1/query', (req, res) => {

    const { search, limit, regExpres, price } = req.query;

    let sortedProduct = [...products]

    // If search exists, filter the product and return product that starts with search
    if (search) {
        sortedProduct = sortedProduct.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    // Returning regular expressions
    if (regExpres) {
        // 'i' to handle case-sensitive search    
        const regex = new RegExp(regExpres, 'i'); 

        sortedProduct = sortedProduct.filter((product) => regex.test(product.name));
    }

    // Returning price that are less than what users entered
    if (price) {
        sortedProduct = sortedProduct.filter((product) => 
            product.price < parseFloat(price))
    }

    // if limit exists, slice at elements starting from index 0 and up to (but not including) limit.
    if (limit) {
        sortedProduct = sortedProduct.slice(0, parseInt(limit))
    }

    // avoid receiving empty []
    if (sortedProduct < 1) {
        return res.status(200).json({ success: true, data: []})
    }

    res.status(200).json(sortedProduct)
})


app.all('*', (req, res) => {
    res.status(404).send('ERROR: resource not found')
})

app.listen(3000, () => {
    console.log('server listening on port 3000....')
})