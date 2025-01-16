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
    },
    {
        id: 'SP05',
        name: 'Giường châu âu 3',
        description: 'Size lớn, trắng sữa',
        price: 8999000,
        image: 'images/bed.jpg'
    },
    {
        id: 'SP06',
        name: 'Bàn làm việc 3',
        description: 'Size vừa, trắng nâu',
        price: 3999000,
        image: 'images/desk.jpg'
    },
    {
        id: 'SP07',
        name: 'Tủ quần áo 3',
        description: '4 ngăn, trắng gỗ',
        price: 12999000,
        image: 'images/wardrobe.jpg'
    },
    {
        id: 'SP08',
        name: 'Kệ để đồ 3',
        description: '4 ngăn, trắng gỗ',
        price: 2499000,
        image: 'images/drawer.jpg'
    },
    {
        id: 'SP05',
        name: 'Giường châu âu 4',
        description: 'Size lớn, trắng sữa',
        price: 8999000,
        image: 'images/bed.jpg'
    },
    {
        id: 'SP06',
        name: 'Bàn làm việc 4',
        description: 'Size vừa, trắng nâu',
        price: 3999000,
        image: 'images/desk.jpg'
    },
    {
        id: 'SP07',
        name: 'Tủ quần áo 4',
        description: '4 ngăn, trắng gỗ',
        price: 12999000,
        image: 'images/wardrobe.jpg'
    },
    {
        id: 'SP08',
        name: 'Kệ để đồ 4',
        description: '4 ngăn, trắng gỗ',
        price: 2499000,
        image: 'images/drawer.jpg'
    },
    {
        id: 'SP05',
        name: 'Giường châu âu 5',
        description: 'Size lớn, trắng sữa',
        price: 8999000,
        image: 'images/bed.jpg'
    },
    {
        id: 'SP06',
        name: 'Bàn làm việc 5',
        description: 'Size vừa, trắng nâu',
        price: 3999000,
        image: 'images/desk.jpg'
    },
    {
        id: 'SP07',
        name: 'Tủ quần áo 5',
        description: '4 ngăn, trắng gỗ',
        price: 12999000,
        image: 'images/wardrobe.jpg'
    },
    {
        id: 'SP08',
        name: 'Kệ để đồ 5',
        description: '4 ngăn, trắng gỗ',
        price: 2499000,
        image: 'images/drawer.jpg'
    },
]

$.fn.renderProduct = function() {
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
    $('.pagination').empty();

    let productsList = this;

    pages.pageQuantity = Math.ceil(productsList.length / pages.quantity);
    
    $().changePage(1, productsList);

    let previousItem = $(`
        <li class="page-item">
            <a class="page-link">Previous</a>
        </li>
    `);
    previousItem.on('click', function() {
        $().changePage(pages.page == 1 ? 1 : pages.page - 1, productsList);
    });

    let nextItem = $(`
        <li class="page-item">
            <a class="page-link">Next</a>
        </li>
    `);
    nextItem.on('click', function() {
        $().changePage(pages.page == pages.pageQuantity ? pages.pageQuantity : pages.page + 1, productsList);
    });

    $('.pagination').append(previousItem);

    for (let i = 0; i < pages.pageQuantity; i++) {
        let pageItem = $(`
            <li class="page-item">
                <a class="page-link">${i + 1}</a>
            </li>
        `);
        
        pageItem.on('click', function() {
            $().changePage(i + 1, productsList);
        });

        $('.pagination').append(pageItem);
    }

    $('.pagination').append(nextItem);
}

$.fn.changePage = function(pageNumber, productsList) {
    pages.page = pageNumber;
 
    pages.indexMin = pages.quantity * (pageNumber - 1);
    pages.indexMax = productsList.length < pages.quantity * pages.page ? productsList.length - 1 : pages.indexMin + (pages.quantity - 1);

    $(productsList).renderListPages();
}

$.fn.renderListPages = function() {
    $("#list-product").empty();
    
    for (let i = pages.indexMin; i <= pages.indexMax; i++) {
        $(this[i]).renderProduct();
    }
}

$(products).renderPages();

$.fn.removeVietnamese = function(str) {
    return str.trim()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd')
              .replace(/Đ/g, 'D')
              .toLowerCase();
}

$('.input-group-text').on('click', function() {
    let find = $().removeVietnamese($('.form-control').val());

    let results = products.filter(product => {
        let productName = $().removeVietnamese(product.name);
        return productName.includes(find);
    });

    $(results).renderPages();
})

$('.product-hot > div > p').on('click', function() {
    $(products).renderPages();
})