document.addEventListener('DOMContentLoaded', () =>{
    const priceSlider = document.querySelector('#range');
    noUiSlider.create(priceSlider, {
        start:  [3, 25],
        connect: true,
        step:1,
        range: {
            'min': [3],
            'max': [25]
        },
        tooltips: true,
        format: {
            to: function(value) {
                return parseInt(value);
            },
            from: function (value) {
                return parseInt(value);
            }
        }
    });
})