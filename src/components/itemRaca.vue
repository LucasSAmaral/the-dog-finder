<template>
    <div class="itemRaca__container">
        <div class="itemRaca" v-for="breed in breeds" v-bind:key="breed.id">
            <div class="itemRaca__container--img">
                <img :src="`/static/images/${breed.id}.jpg`" :alt="breed.name">
            </div>
            <p class="itemRaca__name">{{breed.name}}</p>
            <p class="itemRaca__temperament">{{breed.temperament}}</p>
            <div class="button__container">
                <router-link :class="`button${breed.id}`" class="button" :to="{ name: 'Racas', params: {id: `${breed.id}`} }">About</router-link>
            </div>
        </div>
    </div>    
</template>

<script>
import axios from 'axios'
export default {
    name: 'itemRaca',
    data() {
        return {
            breeds: []
        }
    },
    mounted() {
        axios.get('/static/json/breeds.json')
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
        background-color: #ffffff;

        &__container {
            padding: 0 20px;
            margin-top: 40px;

            &--img {

                margin-bottom: 10px;
                height: auto;
                border-radius: 25%;
                overflow: hidden;

                img {
                    width: 100%;
                    height: auto;
                }
            }
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
        background-color: #8fbc8f;
        color: #4d4d4d;
        text-decoration: none;

        &__container {
            margin-top: 32px;
            line-height: 2.6;
        }
    }
</style>
