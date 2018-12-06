<template>
  <div class="home">
    <h2>Plot</h2>
     
    <v-slider v-model="model.value"></v-slider>
    <v-slider v-model="model.value"></v-slider>

    <h1>{{model.value}}</h1>
    <v-text-field v-model="model.value"></v-text-field>
    
    <v-btn @click="model.inc()">Increment</v-btn>
    <v-btn @click="model.dec()">Decrement</v-btn>
    
    <div style="width:500px;overflow:hidden">
        <svg style="height:250px"> 
            <circle cx="150" cy="120" :r="model.value" fill="red"/>
        </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue { 

    public params = [
        {value: 1}
    ];

    
    get values() {

        

    }

}
</script>