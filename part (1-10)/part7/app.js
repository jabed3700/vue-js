var app = Vue.createApp({
    data(){
        return {
            name:""
        }
    },
    methods:{
        handleKeyMethod(e){
            this.name = e.target.value
        }
    }
})

app.mount('#app')