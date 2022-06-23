const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function list(key) {
    let storage = JSON.parse(localStorage.getItem(key)) ?? [];
    const save = () => {
        localStorage.setItem(key, JSON.stringify(storage));
    }
    return {
        add(value) {
            storage.push(value);
            save();
        },
        getList() {
            let table = $('#tableBody')
            table.innerHTML = ''
            for (const key in storage) {
                let item = document.createElement('tr');
                item.innerHTML = `
                        <td>${key}</td>
                        <td><p id="name_${key}"  onclick="methods(this.id)">${storage[key].name}</p></td>
                        <td ><p  id="prive_${key}" onclick="methods(this.id)">${storage[key].price}</p></td>
                        <td><p  id="quantity_${key}" onclick="methods(this.id)">${storage[key].quantity}</p></td>
                        <td><p  id="size_${key}" onclick="methods(this.id)">${storage[key].size}</p></td>
                        <td ><p  id="color_${key}" onclick="methods(this.id)">${storage[key].color}</p></td>
                        <td ><p><a  id="link_${key}" onclick="methods(this.id)" href="${storage[key].link}">Thông Tin Sản Phẩm</a></p></td>
                        <td ><button onclick='deleteProduct(${key})' >Delete</button></td>
                `
                table.append(item);
            }
        },
        edit(value) {
            storage[value.key][value.item] = value.value
            save();
        },
        deleteProduct(key) {
            storage.splice(key, 1)
            save();
        },
        sortProduct(value) {
            console.log([value])
            storage.sort((a, b) => a[value] - b[value])
            save();
        },
    }
}

list();