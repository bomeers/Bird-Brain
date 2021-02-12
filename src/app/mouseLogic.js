function mouseMove(data, pupil) {
    var mousePosition = data.toString().split(',');
    pupil[0].style.top = mousePosition[1] / (window.screen.height / 30) + "px";
    pupil[0].style.left = mousePosition[0] / (window.screen.width / 30) + "px";
    pupil[1].style.top = mousePosition[1] / (window.screen.height / 30) + "px";
    pupil[1].style.left = mousePosition[0] / (window.screen.width / 30) + "px";
}

module.exports = {
    mouseMove
  };