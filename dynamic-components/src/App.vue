<template>
  <select v-model="componentName">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>

  <!-- CSS animations -->
  <transition name="zoom" mode="out-in" type="animation" appear>
    <!-- Dynamic component. keep-alive prevents from the unactive component to unmount and destroy all data associated with it -->
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </transition>
  <button type="button" @click.prevent="flag = !flag">Toggle</button>

  <br />

  <!-- Transitions with javascript -->
  <transition
    appear
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="false"
  >
    <h2 v-if="flag">Hey</h2>
  </transition>

  <button type="button" @click.prevent="addItem">Add Item</button>
  <ul>
    <!-- for list elements, use transition-group instead. The "mode" attribute will not work for transition-group -->
    <transition-group name="fade">
      <li
        v-for="(number, index) in numbers"
        :key="number"
        @click="removeItem(index)"
      >
        {{ number }}
      </li>
    </transition-group>
  </ul>
</template>

<script>
import About from "@/components/About.vue";
import Home from "@/components/Home.vue";
export default {
  name: "App",
  components: {
    About,
    Home,
  },
  data() {
    return {
      componentName: "Home",
      flag: true,
      numbers: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    addItem() {
      const randomNum = Math.floor(Math.random() * 100 + 1);
      const randomIndex = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(randomIndex, 0, randomNum);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
    beforeEnter(el) {
      console.log("beforeEnter", el);
    },
    enter(el, done) {
      console.log("enter", el);
      const animation = el.animate([{ transform: "scale3d(0, 0, 0)" }, {}], {
        duration: 600,
      });
      animation.onfinish = () => {
        done();
      };
    },
    afterEnter(el) {
      console.log("afterEnter", el);
    },
    beforeLeave(el) {
      console.log("beforeLeave", el);
    },
    leave(el, done) {
      console.log("leave", el);
      const animation = el.animate([{}, { transform: "scale3d(0, 0, 0)" }], {
        duration: 600,
      });
      animation.onfinish = () => {
        done();
      };
    },
    afterLeave(el) {
      console.log("afterLeave", el);
    },
  },
};
</script>

<style>
@import "@/assets/base.css";
body {
  display: grid;
  place-items: center;
}

button {
  border: none;
  padding: 0.5em 0.75em;
  font-size: 1.3rem;
  margin-block: 0.5em;
  transition: all 300ms ease;
}

button:hover {
  cursor: pointer;
  background-color: hsl(180, 100%, 50%);
  border-radius: 10px;
  transition: all 200ms ease;
}

button:active {
  transform: translateY(-1.5px);
  transition: all 200ms ease;
}

ul {
  font-size: 1.3rem;
}

li {
  cursor: pointer;
}

/* FADE classes */
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.35s linear;
}

.fade-leave-to {
  transition: all 0.35s linear;
  opacity: 0;
}


.fade-move {
  transition: all 0.35s linear;
}

.fade-leave-active {
  position: absolute;
}

/* ZOOM classes */
.zoom-enter-from {
  opacity: 0;
}

.zoom-enter-active {
  animation: zoom-in 0.5s linear forwards;
  transition: all 1s linear;
}

.zoom-leave-active {
  animation: zoom-out 0.5s linear forwards;
  transition: all 1s linear;
}

.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>
