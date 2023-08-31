
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
        "PedestrianPlazas_1": {
            "type": "geojson",
            "data": json_PedestrianPlazas_1
        }
                    ,
        "WalkNYCSignLocations_2": {
            "type": "geojson",
            "data": json_WalkNYCSignLocations_2
        }
                    ,
        "StreetSeats_3": {
            "type": "geojson",
            "data": json_StreetSeats_3
        }
                    ,
        "LeaningBars_4": {
            "type": "geojson",
            "data": json_LeaningBars_4
        }
                    ,
        "CityBenches_5": {
            "type": "geojson",
            "data": json_CityBenches_5
        }
                    ,
        "nullfile_6": {
            "type": "geojson",
            "data": json_nullfile_6
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
            "id": "lyr_PedestrianPlazas_1_0",
            "type": "fill",
            "source": "PedestrianPlazas_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#987db7'}
        }
,
        {
            "id": "lyr_WalkNYCSignLocations_2_0",
            "type": "circle",
            "source": "WalkNYCSignLocations_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#beb297', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_StreetSeats_3_0",
            "type": "circle",
            "source": "StreetSeats_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#c43c39', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_LeaningBars_4_0",
            "type": "circle",
            "source": "LeaningBars_4",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e15989', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_CityBenches_5_0",
            "type": "circle",
            "source": "CityBenches_5",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e5b636', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_nullfile_6_0",
            "type": "circle",
            "source": "nullfile_6",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e77148', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}