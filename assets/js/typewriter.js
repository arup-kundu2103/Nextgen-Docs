document$.subscribe(() => {
    const instance = new Typewriter('#typewriter', {
        strings: [
            'Healthcare industry', 
            'Behavioral Health',
            'Cardiology',
            'Community Health (CHC/FQHC)',
            'Ophthalmology',
            'Podiatry',
        ],
        autoStart: true,
        loop: true,
    });
})