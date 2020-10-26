    const E   = document.getElementById('Email');
    const P  = document.getElementById('Password');
    const L  = document.getElementById('Login');
    const S  = document.getElementById('SignUp');
    const LO = document.getElementById('Logout');

    SignUp.addEventListener('click', (e) => {
    const email = E.value;
    const pass =  P.value;

    const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e =>console.log(e.message)); 
    });

    Login.addEventListener('click', (e) => {
    const email = E.value;
    const pass =  P.value;

    const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e =>console.log(e.message));
    });

    LO.addEventListener('click',  e =>{
        firebase.auth().signOut();
    })

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log (firebaseUser);
            LO.classList.remove('hide');
        } 
        else {
            console.log('NO ONE IS LOGGED IN');
            LO.classList.add('hide');
        }
    })