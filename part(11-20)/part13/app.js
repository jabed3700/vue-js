var app = Vue.createApp({
    data(){
        return {
            AboutMe:{
                name:"tamim khan",
                website:"tamim.me",
                experience:10,
            },
            skills:['html','css','js','bootstrap'],
        }
    },
    methods:{
        
    }
})

app.mount('#app')