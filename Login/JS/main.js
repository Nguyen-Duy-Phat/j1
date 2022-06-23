let arrayUse = [];
const $ = document.querySelector.bind(document);

//login
function loginUse() {
    const name = $('#name').value;
    const passs = $('#pass').value;
    let a = arrayUse.find((value, index) => {
        if (value.name === name && value.password === passs) {
            location.href = 'http://localhost:63342/7.5/src/index.html?_ijt=oa296dg3okhcihevlnof6nl4f5&_ij_reload=RELOAD_ON_SAVE';
        }
    })
}

function newUsePeople() {
    const name = $('#newAcc').value;
    const passs = $('#newPass').value;
    const passs2 = $('#newPass2').value;
    if (name && passs && passs === passs2) {
        arrayUse.push({name: name, password: passs})
        $('#login__').className = '';
        $('#register__').className = 'disPlayNone';
    }
}

function register() {
    $('#login__').className = 'disPlayNone';
    $('#register__').className = '';

}