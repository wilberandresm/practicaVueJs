///esto es una instancia
const app=new Vue({

    ///detectar el id
    el:'#app',
    data:{
        titulo: 'hola mundo con vue',
        frutas: [
            {nombre:'pera',cantidad:10},
            {nombre:'manzana',cantidad:5},
            {nombre:'banano',cantidad:2}

        ],
        nuevaFruta:'',
        total: 0
   
    },
    methods: {
        agregarFruta(){
            this.frutas.push({
                nombre:this.nuevaFruta,cantidad:0

            });
            this.nuevaFruta=''
        }
    },
    computed: {
        sumarFrutas(){
            this.total=0;
            for(fruta of this.frutas){
                this.total+=fruta.cantidad
            }
            return this.total;
        }
    },

})