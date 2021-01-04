<script>
	export default {
		data () {
			return {
				navClosed: false,
				windowWidth: window.innerWidth

			}
		},
		computed: {
			isMobile() {
				return this.windowWidth < 992
			},
		},
		mounted() {
			if (this.isMobile) {
				this.navClosed = true
			}
			/*
			 * listen to windows resize and update isMobile()
			 */
			window.addEventListener('resize', () => {
				this.windowWidth = window.innerWidth
				if (this.isMobile) {
					this.navClosed = true
				} else {
					this.navClosed = false
				}
			})
		}
	}
</script>
