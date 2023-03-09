<template>
  <div className="frame" style="z-index: 10; position: relative; height: 6000px;">
    <Section1></Section1>
    <Section2/>
  </div>
</template>

<script>
import Section1 from './functionality_components/Section1.vue'
import Section2 from './functionality_components/Section2.vue'
export default {
  mounted: () => {
    if (window.localStorage) {
        if (!localStorage.getItem('firstLoad')) {
          localStorage['firstLoad'] = true;
          window.location.reload();
        }
        else
          localStorage.removeItem('firstLoad');
      }
    
      window.scrollTo(0, 0)
  },
  components: {
    Section1,
    Section2,
  },
  methods: {
  }
}
</script>