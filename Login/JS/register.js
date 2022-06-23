const htmlRegister=`    <div class="container">
        <div class="screen">
            <div class="screen__content">
                <form class="login">
                    <div class="login__field">
                        <i class="login__icon fas fa-user"></i>
                        <input id="newAcc" type="text" class="login__input" placeholder="User name / Email">
                    </div>
                    <div class="login__field">
                        <i class="login__icon fas fa-lock"></i>
                        <input id="newPass" type="password" class="login__input" placeholder="Password">
                    </div>
                    <div class="login__field">
                        <i class="login__icon fas fa-lock"></i>
                        <input id="newPass2" type="password" class="login__input" placeholder="Enter the password">
                    </div>
                    <button onclick="newUsePeople()" type="button" class="button login__submit">
                        <span class="button__text">Register</span>
                        <i class="button__icon fas fa-chevron-right"></i>
                    </button>
                </form>
            </div>
            <div class="screen__background">
                <span class="screen__background__shape screen__background__shape4"></span>
                <span class="screen__background__shape screen__background__shape3"></span>
                <span class="screen__background__shape screen__background__shape2"></span>
                <span class="screen__background__shape screen__background__shape1"></span>
            </div>
        </div>
    </div>`
document.getElementById('register__').innerHTML=htmlRegister