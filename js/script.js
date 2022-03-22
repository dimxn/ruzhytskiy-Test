/* Slider for class Stages */

$(document).ready(function () {
    let position = 0;
    const slidesToShow = 1.992,
        slidesToScroll = 2,
        container = $(".stages, .container"),
        steps = $(".steps"),
        firstStep = $(".first-step"),
        secondStep = $(".second-step"),
        thirdStep = $(".third-step"),
        fourthStep = $(".fourth-step"),
        fivethStep = $(".fiveth-step"),
        items = [firstStep, secondStep, thirdStep, fourthStep, fivethStep],
        stepsCount = items.length,
        btnLeft = $(".step-button__left"),
        btnRight = $(".step-button__right"),
        itemWidth = container.width() / slidesToShow,
        movePosition = slidesToScroll * itemWidth;

    btnRight.click(function () {
        position -= movePosition;
        setPosition();
        checkButtons();
    });

    btnLeft.click(function () {
        position += movePosition;
        setPosition();
        checkButtons();
    });

    const setPosition = () => {
        steps.css({
            transform: `translateX(${position}px)`,
            transition: `all 1s ease`,
        });
    };

    const checkButtons = () => {
        btnLeft.prop('disabled', position === 0);
        btnRight.prop(
            'disabled',
            position <= -(stepsCount - slidesToShow) * itemWidth
        );
    };
    checkButtons();
});
