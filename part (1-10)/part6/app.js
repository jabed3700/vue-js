var app = Vue.createApp({
    data(){
        return {
            name:"jabed hosen"
        }
    },
    methods:{
        test(event){
            console.log(event);
            console.log(event.type)
        }
    }
})

app.mount('#app')