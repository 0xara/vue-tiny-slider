<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
import { tns } from 'tiny-slider/src/tiny-slider';

export default {
	name: 'TinySlider',
	props: {
		options: {
			type: Object,
			default: function() {
				return {};
			},
		},
	},

    slider: {},

	mounted() {
		this.create();
	},
	destroyed() {
		this.destroy();
	},
	methods: {
		slider() {
			return this.$options.slider;
        },
		create() {
			const slider = tns({ container: this.$el, ...this.options });
			slider.events.on('indexChanged', this.onIndexChanged);
			slider.events.on('transitionStart', this.onTransitionStart);
			slider.events.on('transitionEnd', this.onTransitionEnd);
			slider.events.on('newBreakpointStart', this.onNewBreakpointStart);
			slider.events.on('newBreakpointEnd', this.onNewBreakpointEnd);
			slider.events.on('touchStart', this.onTouchStart);
			slider.events.on('touchMove', this.onTouchMove);
			slider.events.on('touchEnd', this.onTouchEnd);
			slider.events.on('dragStart', this.onDragStart);
			slider.events.on('dragMove', this.onDragMove);
			slider.events.on('dragEnd', this.onDragEnd);
		},
		destroy() {
			const slider = this.slider();
			slider.events.off('indexChanged', this.onIndexChanged);
			slider.events.off('transitionStart', this.onTransitionStart);
			slider.events.off('transitionEnd', this.onTransitionEnd);
			slider.events.off('newBreakpointStart', this.onNewBreakpointStart);
			slider.events.off('newBreakpointEnd', this.onNewBreakpointEnd);
			slider.events.off('touchStart', this.onTouchStart);
			slider.events.off('touchMove', this.onTouchMove);
			slider.events.off('touchEnd', this.onTouchEnd);
			slider.events.off('dragStart', this.onDragStart);
			slider.events.off('dragMove', this.onDragMove);
			slider.events.off('dragEnd', this.onDragEnd);
			slider.destroy();
		},
		reTinySlider() {
			this.destroy();
			this.slider().rebuild();
		},
		next() {
			this.goTo('next');
		},
		prev() {
			this.goTo('prev');
		},
		pause() {
			this.slider().pause();
		},
		play() {
			this.slider().play();
		},
		goTo(index) {
			this.slider().goTo(index);
		},
		getInfo() {
			this.slider().getInfo();
		},
		currentSlide() {
			return this.getInfo().displayIndex;
		},

		// Events
		onIndexChanged(info) {
			this.$emit('indexChanged', info);
		},
		onTransitionStart(info) {
			this.$emit('transitionStart', info);
		},
		onTransitionEnd(info) {
			this.$emit('transitionEnd', info);
		},
		onNewBreakpointStart(info) {
			this.$emit('newBreakpointStart', info);
		},
		onNewBreakpointEnd(info) {
			this.$emit('newBreakpointEnd', info);
		},
		onTouchStart(info) {
			this.$emit('touchStart', info);
		},
		onTouchMove(info) {
			this.$emit('touchMove', info);
		},
		onTouchEnd(info) {
			this.$emit('touchEnd', info);
		},
		onDragStart(info) {
			this.$emit('dragStart', info);
		},
		onDragMove(info) {
			this.$emit('dragMove', info);
		},
		onDragEnd(info) {
			this.$emit('dragEnd', info);
		}
	},
};
</script>

<style>
    @import "node_modules/tiny-slider/dist/tiny-slider.css";
</style>