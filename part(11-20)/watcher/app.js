var app = Vue.createApp({
    data(){
        return {
           mobile:"",
           name:{
               firstName:"",
               lastName:""
           }
        }
    },
   watch:{
       mobile(value,oldValue){
           console.log(value,oldValue);
           if(isNaN(value)){
                alert('Please enter a valid number');
                this.mobile=oldValue;
           };
           if(value.length==11){
               alert('OTP sent successsfully')
           }
       },
    //    'name.firstName':function(newValue,oldValue){
    //         console.log(newValue);
    //         console.log(oldValue);
    //    }

       name:{
           deep:true,
           handler:function(newValue){
               console.log(newValue);
           }
       }
   }
})

app.mount('#app')