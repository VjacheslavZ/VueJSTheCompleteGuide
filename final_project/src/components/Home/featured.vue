<template>
  <div>
    <carousel
      :per-page="1"
      :mouse-drag="true"
      :paginationEnabled="false"
    >
      <slide v-for="(slide, index) in slides" :key="index">
        <div>
          hello
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
	import { Carousel, Slide } from 'vue-carousel';
  import SlideOne from '../../assets/images/featured/1.jpg';
  import SlideTwo from '../../assets/images/featured/2.jpg';
  import SlideThree from '../../assets/images/featured/3.jpg';
  import SlideFour from '../../assets/images/featured/4.jpg';

	export default {
		data() {
			return {
				slides: [
          {
						title: 'Red dead redemption 2',
						bck: SlideOne,
					},
          {
						title: 'Watchdogs 2',
						bck: SlideTwo,
					},
					{
						title: 'Rise of the Tomb Rider',
						bck: SlideThree,
					},
					{
						title: 'Spider-man',
						bck: SlideFour,
					},
        ]
      };
    },
		components: {
			Slide,
			Carousel,
		}
  }

</script>

<style scoped>

</style>
