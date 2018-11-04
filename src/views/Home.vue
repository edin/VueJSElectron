<template>
  <div class="home">
    <h2>Home</h2>
    <vgl-renderer id="vgl-canvas" style="width: 800px; height: 600px;">
      <vgl-scene>
        <vgl-sphere-geometry ></vgl-sphere-geometry>
        <vgl-mesh-standard-material></vgl-mesh-standard-material>
        <vgl-mesh></vgl-mesh>
        <vgl-ambient-light></vgl-ambient-light>
        <vgl-directional-light position="1 0 1"></vgl-directional-light>
      </vgl-scene>
      <vgl-perspective-camera orbit-position="50 1 1"></vgl-perspective-camera>
    </vgl-renderer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({})
export default class Home extends Vue {}
</script>
