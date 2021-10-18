var vm = new Vue({
    el: "#app",
    data: {
        lenguaje:'',
        lenguajes:[],
    vue: {
        exp: null,
        years: 0,
        description: '',
    }
    }, 
    methods:{
        agregar:function(){
        this.lenguajes.push(this.lenguaje);
        this.lenguaje=''
    }, 
    resumen:function(){
        var a=parseInt(this.vue.years)
        if(this.vue.exp='Si' && a==1){
            this.respuesta1=!this.respuesta1
            this.respuesta2=!this.respuesta2
        }
        else if(this.vue.exp='Si' && a>=2){
            this.respuesta2=false
            this.respuesta1=!this.respuesta1
            this.respuesta3=!this.respuesta3
    }
}
    }
});