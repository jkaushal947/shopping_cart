let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Black Luster Soldier',
        tag: 'blacklustersoldier',
        price: 1.99,
        inCart: 0
    },
    {
        name: 'Blue Eyes White Dragon',
        tag: 'blueeyeswhitedragon',
        price: 2.99,
        inCart: 0
    },
    {
        name: 'Blue Eyes White Dragon',
        tag: 'blueeyeswhitedragon1',
        price: 2.99,
        inCart: 0
    },
    {
        name: 'Buster Blader',
        tag: 'busterblader',
        price: 1.99,
        inCart: 0
    },
    {
        name: 'Cyber End Dragon',
        tag: 'cyberenddragon',
        price: 1.99,
        inCart: 0
    },
    {
        name: 'Elemental Hero Shining Flare Wingman',
        tag: 'shiningflarewingman',
        price: 2.99,
        inCart: 0
    },
    {
        name: 'Magicians Valkyria',
        tag: 'magiciansvalkyria',
        price: 1.99,
        inCart: 0
    },
    {
        name: 'Stardust Dragon',
        tag: 'stardustdragon',
        price: 2.99,
        inCart: 0
    },
    {
        name: 'Valkyrion the Magna Warrior',
        tag: 'valkyrion',
        price: 2.99,
        inCart: 0
    },
    {
        name: 'XYZ Dragon Cannon',
        tag: 'xyzdragoncannon',
        price: 2.99,
        inCart: 0
    },
    {
        name: 'Miracle Fusion',
        tag: 'miraclefusion',
        price: 1.99,
        inCart: 0
    },
    {
        name: 'Polymerization',
        tag: 'polymerization',
        price: 2.99,
        inCart: 0
    }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    //console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

onLoadCartNumbers();
