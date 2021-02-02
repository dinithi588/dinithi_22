var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Streams_1 = new ol.format.GeoJSON();
var features_Streams_1 = format_Streams_1.readFeatures(json_Streams_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streams_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streams_1.addFeatures(features_Streams_1);
var lyr_Streams_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Streams_1, 
                style: style_Streams_1,
                interactive: true,
                title: '<img src="styles/legend/Streams_1.png" /> Streams'
            });
var format_District_2 = new ol.format.GeoJSON();
var features_District_2 = format_District_2.readFeatures(json_District_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_2.addFeatures(features_District_2);
var lyr_District_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_District_2, 
                style: style_District_2,
                interactive: true,
                title: '<img src="styles/legend/District_2.png" /> District'
            });
var format_Road_3 = new ol.format.GeoJSON();
var features_Road_3 = format_Road_3.readFeatures(json_Road_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_3.addFeatures(features_Road_3);
var lyr_Road_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Road_3, 
                style: style_Road_3,
                interactive: true,
    title: 'Road<br />\
    <img src="styles/legend/Road_3_0.png" /> 1<br />\
    <img src="styles/legend/Road_3_1.png" /> 2<br />\
    <img src="styles/legend/Road_3_2.png" /> 3<br />\
    <img src="styles/legend/Road_3_3.png" /> <br />'
        });
var format_Major_Towns_4 = new ol.format.GeoJSON();
var features_Major_Towns_4 = format_Major_Towns_4.readFeatures(json_Major_Towns_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Major_Towns_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Major_Towns_4.addFeatures(features_Major_Towns_4);
var lyr_Major_Towns_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Major_Towns_4, 
                style: style_Major_Towns_4,
                interactive: true,
                title: '<img src="styles/legend/Major_Towns_4.png" /> Major_Towns'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Streams_1.setVisible(true);lyr_District_2.setVisible(true);lyr_Road_3.setVisible(true);lyr_Major_Towns_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Streams_1,lyr_District_2,lyr_Road_3,lyr_Major_Towns_4];
lyr_Streams_1.set('fieldAliases', {'FID_': 'FID_', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'STNET_': 'STNET_', 'STNET_ID': 'STNET_ID', 'ST_NET2_': 'ST_NET2_', 'ST_NET2_ID': 'ST_NET2_ID', 'CODE': 'CODE', 'NAME': 'NAME', });
lyr_District_2.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'Area': 'Area', 'District': 'District', 'Sinhalese': 'Sinhalese', 'SL_Tamils': 'SL_Tamils', 'Ind_Tamils': 'Ind_Tamils', 'Moor': 'Moor', 'Burgher': 'Burgher', 'Malay': 'Malay', 'Other': 'Other', 'Male': 'Male', 'Female': 'Female', 'Pop1963': 'Pop1963', 'Pop1971': 'Pop1971', 'Pop1981_': 'Pop1981_', 'Pop2001_': 'Pop2001_', 'Pop2012': 'Pop2012', 'Sin_2012': 'Sin_2012', 'In_Tam2012': 'In_Tam2012', 'Sl_Tam2012': 'Sl_Tam2012', 'Mus_2012': 'Mus_2012', 'Other_2012': 'Other_2012', });
lyr_Road_3.set('fieldAliases', {'ROAD_ID': 'ROAD_ID', 'CODE': 'CODE', 'CLASS': 'CLASS', });
lyr_Major_Towns_4.set('fieldAliases', {'ID': 'ID', 'NAME': 'NAME', });
lyr_Streams_1.set('fieldImages', {'FID_': '', 'FNODE_': '', 'TNODE_': '', 'LPOLY_': '', 'RPOLY_': '', 'LENGTH': '', 'STNET_': '', 'STNET_ID': '', 'ST_NET2_': '', 'ST_NET2_ID': '', 'CODE': '', 'NAME': '', });
lyr_District_2.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'Area': 'TextEdit', 'District': 'TextEdit', 'Sinhalese': 'TextEdit', 'SL_Tamils': 'TextEdit', 'Ind_Tamils': 'TextEdit', 'Moor': 'TextEdit', 'Burgher': 'TextEdit', 'Malay': 'TextEdit', 'Other': 'TextEdit', 'Male': 'TextEdit', 'Female': 'TextEdit', 'Pop1963': 'TextEdit', 'Pop1971': 'TextEdit', 'Pop1981_': 'Range', 'Pop2001_': 'Range', 'Pop2012': 'Range', 'Sin_2012': 'Range', 'In_Tam2012': 'Range', 'Sl_Tam2012': 'Range', 'Mus_2012': 'Range', 'Other_2012': 'Range', });
lyr_Road_3.set('fieldImages', {'ROAD_ID': 'TextEdit', 'CODE': 'Range', 'CLASS': 'TextEdit', });
lyr_Major_Towns_4.set('fieldImages', {'ID': '', 'NAME': '', });
lyr_Streams_1.set('fieldLabels', {'FID_': 'no label', 'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'STNET_': 'no label', 'STNET_ID': 'no label', 'ST_NET2_': 'no label', 'ST_NET2_ID': 'no label', 'CODE': 'no label', 'NAME': 'no label', });
lyr_District_2.set('fieldLabels', {'PROVINCE_N': 'inline label', 'Area': 'inline label', 'District': 'no label', 'Sinhalese': 'no label', 'SL_Tamils': 'no label', 'Ind_Tamils': 'no label', 'Moor': 'no label', 'Burgher': 'no label', 'Malay': 'no label', 'Other': 'no label', 'Male': 'no label', 'Female': 'no label', 'Pop1963': 'no label', 'Pop1971': 'no label', 'Pop1981_': 'no label', 'Pop2001_': 'no label', 'Pop2012': 'no label', 'Sin_2012': 'no label', 'In_Tam2012': 'no label', 'Sl_Tam2012': 'no label', 'Mus_2012': 'no label', 'Other_2012': 'no label', });
lyr_Road_3.set('fieldLabels', {'ROAD_ID': 'inline label', 'CODE': 'inline label', 'CLASS': 'inline label', });
lyr_Major_Towns_4.set('fieldLabels', {'ID': 'no label', 'NAME': 'no label', });
lyr_Major_Towns_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});