<template>
  <div class="f-card">
    <v-card :color="props.color">
      <div class="is-flex is-justify-content-space-between">
        <h3 class="title is-5 mb-2">{{ props.title }}</h3>
        <tippy v-bind="libProps" v-if="props.tooltipText">
          <i class="iconify icon-size" data-icon="feather:info" aria-hidden="true"></i>
        </tippy>
      </div>
      <p v-if="props.allowHtml" v-html="props.description"></p>
      <p v-else>{{ props.description }}</p>
      <div class="is-flex is-justify-content-center">
        <f-button
          :key="index"
          :type="action.type"
          :label="action.linkText"
          :color="action.color"
          class="px-1 pt-1"
          size="big"
          @click="handleClick(action)"
          v-for="(action, index) in props.actions"
        />
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'
import 'tippy.js/dist/backdrop.css'
import 'tippy.js/animations/shift-away.css'

import handleRedirect, { backToPreviousPage } from '@/core/helpers/redirectToUrl'
import { Action } from '@/components/forms/Form/types'
import FButton from '@/components/buttons/Button/Button.vue'
import { Tippy } from 'vue-tippy'
import VCard from '@/vendor/vuero/components/base/card/VCard.vue'

type Props = {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
  allowHtml?: boolean
  title?: string
  description?: string
  actions?: Action[]
  tooltipText?: string
}

type LibProps = {
  duration: Array<number>
  trigger: 'mouseenter click'
  interactive: boolean
  allowHTML: boolean
  animateFill: boolean
  content: string
  theme: 'light'
  followCursor: false | true | 'horizontal' | 'vertical' | 'initial'
  placement: 'auto' | 'top' | 'bottom' | 'right' | 'left'
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  allowHtml: true,
  title: '',
  description: '',
  actions: () => [],
  tooltipText: ''
})

const libProps: LibProps = {
  trigger: 'mouseenter click',
  allowHTML: props.allowHtml,
  content: props.tooltipText,
  duration: [300, 600],
  interactive: true,
  animateFill: true,
  theme: 'light',
  followCursor: false,
  placement: 'bottom'
}

/**
 * handles an action click.
 *
 * @param action - the current triggered action.
 */
async function handleClick(action: Action): Promise<void> {
  if (action.type === 'back') {
    await backToPreviousPage()
    return
  }

  if (action.type === 'redirect') {
    handleRedirect(action.link)
    return
  }
}
</script>

<style lang="scss" scoped>
.f-card {
  position: relative;

  .icon-size {
    font-size: 16px;
  }
}
</style>
<!-- import NavBar from '@/components/NavBar.vue'
import store from '@/store';
import { pokeList } from '@/services/metods'
import Pokemons from '@/interfaces/pokemons'

export default {
  components: {
    NavBar,
  },
  methods: {
    async pokemon() {
      if(store.state.pokemons.length < 150){
        console.log(`entrou na função pokemon com ${store.state.pokemons.length}`)
        for (let i = 1; i <= 150; i++) {
          const objectPokemon = await getPokemon(i)
          this.newObjectPokemon(objectPokemon)
        }
      }
    },
    newObjectPokemon(pokemonObj: Pokemons) {
      function async pokemon() {
  for (let i = 1; i <= 150; i++) {
    const objectPokemon = await axios.onlyPokemon(i)
    this.newObjectPokemon(objectPokemon)
  }
}
function newObjectPokemon(pokemonObj: Pokemons) {
  const { id, name, types } = pokemonObj
  const type = types.map(info => info.type.name).join(' | ')
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  const objectPokemon = {
    id: id,
    name: name,
    type: type,
    image: image,
  }
  store.commit('addInPokemons', objectPokemon)
}
      store.commit('addInPokemons', objectPokemon)
    },
  },
  mounted(){
    this.pokemon()
  },
}  -->