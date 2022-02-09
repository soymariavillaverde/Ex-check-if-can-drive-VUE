export let inputPassword = Vue.component('input-password', {
    template: /* html */
        `<div>
            <h2>{{title}}</h2>
            <div class="d-flex">
                <input
                    v-bind:type="passwordType" 
                    class="form-control" 
                    placeholder="Enter your password"
                >
                <button 
                    class="btn btn-primary"
                    @click="showPassword"
                >{{showPasswordText}}</button>    
            </div>
            <hr class="mb-4">
        </div>`,
    data() {
        return {
            showPasswordText: "Show Password",
            title: 'Show the password',
            passwordType: 'password'
        }
    },
    methods: {
        showPassword() {
            if (this.passwordType == 'password') {
                this.passwordType = 'text'
                this.showPasswordText = "Hide Password"
            } else {
                this.passwordType = 'password'
                this.showPasswordText = "Show Password"
            }
        }
    },
})


// v-on:click="showPassword"