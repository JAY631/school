AOS.init();

Fancybox.bind("#gallery a", {
  groupAll: true,
  on: {
    ready: (fancybox) => {
      console.log(`fancybox #${fancybox.id} is ready!`);
    },
  },
});
