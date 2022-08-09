<script context="module">
	export const apiEndpoint = 'https://api.termtem.org/api/';
	export const api = {
		/**
		 * @param {string} endpoint
		 * @param {object} params
		 */
		get: async (endpoint, params) => {
			return fetch(`${apiEndpoint}${endpoint}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(params)
			}).then((res) => res.json());
		},
		/**
		 * @param {string} endpoint
		 * @param {object} params
		 */
		post: (endpoint, params) => {
			return fetch(`${apiEndpoint}${endpoint}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(params)
			}).then((res) => res.json());
		}
	};
</script>
