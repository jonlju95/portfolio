<script lang="ts">
    let {label, icon, buttonProps}: { label: string, icon?: string, buttonProps?: string } = $props();
</script>

<button class="btn clickable {buttonProps}" onclick="{(e) => e.preventDefault()}">
    {#if icon}
        <img class="me-2" src="{icon}" alt="Icon" style="color: violet"/>
    {/if}

    {label}
</button>

<style lang="scss">
    .btn {
      height: 3rem;

      border: none;

      border-radius: 12px;
      box-shadow: var(--shadow);

      padding: 1rem 2rem;
      display: flex;
      align-items: center;


      &.btnPrimary {
        background-color: var(--primary);
        color: var(--bg);

        &.outline {
          background-color: transparent;
          color: var(--text);
          border: 1px solid var(--primary);
        }

        &:not(.outline):hover {
          background-color: oklab(from var(--primary) calc(l + 0.1) a b);
        }
      }

      &.btnSecondary {
        background-color: var(--secondary);
        color: var(--bg);

        &.outline {
          background-color: transparent;
          color: var(--text);
          border: 1px solid var(--secondary);

          &:hover {
            border-color: oklab(from var(--secondary) calc(l + 0.1) a b);
          }
        }

        &:not(.outline):hover {
          background-color: oklab(from var(--secondary) calc(l + 0.1) a b);
        }
      }



      img {
        height: 1rem;
      }
    }
</style>