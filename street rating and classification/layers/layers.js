var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_street_classification_1 = new ol.format.GeoJSON();
var features_street_classification_1 = format_street_classification_1.readFeatures(json_street_classification_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_street_classification_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_street_classification_1.addFeatures(features_street_classification_1);
var lyr_street_classification_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_street_classification_1, 
                style: style_street_classification_1,
                interactive: true,
    title: 'street_classification<br />\
    <img src="styles/legend/street_classification_1_0.png" /> GOOD<br />\
    <img src="styles/legend/street_classification_1_1.png" /> FAIR<br />\
    <img src="styles/legend/street_classification_1_2.png" /> POOR<br />'
        });
var format_street_rating_2 = new ol.format.GeoJSON();
var features_street_rating_2 = format_street_rating_2.readFeatures(json_street_rating_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_street_rating_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_street_rating_2.addFeatures(features_street_rating_2);
var lyr_street_rating_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_street_rating_2, 
                style: style_street_rating_2,
                interactive: true,
    title: 'street_rating<br />\
    <img src="styles/legend/street_rating_2_0.png" /> 0<br />\
    <img src="styles/legend/street_rating_2_1.png" /> 1<br />\
    <img src="styles/legend/street_rating_2_2.png" /> 2<br />\
    <img src="styles/legend/street_rating_2_3.png" /> 3<br />\
    <img src="styles/legend/street_rating_2_4.png" /> 5<br />\
    <img src="styles/legend/street_rating_2_5.png" /> 6<br />\
    <img src="styles/legend/street_rating_2_6.png" /> 7<br />\
    <img src="styles/legend/street_rating_2_7.png" /> 8<br />\
    <img src="styles/legend/street_rating_2_8.png" /> 9<br />\
    <img src="styles/legend/street_rating_2_9.png" /> 10<br />'
        });

lyr_ESRIGraylight_0.setVisible(true);lyr_street_classification_1.setVisible(false);lyr_street_rating_2.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_street_classification_1,lyr_street_rating_2];
lyr_street_classification_1.set('fieldAliases', {'Rating_B': 'Rating_B', 'RatingWord': 'RatingWord', 'RatingDate': 'RatingDate', 'RatingFY_S': 'RatingFY_S', 'Shape_len': 'Shape_len', });
lyr_street_rating_2.set('fieldAliases', {'Rating_B': 'Rating_B', 'RatingWord': 'RatingWord', 'RatingDate': 'RatingDate', 'RatingFY_S': 'RatingFY_S', 'Shape_len': 'Shape_len', });
lyr_street_classification_1.set('fieldImages', {'Rating_B': 'Range', 'RatingWord': 'TextEdit', 'RatingDate': 'DateTime', 'RatingFY_S': 'TextEdit', 'Shape_len': 'TextEdit', });
lyr_street_rating_2.set('fieldImages', {'Rating_B': 'Range', 'RatingWord': 'TextEdit', 'RatingDate': 'DateTime', 'RatingFY_S': 'TextEdit', 'Shape_len': 'TextEdit', });
lyr_street_classification_1.set('fieldLabels', {'Rating_B': 'inline label', 'RatingWord': 'inline label', 'RatingDate': 'inline label', 'RatingFY_S': 'inline label', 'Shape_len': 'inline label', });
lyr_street_rating_2.set('fieldLabels', {'Rating_B': 'inline label', 'RatingWord': 'inline label', 'RatingDate': 'inline label', 'RatingFY_S': 'inline label', 'Shape_len': 'inline label', });
lyr_street_rating_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});