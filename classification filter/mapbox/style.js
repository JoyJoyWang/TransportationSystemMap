
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "ESRIGraylight_0": {
            "type": "raster",
            "tiles": ["https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"],
            "tileSize": 256
        },
        "poorcondition_1": {
            "type": "geojson",
            "data": json_poorcondition_1
        }
                    ,
        "faircondition_2": {
            "type": "geojson",
            "data": json_faircondition_2
        }
                    ,
        "goodcondition_3": {
            "type": "geojson",
            "data": json_goodcondition_3
        }
                    ,
        "goodcondition_4": {
            "type": "geojson",
            "data": json_goodcondition_4
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_ESRIGraylight_0_0",
            "type": "raster",
            "source": "ESRIGraylight_0"
        },
        {
            "id": "lyr_poorcondition_1_0",
            "type": "line",
            "source": "poorcondition_1",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#cf0000'}
        }
,
        {
            "id": "lyr_faircondition_2_0",
            "type": "line",
            "source": "faircondition_2",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#f8cd10'}
        }
,
        {
            "id": "lyr_goodcondition_3_0",
            "type": "line",
            "source": "goodcondition_3",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#5bba01'}
        }
,
        {
            "id": "lyr_goodcondition_4_0",
            "type": "line",
            "source": "goodcondition_4",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#5bba01'}
        }
],
}