<template>
    <div class="itemRaca__container">
        <div class="itemRaca" v-for="breed in breeds" v-bind:key="breed.id">
            <p class="itemRaca__name">{{breed.name}}</p>
            <p class="itemRaca__temperament">{{breed.temperament}}</p>
            <div class="button__container">
                <router-link class="button" :to="{ name: 'Racas', params: {id: `${breed.id}`} }">About</router-link>
            </div>
        </div>
    </div>    
</template>

<script>
import router from '../router'
import axios from 'axios'
export default {
    name: 'itemRaca',
    data() {
        return {
            breeds: null
        }
    },
    mounted() {
        axios.get('http://localhost:84/breeds')
        .then(response => {
            this.breeds = response.data
        })
        .catch(error => console.log(error))
    }
}
</script>

<style lang="scss">
    .itemRaca {

        width: 100%;
        margin: 0 auto;
        border: 1px solid #4d4d4d;
        border-radius: 3px;
        margin-bottom: 20px;
        padding: 20px;
        text-align: center;

        &__container {
            padding: 0 20px;
            margin-top: 40px;
        }

        &__name {
            font-size: 25px;
            font-weight: bold;
            margin: 0 0 10px 0;
        }

        &__temperament {
            margin: 0 0 20px 0;
        }
    }

      .button {
        padding: 12px 15px;
        border-radius: 3px;
        background-color: darkseagreen;
        color: #4d4d4d;
        text-decoration: none;

        &__container {
            margin-top: 32px;
        }
    }
</style>
