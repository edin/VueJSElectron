<template>
  <div class="home" style="max-width:800px">
    <h2>Plot</h2>

    <v-btn @click="addParam()">Add</v-btn>
    <v-btn @click="delParam()">Remove Last</v-btn>


    <v-slider label="Time" v-model="speed"></v-slider>
    <v-slider label="Param" v-for="param of params" v-model="param.value"></v-slider>


    <svg width="100%" height="200" style="border:1px solid purple">
        <rect
            v-for="b of bars"
            :key="b.key"
            width="4"
            :y="b.y"
            :x="b.x"
            :height="b.value"
            style="fill:rgb(0,50,255);" />
    </svg>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { setInterval } from 'timers';

@Component({})
export default class extends Vue {

    public speed = 0;
    public time = 0;
    public params = [
        {value: 1}
    ];

    addParam() {
        this.params.push({value: 1});
    }
    delParam() {
        if (this.params.length > 1) {
            this.params.splice(this.params.length -1, 1);
        }
    }
    mounted() {

        setInterval(() => {
            this.time += this.speed * 0.01;
        }, 20);
    }

    get bars() {
        var bars: any = [];
        for (var i = 0; i < 200; i++) {
            var value = 80;
            var t = this.time + i * 0.5;
            for (var j = 0; j < this.params.length; j++)
            {
                value += (50 / (j*2+1)) * Math.sin((j+1) * this.params[j].value / 100 * t );
            }

            if (value < 0 ) value = 0;

            bars.push({
                key: i.toString(),
                x: i * 5,
                y: 200 - value,
                value: value
            });
        }
        return bars;
    }
}
</script>