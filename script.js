var productApi = 'http://localhost:3000/products';
// let filterarray = [];

function start(){
	getProduct(renderProducts);
	// handleCreateForm();
}
start();

function getProduct(callback){
	fetch(productApi)
		.then((response) =>{
			return response.json();
		})
		.then(callback);
}

function renderProducts(products){
	// document.getElementByID('list-products').innerText = '';
	var listProductsBlock = document.querySelector('#list-products');
	var htmls = products.map((product) =>{
		return `<div class="col-6 col-md-4">
					<div class="couse-item-${product.id}">
			            <img src="${product.image}" alt="">
						<h4>${product.name}</h4>
						<p>${product.price}</p>
						
						<button onclick="handleDeleteCourse(${product.id})">Xóa</button>
					</div>
				</div>`;
	});
	listProductsBlock.innerHTML = htmls.join('');

}

//tim kiem 
document.getElementById('search').addEventListener('click', () => {
	let searchInput = document.getElementById('myinput').value;
	let elements = document.querySelectorAll('.couse-item-' + name);

	elements.forEach((element,index) => {
		if(element.innerText.includes(searchInput.toUpperCase())){
			listProductsBlock[index].classList.remove('hide');
		}
		else{
			listProductsBlock[index].classList.add('hide');
		}
	})
})

