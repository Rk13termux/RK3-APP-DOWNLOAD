// postcss.config.mjs
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: {
    // Usa el plugin @tailwindcss/postcss en vez de tailwindcss directamente
    tailwindcss: {},
    autoprefixer: {},
  }
};
