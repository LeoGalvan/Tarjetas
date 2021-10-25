new Vue({
    el:'#clase',
    data:{
        products:[
        {cant:0,
        nombre:'Proteína Muscletech',
        price:869,
        precioo:0},
        {cant:0,
        nombre:'Burst BodyPerformance', 
        price:349,
        precioo:0}
        ],
        subtotal:0,
        iva:0,
        ivapor:.15,
        total:0,
    },
    methods:{
        calculo(prod){
            prod.precioo=prod.cant*prod.price;
            return prod.precioo;
        },
        agregar(){
            this.products.push({
                cant:'',
                nombre:"",
                precio_unit:'',
                precioo:''
            })
        }
    },
    computed:{
        Subtotal(){
            this.total=0;
            for(num of this.products){
                this.total+=num.precioo;
            }
            this.iva=this.total*this.ivapor;
            this.subtotal=this.total-this.iva;
            return this.subtotal
        },
        Iva(){
            this.total=0;
            for(num of this.products){
                this.total+=num.precioo;
            }
            this.iva=this.total*this.ivapor;
            return this.iva
        },
        Total(){
            this.total=0;
            for(num of this.products){
                this.total+=num.precioo;
            }
            return this.total
        }
    }
});