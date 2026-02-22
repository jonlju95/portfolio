<script lang="ts">
    let {date, title, description, muted}: { date: string, title: string, description: string, muted?: boolean
    } = $props();
</script>

<div class="entry {muted ? 'muted' : ''}">
    <p class="entryDate">{date}</p>
    <p class="entryTitle">{title}</p>
    <p class="entryDesc">{description}</p>
</div>

<style lang="scss">
  .entry {
    border-left: var(--accent-mid) 3px solid;
    padding-left: 1.5rem;
    position: relative;
    transition: border-color 0.2s;

    &:hover {
      border-left-color: var(--accent-dark);
    }
  }

  .entryDate {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--accent-mid);
    letter-spacing: 0.04em;
    margin-bottom: 4px;
  }

  .entryTitle {
    font-size: 1rem;
    font-weight: 700;
    color: var(--entry-title);
    margin-bottom: 6px;
    line-height: 1.3;
  }

  .entryDesc {
    font-size: 0.875rem;
    color: var(--text);
    line-height: 1.6;
  }

  .entry.muted .entryTitle {
    color: var(--text-muted);
  }

  .entry.muted .entryDesc {
    color: var(--text-muted);
  }

  .entry.muted {
    border-left-color: var(--border);
  }
</style>