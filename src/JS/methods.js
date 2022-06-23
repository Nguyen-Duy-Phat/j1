//eidt
function methods(e) {
    console.log(e)
    let td = document.getElementById(e)
    let value = td.textContent
    td.outerHTML = `<td><input id=${e} onchange="editshow(this.id)" placeholder="${value}"/></td>`
}

function editshow(key) {
    let input = document.getElementById(key)
    input.outerHTML = `<p  id="${key}" onclick="methods(this.id)">${input.value}</p>`
    let app = list('Shop')
    let item = key.split('_')
    console.log(item)
    app.edit({key: item[1], item: item[0], value: input.value})
}

// delete
const deleteProduct = key => {
    const app = list('Shop');
    app.deleteProduct(key)
    app.getList()
}
//Button add product and cancel
const CreateListProduct = () => {
    let a = document.getElementById(`addProduct`);
    if (a.innerHTML === 'Cancel') {
        a.innerHTML = `Add Product`;
    } else {
        a.innerHTML = `Cancel`;
    }
    document.querySelector('.addCreateForm').classList.toggle(`cancelCreateForm1`);
}

// Add Product
const addNewProduct = () => {
    let count=0
    let inputData = document.querySelectorAll(`.newProduct`);

    for (let i = 0; i < inputData.length; i++) {
        console.log(inputData[i].value)
        if (inputData[i]) {
            count++
        }
    }
    if (count=== 6){
        let object = {
            name: inputData[0].value,
            price: inputData[1].value,
            quantity: inputData[2].value,
            size: inputData[3].value,
            color: inputData[4].value,
            link: inputData[5].value

        }
        let App = list('Shop')
        App.add(object);
        App.getList();
        return true
    }else {
        alert('vui long nhap du thong tin san pham')
    }

}

//sort
function sortProduct(value) {
    const app = list('Shop')
    app.sortProduct(value)
    app.getList()
}

//getlinkproduc

let app = list('Shop')
app.getList()