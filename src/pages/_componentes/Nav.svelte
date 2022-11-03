<script>
	import { url, isActive } from "@roxi/routify";
	import {_enlacesMenu } from '../_stores/navLinks';
	import Fa from 'svelte-fa';
  import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';


  let show = false;
  let login = true;

	function handleBurger() {
    show = !show;
  }
</script>

<aside>
  <nav class="mobile-nav">
    <span class="burger" on:click={handleBurger}>☰</span>
    <span class="title">Routify Platform</span>    
  </nav>
  <nav class:show on:click={() => (show = false)}>
		<a href=".">
			LOGO
		</a>
    {#each _enlacesMenu as [path, name]}
      <a class="link" class:active={$isActive(path)} href={$url(path)}>
        {@html name}
      </a>
    {/each}
    {#if login}
      <a class="link" href={$url('login')}>
        <Fa icon={faUser} /> Login
      </a>
    {:else}
      <a class="link" href={$url('login')}>
        <Fa icon={faSignInAlt} />
      </a>
    {/if}
  </nav>
</aside>
