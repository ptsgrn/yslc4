<script>
	import { PUBLIC_STATIC_ASSETS } from '$env/static/public';
	export let src = 'fnf.jpeg';
	export let alt = '';
	export let className = '';
	export let width = '';
	export let height = '';
</script>

<div class="lazy-load-background" data-img-width={width} data-img-height={height}>
	<img
		class="ix-embed-image {className}"
		{alt}
		{width}
		{height}
		loading="lazy"
		srcset="{PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=100 100w, 
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=116 116w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=134 134w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=156 156w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=182 182w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=210 210w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=244 244w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=282 282w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=328 328w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=380 380w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=442 442w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=512 512w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=594 594w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=688 688w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=798 798w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=926 926w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=1074 1074w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=1246 1246w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=1446 1446w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=1678 1678w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=1946 1946w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=2258 2258w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=2618 2618w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=3038 3038w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=3524 3524w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=4088 4088w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=4742 4742w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=5500 5500w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=6380 6380w,
  {PUBLIC_STATIC_ASSETS}/{src}?auto=format,compress&w=7400 7400w"
		src="{PUBLIC_STATIC_ASSETS}/{src}?ixembed=1663417333622&auto=format,compress"
	/>
</div>

<style>
	.lazy-load-background {
		min-width: attr(data-img-width);
		min-height: attr(data-img-height);
		background-image: url('data:image/png;base64,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'),
			gray;
	}
</style>
