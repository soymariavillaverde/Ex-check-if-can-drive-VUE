export let checkAge = Vue.component ("check-age", {
        template: /*html*/
        <div>
                <h1>Enter your age</h1>
                <div>
                        <input placeholder=" enter your age">
                        </input>
                        <button></button>
                </div>
        </div>

})


function checkIfOver18(age){

        if(age >= 18){
                return("This person can drive")
        }
        else{
                return("This person can't drive")
        };
}