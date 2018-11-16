<template>
    <div class="racas__container">
        <div class="racas__container--img">
            <img :src="`/static/images/${breed.id}.jpg`" :alt="breed.name">
        </div>
    
        <h1 class="racas__name">{{breed.name}}</h1>
        
        <div class="racas__description">
            <ul>
                <li><strong>Life Span</strong>: {{breed.life_span}}</li>
                <li v-if="breed.bred_for != ''"><strong>Bred For</strong>: {{breed.bred_for}}</li>
                <li><strong>Breed Group</strong>: {{breed.breed_group}}</li>
                <li><strong>Temperament</strong>: {{breed.temperament}}</li>
                <li><strong>Weight</strong>: 
                                            <span>Imperial: {{breed.weight.imperial}}</span>
                                            <span>Metric: {{breed.weight.metric}}</span></li>
                <li><strong>Height</strong>: 
                                            <span>Imperial: {{breed.height.imperial}}</span>
                                            <span>Metric: {{breed.height.metric}}</span></li>
            </ul>
        </div>
        <div class="button__container">
                <router-link id="back" class="button" :to="{ name: 'Main' }">Back</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Racas',
    data() {
        return {
            breedID: 0,
            breed: []
        }
    },
    mounted() {
        this.breedID = window.location.hash.split('/')[2];

        axios.get('/static/json/breed/'+this.breedID+'.json')
        .then(response => {
            this.breed = response.data
        })
        .catch(error => console.log(error))
    }
}

</script>

<style lang="scss">
    .racas {
        &__container {
            padding-bottom: 20px;

            &--img {
                
                img {
                    width: 100%;
                    height: auto;
                }
            }

            .button__container {
                padding: 0 20px;
            }
            
        }

        &__name {
            padding: 0 20px;
            font-size: 25px;
        }

        &__description {
            padding: 0 20px;
            
            ul {
                padding: 10px;
                list-style: none;
                border: 1px solid #4d4d4d;

                li {
                    margin-bottom: 10px;

                    span {
                        display: block;
                        margin-top: 5px;
                    }
                }
            }
        }
    }
</style>
