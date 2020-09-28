ymaps.ready(function () {

    if (!ymaps.panorama.isSupported()) {
        return;
    }

    const ZOOM = 17;

    function Poi(x, y, bearing, pitch, name, description)
    {
        this.x = x;
        this.y = y;
        this.bearing = bearing;
        this.pitch = pitch;
        this.name = name;
        this.description = description;

        this.makePlace = function (id){
            myMap = new ymaps.Map("map"+id, {
                center: [x, y],
                zoom: ZOOM
            });

            myPlacemark = new ymaps.Placemark([x, y],{
                hintContent: name,
                balloonContent: description
            });

            myMap.geoObjects.add(myPlacemark);

            ymaps.panorama.createPlayer(
                'player'+id,
                [x, y],
                { direction: [bearing, pitch] }
            )
                .done(function (player) {
                });

        }
    }

    new Poi(53.234980, 34.353979, 210, 10, "Площадь Партизан", "Площадь Партизан").makePlace(1);
    new Poi(53.268447, 34.363730, 60, 10, "Курган", "Курган Бессмертия").makePlace(2);
    new Poi(53.244434, 34.373543, 350, 17, "Покровская Гора", "Покровская Гора").makePlace(3);
});
