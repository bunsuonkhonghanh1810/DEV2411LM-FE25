let products = [
    {
        id: 'SP01',
        name: 'Giường châu âu',
        description: 'Size lớn, trắng sữa',
        price: 8999000,
        image: 'images/bed.jpg'
    },
    {
        id: 'SP02',
        name: 'Bàn làm việc',
        description: 'Size vừa, trắng nâu',
        price: 3999000,
        image: 'images/desk.jpg'
    },
    {
        id: 'SP03',
        name: 'Tủ quần áo',
        description: '4 ngăn, trắng gỗ',
        price: 12999000,
        image: 'images/wardrobe.jpg'
    },
    {
        id: 'SP04',
        name: 'Kệ để đồ',
        description: '4 ngăn, trắng gỗ',
        price: 2499000,
        image: 'images/drawer.jpg'
    },{
        id: 'SP05',
        name: 'Giường châu âu 2',
        description: 'Size lớn, trắng sữa',
        price: 8999000,
        image: 'images/bed.jpg'
    },
    {
        id: 'SP06',
        name: 'Bàn làm việc 2',
        description: 'Size vừa, trắng nâu',
        price: 3999000,
        image: 'images/desk.jpg'
    },
    {
        id: 'SP07',
        name: 'Tủ quần áo 2',
        description: '4 ngăn, trắng gỗ',
        price: 12999000,
        image: 'images/wardrobe.jpg'
    },
    {
        id: 'SP08',
        name: 'Kệ để đồ 2',
        description: '4 ngăn, trắng gỗ',
        price: 2499000,
        image: 'images/drawer.jpg'
    },{
        id: 'SP09',
        name: 'Giường châu âu 3',
        description: 'Size lớn, trắng sữa',
        price: 8999000,
        image: 'images/bed.jpg'
    },
    {
        id: 'SP10',
        name: 'Bàn làm việc 3',
        description: 'Size vừa, trắng nâu',
        price: 3999000,
        image: 'images/desk.jpg'
    },
]

$.fn.renderProduct = function() {
    console.log(this[0].image)
    let product = `
        <div class="product-box">
            <div class="product-image">
                <img src="${this[0].image}" alt="">
            </div>
            <div class="product-title">
                <a href="#">
                    <h4 class="text-uppercase">${this[0].name}</h4>
                </a>
                <p>
                    <span>
                        <i class="fa-solid fa-star" style="color: #bd945f;"></i>
                    </span>
                    <span>
                        <i class="fa-solid fa-star" style="color: #bd945f;"></i>
                    </span>
                    <span>
                        <i class="fa-solid fa-star" style="color: #bd945f;"></i>
                    </span>
                    <span>
                        <i class="fa-solid fa-star" style="color: #bd945f;"></i>
                    </span>
                    <span>
                        <i class="fa-solid fa-star" style="color: #bd945f;"></i>
                    </span>
                </p>
                <p>(${this[0].description})</p>
                <p>${this[0].price.toLocaleString('vi-VN')} VNĐ</p>
            </div>
        </div>`;

    $("#list-product").append(product);
}

$.fn.renderListProducts = function() {
    for (let i = 0; i < this.length; i++) {
        console.log(this[i])
        $(this[i]).renderProduct();
    }
}

// $(products).renderListProducts();

let pages = {
    quantity: 4,
    page: 1,
    pageQuantity: 0,
    indexMin: 0,
    indexMax: 0,
}

$.fn.renderPages = function() {
    this.pageQuantity = Math.ceil(products.length / this[0].quantity);

    $().changePage(1);
    
    $('.pagination').append('<li onclick="$(this).changePage(parseInt($(this).text()))" class="page-item"><a class="page-link">Previous</a></li>');

    for (let i = 0; i < this.pageQuantity; i++) {
        $('.pagination').append(`<li onclick="$(this).changePage(parseInt($(this).text()))" class="page-item"><a class="page-link">${i + 1}</a></li>`)
    }

    $('.pagination').append('<li onclick="$(this).changePage(parseInt($(this).text()))" class="page-item"><a class="page-link"">Next</a></li>');
}

$.fn.changePage = function(pageNumber) {
    pages.page = pageNumber;

    pages.indexMin = pages.quantity * (pageNumber - 1);
    pages.indexMax = pages.indexMin + (pages.quantity - 1);
    if(products.length <  pages.indexMax ){
        pages.indexMax =products.length-1
    }

    $(products).renderListPages();
}

$.fn.renderListPages = function() {
    $("#list-product").empty();
    
    for (let i = pages.indexMin; i <= pages.indexMax; i++) {
        $(products[i]).renderProduct();
    }
}

$.fn.previousNext = function(status) {
    if (status == "Previous") {
        if (pages.page != 1) {
            console.log("1")
            $().changePage(pages.page--);
        }
    }
}

$(pages).renderPages();
