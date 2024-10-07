const char = createSorcerer('aborba');
const monster = createBigmonster();

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
)