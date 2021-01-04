<template>
	<div>
		<ul class="list-inline">
			<li
				v-for="(image, index) in media"
				:key="index"
				class="list-inline-item pb-2"
			>
				<img
					v-lazy="image.thumb"
					@click="openGallery(index)"
					class="img-thumbnail"
				>
			</li>
		</ul>
		<LightBox
			ref="lightbox"
			:media="media"
			:show-caption="showCaption"
			:show-light-box="false"
		/>
	</div>
</template>
<script>
	import LightBox from 'vue-image-lightbox'
	import siteLoading from './siteloading.gif'
	export default {
		props:['media','showCaption'],
		data () {
			return {
				siteLoading,
			}
		},
		methods: {
			openGallery(index) {
				this.$refs.lightbox.showImage(index)
			}
		},
		components: {
			LightBox
		}
	}
</script>
