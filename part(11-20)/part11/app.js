var app = Vue.createApp({
    data(){
        return {
           skills:['html','css','js','bootstrap'],
           newSkill:"",
           friends:[
               {name:"piash",experience:5},
               {name:"jahangir",experience:3},
               {name:"jabed",experience:6},
               {name:"sabbir",experience:2},

           ],
           newFriend:{name:'',experience:0}
        }
    },
    methods:{
       addSkill(){
           this.skills.push(this.newSkill);
           this.newSkill=''
       },
       removeItem(id){
            this.skills.splice(id,1)
       },
       
       addFriend(){
           this.friends.push(this.newFriend);
           this.newFriend = ''
       },
       removeFriend(id){
            this.friends.splice(id,1)
       }

    }
})

app.mount('#app')