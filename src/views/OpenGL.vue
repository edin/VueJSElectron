<template>
    <div class="home">
        <h2>Vue GL</h2>

        <aside class="control-panel">
            <v-slider label="Radius" v-model="r" min=100 max=500></v-slider> 
        </aside>         

        <vgl-renderer antialias style="height: 600px;">
        <vgl-scene>
          <vgl-texture src="textures/sun.jpg"  center="0.5 0.5" name="sun"></vgl-texture>
          <vgl-texture src="textures/earth.jpg"  center="0.5 0.5" name="earth"></vgl-texture>
          
          <vgl-sphere-geometry name="sphereSun"  radius=25 width-segments="20" height-segments="20"></vgl-sphere-geometry>
          <vgl-sphere-geometry name="sphereEarth" radius=15 width-segments="20" height-segments="20"></vgl-sphere-geometry>
          
          <vgl-mesh-standard-material name="earthMaterial" map="earth"></vgl-mesh-standard-material>
          <vgl-mesh-standard-material name="sunMaterial" map="sun"></vgl-mesh-standard-material>
          
          <vgl-mesh geometry="sphereSun" material="sunMaterial" :position="`${0} ${0} ${0}`"></vgl-mesh>
          <vgl-mesh geometry="sphereEarth" material="earthMaterial" :position="`${cx} ${cy} ${cz}`"></vgl-mesh>
          
          <vgl-mesh 
                geometry="sphere" 
                material="std" 
                :position="`${cx} ${cy} ${cz}`">
          </vgl-mesh>
 
          <vgl-axes-helper size=140></vgl-axes-helper>
          
          <vgl-ambient-light color="#ffeecc"></vgl-ambient-light>
          <vgl-directional-light position="0 1 1"></vgl-directional-light>
        </vgl-scene>
        
        <vgl-perspective-camera orbit-position="400 1 0.5"></vgl-perspective-camera>
        
        </vgl-renderer>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class extends Vue {
    public x: number    = 0;
    public y: number    = 0;
    public z: number    = 0;
    public r: number    = 200;
    public time: number = 0;
    
    public mounted() {
        setInterval(() => {this.time += 0.02 }, 20);
    }
    public get cx(): number { return this.x + this.r * Math.cos(this.time); }
    public get cy(): number { return this.y + 20 * Math.cos(2*this.time); }
    public get cz(): number { return this.z + this.r * Math.sin(this.time); }
}
</script>



















