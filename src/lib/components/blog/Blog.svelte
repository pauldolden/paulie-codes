<script lang="ts" context="module">
  const posts = import.meta.glob('../../routs/blog/*.svx');

  let body = [];

  for (const path in posts) {
    body.push(posts[path]().then(({ metadata }) => metadata));
  }

  export const load = async () => {
    const posts = await Promise.all(body);
    return {
      props: {
        posts
      }
    };
  };
</script>

{JSON.stringify(posts)}
