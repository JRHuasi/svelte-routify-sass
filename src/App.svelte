<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import GlobalScssImports from "./GlobalScssImports.svelte";
  
</script>

<GlobalScssImports />
<Router {routes} />