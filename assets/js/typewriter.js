document$.subscribe(() => {
    const instance = new Typewriter('#typewriter', {
        strings: [
            'Healthcare industry', 
            'producers',
            'distributors',
            'LDCs',
            'utilities',
            'pipelines',
        ],
        autoStart: true,
        loop: true,
    });
})