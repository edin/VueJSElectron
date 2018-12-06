<template>
  <div class="home" style="max-width:400px">
    <h2>Binding</h2>
     
    <v-slider v-model="model.value"></v-slider>

    <h1>{{model.value}}</h1>
    
    <!--
    <v-text-field v-model="model.value"></v-text-field>
    -->
    <v-btn @click="model.inc()">Increment</v-btn>
    <v-btn @click="model.dec()">Decrement</v-btn>
    
    <div>
    <svg style="height:250px"> 
        <circle cx="150" cy="120" :r="model.value" fill="red"/>
    </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
   
class Model {   
    value = 0
    inc() { this.value += 10;}
    dec() { this.value -= 10;}
}

@Component({})
export default class extends Vue { 
    model : Model = new Model();  
}
</script>















