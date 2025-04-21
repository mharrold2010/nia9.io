var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SuluBoundary_1 = new ol.format.GeoJSON();
var features_SuluBoundary_1 = format_SuluBoundary_1.readFeatures(json_SuluBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuluBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuluBoundary_1.addFeatures(features_SuluBoundary_1);
var lyr_SuluBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SuluBoundary_1, 
                style: style_SuluBoundary_1,
                popuplayertitle: 'Sulu Boundary',
                interactive: false,
                title: '<img src="styles/legend/SuluBoundary_1.png" /> Sulu Boundary'
            });
var format_TawitawiBoundary_2 = new ol.format.GeoJSON();
var features_TawitawiBoundary_2 = format_TawitawiBoundary_2.readFeatures(json_TawitawiBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TawitawiBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TawitawiBoundary_2.addFeatures(features_TawitawiBoundary_2);
var lyr_TawitawiBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TawitawiBoundary_2, 
                style: style_TawitawiBoundary_2,
                popuplayertitle: 'Tawitawi Boundary',
                interactive: false,
                title: '<img src="styles/legend/TawitawiBoundary_2.png" /> Tawitawi Boundary'
            });
var format_ZamboangaCityBoundary_3 = new ol.format.GeoJSON();
var features_ZamboangaCityBoundary_3 = format_ZamboangaCityBoundary_3.readFeatures(json_ZamboangaCityBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZamboangaCityBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZamboangaCityBoundary_3.addFeatures(features_ZamboangaCityBoundary_3);
var lyr_ZamboangaCityBoundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZamboangaCityBoundary_3, 
                style: style_ZamboangaCityBoundary_3,
                popuplayertitle: 'Zamboanga City Boundary',
                interactive: false,
                title: '<img src="styles/legend/ZamboangaCityBoundary_3.png" /> Zamboanga City Boundary'
            });
var format_BasilanBoundary_4 = new ol.format.GeoJSON();
var features_BasilanBoundary_4 = format_BasilanBoundary_4.readFeatures(json_BasilanBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BasilanBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BasilanBoundary_4.addFeatures(features_BasilanBoundary_4);
var lyr_BasilanBoundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BasilanBoundary_4, 
                style: style_BasilanBoundary_4,
                popuplayertitle: 'Basilan Boundary',
                interactive: false,
                title: '<img src="styles/legend/BasilanBoundary_4.png" /> Basilan Boundary'
            });
var format_IsabelaBoundary_5 = new ol.format.GeoJSON();
var features_IsabelaBoundary_5 = format_IsabelaBoundary_5.readFeatures(json_IsabelaBoundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IsabelaBoundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IsabelaBoundary_5.addFeatures(features_IsabelaBoundary_5);
var lyr_IsabelaBoundary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IsabelaBoundary_5, 
                style: style_IsabelaBoundary_5,
                popuplayertitle: 'Isabela Boundary',
                interactive: false,
                title: '<img src="styles/legend/IsabelaBoundary_5.png" /> Isabela Boundary'
            });
var format_NorteBoundary_6 = new ol.format.GeoJSON();
var features_NorteBoundary_6 = format_NorteBoundary_6.readFeatures(json_NorteBoundary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorteBoundary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorteBoundary_6.addFeatures(features_NorteBoundary_6);
var lyr_NorteBoundary_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorteBoundary_6, 
                style: style_NorteBoundary_6,
                popuplayertitle: 'Norte Boundary',
                interactive: false,
                title: '<img src="styles/legend/NorteBoundary_6.png" /> Norte Boundary'
            });
var format_SurBoundary_7 = new ol.format.GeoJSON();
var features_SurBoundary_7 = format_SurBoundary_7.readFeatures(json_SurBoundary_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SurBoundary_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurBoundary_7.addFeatures(features_SurBoundary_7);
var lyr_SurBoundary_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SurBoundary_7, 
                style: style_SurBoundary_7,
                popuplayertitle: 'Sur Boundary',
                interactive: false,
                title: '<img src="styles/legend/SurBoundary_7.png" /> Sur Boundary'
            });
var format_SibugayBoundary_8 = new ol.format.GeoJSON();
var features_SibugayBoundary_8 = format_SibugayBoundary_8.readFeatures(json_SibugayBoundary_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SibugayBoundary_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SibugayBoundary_8.addFeatures(features_SibugayBoundary_8);
var lyr_SibugayBoundary_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SibugayBoundary_8, 
                style: style_SibugayBoundary_8,
                popuplayertitle: 'Sibugay Boundary',
                interactive: false,
                title: '<img src="styles/legend/SibugayBoundary_8.png" /> Sibugay Boundary'
            });
var format_EGPIP11B_9 = new ol.format.GeoJSON();
var features_EGPIP11B_9 = format_EGPIP11B_9.readFeatures(json_EGPIP11B_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EGPIP11B_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EGPIP11B_9.addFeatures(features_EGPIP11B_9);
var lyr_EGPIP11B_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EGPIP11B_9, 
                style: style_EGPIP11B_9,
                popuplayertitle: 'EGPIP 1.1B',
                interactive: true,
                title: '<img src="styles/legend/EGPIP11B_9.png" /> EGPIP 1.1B'
            });
var group_R9PROVINCE = new ol.layer.Group({
                                layers: [lyr_SuluBoundary_1,lyr_TawitawiBoundary_2,lyr_ZamboangaCityBoundary_3,lyr_BasilanBoundary_4,lyr_IsabelaBoundary_5,lyr_NorteBoundary_6,lyr_SurBoundary_7,lyr_SibugayBoundary_8,],
                                fold: 'close',
                                title: 'R9 PROVINCE'});

lyr_OSMStandard_0.setVisible(true);lyr_SuluBoundary_1.setVisible(true);lyr_TawitawiBoundary_2.setVisible(true);lyr_ZamboangaCityBoundary_3.setVisible(true);lyr_BasilanBoundary_4.setVisible(true);lyr_IsabelaBoundary_5.setVisible(true);lyr_NorteBoundary_6.setVisible(true);lyr_SurBoundary_7.setVisible(true);lyr_SibugayBoundary_8.setVisible(true);lyr_EGPIP11B_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_R9PROVINCE,lyr_EGPIP11B_9];
lyr_SuluBoundary_1.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_TawitawiBoundary_2.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_ZamboangaCityBoundary_3.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_BasilanBoundary_4.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_IsabelaBoundary_5.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_NorteBoundary_6.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_SurBoundary_7.set('fieldAliases', {'ID': 'ID', 'Provincee': 'Provincee', });
lyr_SibugayBoundary_8.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_EGPIP11B_9.set('fieldAliases', {'PROJECT NAME': 'PROJECT NAME', 'PROVINCE': 'PROVINCE', 'MUNICIPALITY': 'MUNICIPALITY', 'DISTRICT': 'DISTRICT', 'BUDGET': 'BUDGET', 'NEW': 'NEW', 'RESTORE': 'RESTORE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'PHYSICAL ACCOMPLISHMENT': 'PHYSICAL ACCOMPLISHMENT', });
lyr_SuluBoundary_1.set('fieldImages', {'fid': '', 'Shape_Leng': '', 'Shape_Area': '', 'ADM2_EN': '', 'ADM2_PCODE': '', 'ADM2_REF': '', 'ADM2ALT1EN': '', 'ADM2ALT2EN': '', 'ADM1_EN': '', 'ADM1_PCODE': '', 'ADM0_EN': '', 'ADM0_PCODE': '', 'date': '', 'validOn': '', 'validTo': '', });
lyr_TawitawiBoundary_2.set('fieldImages', {'fid': '', 'Shape_Leng': '', 'Shape_Area': '', 'ADM2_EN': '', 'ADM2_PCODE': '', 'ADM2_REF': '', 'ADM2ALT1EN': '', 'ADM2ALT2EN': '', 'ADM1_EN': '', 'ADM1_PCODE': '', 'ADM0_EN': '', 'ADM0_PCODE': '', 'date': '', 'validOn': '', 'validTo': '', });
lyr_ZamboangaCityBoundary_3.set('fieldImages', {'fid': '', 'Shape_Leng': '', 'Shape_Area': '', 'ADM2_EN': '', 'ADM2_PCODE': '', 'ADM2_REF': '', 'ADM2ALT1EN': '', 'ADM2ALT2EN': '', 'ADM1_EN': '', 'ADM1_PCODE': '', 'ADM0_EN': '', 'ADM0_PCODE': '', 'date': '', 'validOn': '', 'validTo': '', });
lyr_BasilanBoundary_4.set('fieldImages', {'fid': '', 'Shape_Leng': '', 'Shape_Area': '', 'ADM2_EN': '', 'ADM2_PCODE': '', 'ADM2_REF': '', 'ADM2ALT1EN': '', 'ADM2ALT2EN': '', 'ADM1_EN': '', 'ADM1_PCODE': '', 'ADM0_EN': '', 'ADM0_PCODE': '', 'date': '', 'validOn': '', 'validTo': '', });
lyr_IsabelaBoundary_5.set('fieldImages', {'fid': '', 'Shape_Leng': '', 'Shape_Area': '', 'ADM2_EN': '', 'ADM2_PCODE': '', 'ADM2_REF': '', 'ADM2ALT1EN': '', 'ADM2ALT2EN': '', 'ADM1_EN': '', 'ADM1_PCODE': '', 'ADM0_EN': '', 'ADM0_PCODE': '', 'date': '', 'validOn': '', 'validTo': '', });
lyr_NorteBoundary_6.set('fieldImages', {'fid': '', 'Shape_Leng': '', 'Shape_Area': '', 'ADM2_EN': '', 'ADM2_PCODE': '', 'ADM2_REF': '', 'ADM2ALT1EN': '', 'ADM2ALT2EN': '', 'ADM1_EN': '', 'ADM1_PCODE': '', 'ADM0_EN': '', 'ADM0_PCODE': '', 'date': '', 'validOn': '', 'validTo': '', });
lyr_SurBoundary_7.set('fieldImages', {'ID': '', 'Provincee': '', });
lyr_SibugayBoundary_8.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_EGPIP11B_9.set('fieldImages', {'PROJECT NAME': 'TextEdit', 'PROVINCE': 'TextEdit', 'MUNICIPALITY': 'TextEdit', 'DISTRICT': 'TextEdit', 'BUDGET': 'TextEdit', 'NEW': 'Range', 'RESTORE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'PHYSICAL ACCOMPLISHMENT': '', });
lyr_SuluBoundary_1.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_TawitawiBoundary_2.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_ZamboangaCityBoundary_3.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_BasilanBoundary_4.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_IsabelaBoundary_5.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_NorteBoundary_6.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_SurBoundary_7.set('fieldLabels', {'ID': 'no label', 'Provincee': 'no label', });
lyr_SibugayBoundary_8.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_EGPIP11B_9.set('fieldLabels', {'PROJECT NAME': 'no label', 'PROVINCE': 'no label', 'MUNICIPALITY': 'no label', 'DISTRICT': 'no label', 'BUDGET': 'no label', 'NEW': 'no label', 'RESTORE': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'PHYSICAL ACCOMPLISHMENT': 'no label', });
lyr_EGPIP11B_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});