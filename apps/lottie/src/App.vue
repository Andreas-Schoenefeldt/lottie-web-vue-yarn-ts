<template>
  <v-app>
    <v-main>
      <q-layout view="hhh lpr fFf">

        <lottie-animation
            ref="anim"
            :animationData="animation"
        />

      </q-layout>
    </v-main>
  </v-app>
</template>

<script>
import animation125 from '@/assets/Wasserglas_125ml.json';

export default {
  name: 'LayoutDefault',

  data: () =>({
    animation: animation125
  })
}
</script>

<style lang="sass">
</style>