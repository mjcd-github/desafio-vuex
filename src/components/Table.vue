<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'Table',
    computed: {
        ...mapState(['juegos'])
    },
    methods: {
        ...mapActions(['getJuegos', 'accionIncrementar', 'accionDecrementar']),
        botonSumar(index) {
            this.accionIncrementar(index)
        },
        botonRestar(index) {
            this.accionDecrementar(index)
        },
    },
    mounted() {
        this.getJuegos()
    }
}
</script>

<template>
    <div class="container">
        <h3>Lista de juegos</h3>
        <table>
            <thead>
                <tr>
                   <th>Código</th>
                   <th>Nombre</th>
                   <th>Stock</th>
                   <th>Precio</th>
                   <th>Acciones</th> 
                </tr>
            </thead>
            <tbody>
                <tr v-for="(juego,index) in juegos" :key="index">
                    <td :style="{color: juego.stock == 0 ? 'red' : 'black'}">{{juego.codigo}}</td>
                    <td :style="{color: juego.stock == 0 ? 'red' : 'black'}">{{juego.nombre}}</td>
                    <td :style="{color: juego.stock == 0 ? 'red' : 'black'}">{{juego.stock}}</td>
                    <td :style="{color: juego.stock == 0 ? 'red' : 'black'}">{{juego.precio}}</td>
                    <td><button @click="botonSumar(index)">+</button> <button :disabled="juego.stock == 0" @click="botonRestar(index)">-</button></td>

                </tr>
            </tbody>
        </table>
        
    </div>

</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0px 20px 0px;
    text-align: center;
}
table {
    border-collapse: collapse;   
    width: 50%;
    text-align: center;
    border-style: double;
}
th{
    
    border-style: double;
}
td{
    border: solid black;
    border-style: double;
}

</style>