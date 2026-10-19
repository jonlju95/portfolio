<script lang="ts">
    import { base } from '$app/paths';
    import Button from '$lib/components/Button.svelte';
    import { contact, resumeFile } from '$lib/data/contact';
    import { getLocale } from '$lib/paraglide/runtime';
    import { t } from '$lib/i18n';

    let { variant = 'default' }: { variant?: 'default' | 'cv' } = $props();

    const withCv = $derived(variant === 'cv');
    const resume = $derived(resumeFile(getLocale()));
</script>

<footer>
    <div class="container">
        <h2>{withCv ? t('about.contact.title') : t('about.contact.cta')}</h2>

        <div class="cluster">
            <Button variant="accent"
                    btnLabel={withCv ? t('about.contact.cta') : contact.email}
                    link="mailto:{contact.email}"/>
            {#if withCv}
                <Button variant="emphasis"
                        btnLabel={t('about.contact.cv')}
                        link="./resources/resume/{resume}"
                        download={true}/>
            {/if}
        </div>

        <nav class="links" aria-label="Contact">
            {#if withCv}
                <a href="mailto:{contact.email}">{contact.email}</a>
            {/if}
            <a href="tel:{contact.phone}">{contact.phone}</a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>

        <p class="legal">{new Date().getFullYear()} | {t('footer.credits')}</p>
    </div>
</footer>

<style lang="scss">
  footer {
    padding-block: var(--space-xl);
    background-color: var(--bg-emphasis);
    color: var(--text-light);
  }

  h2 {
    margin-bottom: var(--space-md);
    color: var(--accent);
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-md);
    margin-block: var(--space-md) var(--space-xl);

    a:hover {
      text-decoration: underline;
    }
  }

  .legal {
    padding-top: var(--space-sm);
    border-top: 1px solid var(--border);
    font-size: 0.8125rem;
    opacity: 0.75;
  }
</style>