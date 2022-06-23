let html = `<h1 id="heading">QUẢN LÝ SẢN PHẨM</h1>
    <div style="float: left">
<!--        <button style="background-color: #4C489D;color: white;height: 29px" id="addProduct" onclick="CreateListProduct()">AddProduct-->
        </button>
    </div>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                 AddProduct
                </button>
                
                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                            <div class="addCreateForm">
                                <input type="text" class="newProduct" name="addNewProduct" placeholder=" Name">
                                <input type="number" class="newProduct" name="addNewProduct" placeholder=" Price">
                                <input type="number" class="newProduct" name="addNewProduct" placeholder=" quantity">
                                <input type="number" class="newProduct" name="addNewProduct" placeholder=" Size">
                                <input type="text" class="newProduct" name="addNewProduct" placeholder=" Color">
                                <input type="text" class="newProduct" name="addNewProduct" placeholder=" Link Product">
<!--                                <button style="background-color: #4C489D;color: white;padding: 5px 12px" >Add</button>-->
                            </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" onclick="addNewProduct()" class="btn btn-primary">Add</button>
                      </div>
                    </div>
                  </div>
                </div>

    <div style="clear: left ">
    <select  id="mySelect"  onchange="sortProduct(this.value)" >
            <option>Open this select menu</option>
            <option value="price">Sort Price</option>
            <option value="quantity">Sort Quantity</option>
            <option value="size">Sort Size</option>
</select>

`
document.getElementById('main').innerHTML = html
let data=`
<table id="ListProduct">
    <thead>
    <th>STT</th>
    <th>Product Name</th>
    <th>Product Price</th>
    <th>The Number Of Product</th>
    <th>Size</th>
    <th>Color</th>
    <th>Link</th>
    <th></th>
    <th></th>
    </thead>
    <tbody id="tableBody">
    </tbody>
</table>`
document.getElementById('table').innerHTML = data

