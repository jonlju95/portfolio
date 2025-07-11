This project is built with SvelteKit, using the adapter-static package to generate a static site. In case you, the 
reader, isn't familiar with SvelteKit, a brief explanation is included.

Pages are located in the src/routes/ directory:
* A +page.svelte file in the root corresponds to the site's main page (similar to index.html).
* A +page.svelte file inside a subfolder (e.g., about/+page.svelte) corresponds to a route like /about (similar 
     to about.html).

The +layout.svelte file provides shared markup for all nested +page.svelte files within the same folder. In this
project, it includes the navigation bar and footer.

Reusable components are placed in the src/lib/components/ folder. These components are used to keep the main page files
organized and avoid large blocks of repeated or complex markup.
