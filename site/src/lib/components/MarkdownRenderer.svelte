<script>
	import SvelteMarkdown from 'svelte-markdown';
	import Link from './Link.svelte';
	import {
		P,
		Mark,
		Span,
		Hr,
		Blockquote,
		Img,
		Table,
		TableHead,
		TableBody,
		TableBodyRow,
		TableBodyCell,
		List,
		Li,
		Heading
	} from 'flowbite-svelte';
	export let source = '';
	if (typeof source !== 'string') source = '';
	/**
	 * @type {boolean}
	 */
	export let isInline;
	let renderers = {
		// text: Span,
		paragraph: P,
		em: Mark,
		strong: Span,
		hr: Hr,
		blockquote: Blockquote,
		del: Span,
		link: Link,
		image: Img,
		table: Table,
		tablehead: TableHead,
		tablebody: TableBody,
		tablerow: TableBodyRow,
		tablecell: TableBodyCell,
		list: List,
		listitem: Li,
		heading: Heading
		// codespan - Inline code (<code>)
		// code - Block of code (<pre><code>)
		// html - HTML node
	};
</script>

<SvelteMarkdown {source} {isInline} {renderers} />
