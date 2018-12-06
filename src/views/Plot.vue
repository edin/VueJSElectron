<template>
  <div class="home" style="max-width:500px">
    <h2>Plot</h2>
   
    <v-btn @click="addParam()">Add</v-btn>

    <v-slider v-model="speed"></v-slider>
    <v-slider v-for="param in params" v-model="param.value"></v-slider>

    <h1>{{model.value}}</h1>
    <v-text-field v-model="model.value"></v-text-field>
    

    <div style="width:500px;overflow:hidden">
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

    
    addParam() {
        this.params.push({value: 1});
    }

}
</script>