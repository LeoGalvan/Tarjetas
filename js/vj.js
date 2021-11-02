new Vue({
    el:'#cubic',
    data:{
        articulos:[
            { vig: "Disponible", 
            bebida:"Café Moca", 
            ing: "Leche y chocolate", 
            tam:"Grande", 
            precio: "$39"}, 
            { vig: "No Disponible por el momento", 
            bebida:"Oreo Frappe", 
            ing: "Leche con galleta Oreo", 
            tam:"Mediano", 
            precio: "$59"}, 
            { vig: "Disponible", 
            bebida:"Capuchino", 
            ing: "Leche con café endulzado", 
            tam:"Grande", 
            precio: "$39"}, 
            { vig: "Disponible", 
            bebida:"Té Matcha", 
            ing: "Té con hierbas", 
            tam:"Grande", 
            precio: "$49"}, 
            { vig: "No Disponible por el momento", 
            bebida:"Hersheys chocolate", 
            ing: "Leche caliente con sabor a Chocolate Hersheys", 
            tam:"Mediano", 
            precio: "$49"}, 
        ],
        busqueda:'', 
        busqueda2: '',
        minimo: 39, 
    },
    
    methods:{
    },
    computed:{
        buscarBebida(){
            return this.articulos.filter((item)=> item.bebida.includes(this.busqueda)); 
        }, 
        preciosBebidas(){
            return this.articulos.filter((item)=> item.precio.includes(this.busqueda2)); 
        }
    }
});

new Vue({
    el: '#demo',
    data: {
      show: true
    }
  });

  new Vue({
    el: '#example-1',
    data: {
      show: true
    }
  })