import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
    state: {

        juegos: []
    },
    mutations: {
        setJuegos(state, juegos) {
            state.juegos = juegos
        },
        incrementar(state, { index, payload }) {
            state.juegos[index].stock = Number(state.juegos[index].stock)
            state.juegos[index].stock += Number(payload)
        },
        decrementar(state, { index, payload }) {
            if (Number(state.juegos[index].stock) > 0) {
                state.juegos[index].stock -= payload
            }
        }
    },
    actions: {
        async getJuegos({ commit }) {
            try {
                const response = await axios.get('./src/db/juegos.json')
                commit('setJuegos', response.data)

            } catch (error) {
                console.error("Error al obtener los juegos", error)
            }
        },
        accionIncrementar({ commit }, index) {
            commit('incrementar', { index, payload: 1 })
        },
        accionDecrementar({ commit }, index) {
            commit('decrementar', { index, payload: 1 })
        }

    }
})