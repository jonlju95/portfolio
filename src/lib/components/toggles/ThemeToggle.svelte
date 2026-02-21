<script lang="ts">
    import {browser} from "$app/environment";

    let currentTheme = $state(
        browser ? (document.documentElement.getAttribute("data-theme") ?? 'light') : 'light'
    );

    const toggleTheme = () => {
        const next = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem('theme', next);
        currentTheme = next;
    }
</script>

<button onclick={toggleTheme} aria-label={currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
    {#if currentTheme === 'dark'}
        <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M 12,0.9999999 V 2.2222221 M 12,21.777777 V 23 M 2.2222221,12 H 0.9999999 M 5.0505909,5.0505909 4.0555554,4.0555554 M 18.949433,5.0505909 19.944444,4.0555554 M 5.0505909,18.954444 4.0555554,19.944566 m 14.8938776,-0.990122 0.995011,0.990122 M 23,12 h -1.222223 m -4.888889,0 c 0,2.700011 -2.188877,4.888888 -4.888888,4.888888 -2.7000603,0 -4.8888891,-2.188877 -4.8888891,-4.888888 0,-2.7000603 2.1888288,-4.8888891 4.8888891,-4.8888891 2.700011,0 4.888888,2.1888288 4.888888,4.8888891 z"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    {:else}
        <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="m 1.0034675,11.597194 c 0,6.297637 5.1051896,11.402795 11.4027395,11.402795 4.798279,0 8.904283,-2.963713 10.587456,-7.160322 -1.313344,0.527823 -2.750471,0.825309 -4.252593,0.825309 -6.297614,0 -11.40274,-5.105158 -11.40274,-11.4027694 0,-1.4950838 0.2931014,-2.9404387 0.816209,-4.2487574 C 3.9627858,2.6989343 1.0034675,6.8024707 1.0034675,11.597194 Z"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    {/if}
</button>

<style lang="scss">
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    line-height: 0;
    padding: 0.5rem;
    color: var(--text);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--text);
    color: var(--text);
  }
</style>