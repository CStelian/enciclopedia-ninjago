import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: "server",
    image: {
        domains: ['cdn.enciclopedianinjago.ro']
    },
});
