export default () => ({
  port: parseInt(process.env.PORT, 10) || 4000,
  env: process.env.NODE_ENV || 'development',
  pokemonApi: {
    limits: {
      pokemon: '100',
      items: '954',
    },
    baseUrl: 'https://pokeapi.co/api/v2',
    pokemonUrl: '/pokemon',
  },
});
