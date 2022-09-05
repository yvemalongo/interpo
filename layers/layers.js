var wms_layers = [];


        var lyr_openstreetmap_0 = new ol.layer.Tile({
            'title': 'openstreetmap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_pointsinteret1_1 = new ol.format.GeoJSON();
var features_pointsinteret1_1 = format_pointsinteret1_1.readFeatures(json_pointsinteret1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointsinteret1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointsinteret1_1.addFeatures(features_pointsinteret1_1);
var lyr_pointsinteret1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pointsinteret1_1, 
                style: style_pointsinteret1_1,
                interactive: true,
                title: '<img src="styles/legend/pointsinteret1_1.png" /> pointsinteret1'
            });
var lyr_interpocobalt_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "interpocobalt",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/interpocobalt_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [759745.126673, 5961477.981777, 766618.308833, 5968226.492649]
                            })
                        });
var lyr_interpocuivre_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "interpocuivre",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/interpocuivre_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [759708.139679, 5961440.908105, 766655.238787, 5968263.566378]
                            })
                        });
var format_isoteneurco_4 = new ol.format.GeoJSON();
var features_isoteneurco_4 = format_isoteneurco_4.readFeatures(json_isoteneurco_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isoteneurco_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isoteneurco_4.addFeatures(features_isoteneurco_4);
var lyr_isoteneurco_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_isoteneurco_4, 
                style: style_isoteneurco_4,
                interactive: true,
    title: 'isoteneurco<br />\
    <img src="styles/legend/isoteneurco_4_0.png" /> 6 - 8<br />\
    <img src="styles/legend/isoteneurco_4_1.png" /> 8 - 10<br />\
    <img src="styles/legend/isoteneurco_4_2.png" /> 10 - 12<br />\
    <img src="styles/legend/isoteneurco_4_3.png" /> 12 - 14<br />\
    <img src="styles/legend/isoteneurco_4_4.png" /> 14 - 16<br />'
        });
var format_isoteneurco2_5 = new ol.format.GeoJSON();
var features_isoteneurco2_5 = format_isoteneurco2_5.readFeatures(json_isoteneurco2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isoteneurco2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isoteneurco2_5.addFeatures(features_isoteneurco2_5);
var lyr_isoteneurco2_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_isoteneurco2_5, 
                style: style_isoteneurco2_5,
                interactive: true,
    title: 'isoteneurco2<br />\
    <img src="styles/legend/isoteneurco2_5_0.png" /> 2 - 4<br />\
    <img src="styles/legend/isoteneurco2_5_1.png" /> 4 - 6<br />\
    <img src="styles/legend/isoteneurco2_5_2.png" /> 6 - 8<br />\
    <img src="styles/legend/isoteneurco2_5_3.png" /> 8 - 10<br />\
    <img src="styles/legend/isoteneurco2_5_4.png" /> 10 - 12<br />'
        });
var format_isoteneurcuivre_6 = new ol.format.GeoJSON();
var features_isoteneurcuivre_6 = format_isoteneurcuivre_6.readFeatures(json_isoteneurcuivre_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isoteneurcuivre_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isoteneurcuivre_6.addFeatures(features_isoteneurcuivre_6);
var lyr_isoteneurcuivre_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_isoteneurcuivre_6, 
                style: style_isoteneurcuivre_6,
                interactive: true,
    title: 'isoteneurcuivre<br />\
    <img src="styles/legend/isoteneurcuivre_6_0.png" /> 12 - 40<br />\
    <img src="styles/legend/isoteneurcuivre_6_1.png" /> 40 - 68<br />\
    <img src="styles/legend/isoteneurcuivre_6_2.png" /> 68 - 96<br />\
    <img src="styles/legend/isoteneurcuivre_6_3.png" /> 96 - 124<br />\
    <img src="styles/legend/isoteneurcuivre_6_4.png" /> 124 - 152<br />'
        });
var format_grille_7 = new ol.format.GeoJSON();
var features_grille_7 = format_grille_7.readFeatures(json_grille_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_grille_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_grille_7.addFeatures(features_grille_7);
var lyr_grille_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_grille_7, 
                style: style_grille_7,
                interactive: true,
                title: '<img src="styles/legend/grille_7.png" /> grille'
            });
var format_pointinteret_8 = new ol.format.GeoJSON();
var features_pointinteret_8 = format_pointinteret_8.readFeatures(json_pointinteret_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointinteret_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointinteret_8.addFeatures(features_pointinteret_8);
var lyr_pointinteret_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pointinteret_8, 
                style: style_pointinteret_8,
                interactive: true,
                title: '<img src="styles/legend/pointinteret_8.png" /> pointinteret'
            });
var format_teneur_9 = new ol.format.GeoJSON();
var features_teneur_9 = format_teneur_9.readFeatures(json_teneur_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_teneur_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_teneur_9.addFeatures(features_teneur_9);
var lyr_teneur_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_teneur_9, 
                style: style_teneur_9,
                interactive: true,
                title: '<img src="styles/legend/teneur_9.png" /> teneur'
            });
var group_echantillonnage = new ol.layer.Group({
                                layers: [lyr_grille_7,lyr_pointinteret_8,lyr_teneur_9,],
                                title: "echantillonnage"});
var group_Isoteneur = new ol.layer.Group({
                                layers: [lyr_isoteneurco_4,lyr_isoteneurco2_5,lyr_isoteneurcuivre_6,],
                                title: "Isoteneur"});
var group_rasterinterpolation = new ol.layer.Group({
                                layers: [lyr_interpocobalt_2,lyr_interpocuivre_3,],
                                title: "rasterinterpolation"});
var group_Overview = new ol.layer.Group({
                                layers: [lyr_openstreetmap_0,lyr_pointsinteret1_1,],
                                title: "Overview"});

lyr_openstreetmap_0.setVisible(true);lyr_pointsinteret1_1.setVisible(true);lyr_interpocobalt_2.setVisible(true);lyr_interpocuivre_3.setVisible(true);lyr_isoteneurco_4.setVisible(true);lyr_isoteneurco2_5.setVisible(true);lyr_isoteneurcuivre_6.setVisible(true);lyr_grille_7.setVisible(true);lyr_pointinteret_8.setVisible(true);lyr_teneur_9.setVisible(true);
var layersList = [group_Overview,group_rasterinterpolation,group_Isoteneur,group_echantillonnage];
lyr_pointsinteret1_1.set('fieldAliases', {'ID': 'ID', 'Cobaltppm': 'Cobaltppm', 'Cuivreppm': 'Cuivreppm', });
lyr_isoteneurco_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_isoteneurco2_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_isoteneurcuivre_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_grille_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'groupid': 'groupid', });
lyr_pointinteret_8.set('fieldAliases', {'ID': 'ID', 'Cobaltppm': 'Cobaltppm', 'Cuivreppm': 'Cuivreppm', 'groupe-id': 'groupe-id', });
lyr_teneur_9.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Cobaltppm': 'Cobaltppm', 'Cuivreppm': 'Cuivreppm', 'groupe-id': 'groupe-id', });
lyr_pointsinteret1_1.set('fieldImages', {'ID': '', 'Cobaltppm': '', 'Cuivreppm': '', });
lyr_isoteneurco_4.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_isoteneurco2_5.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_isoteneurcuivre_6.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_grille_7.set('fieldImages', {'fid': '', 'id': '', 'left': '', 'top': '', 'right': '', 'bottom': '', 'groupid': '', });
lyr_pointinteret_8.set('fieldImages', {'ID': '', 'Cobaltppm': '', 'Cuivreppm': '', 'groupe-id': '', });
lyr_teneur_9.set('fieldImages', {'fid': '', 'ID': '', 'Cobaltppm': '', 'Cuivreppm': '', 'groupe-id': '', });
lyr_pointsinteret1_1.set('fieldLabels', {});
lyr_isoteneurco_4.set('fieldLabels', {});
lyr_isoteneurco2_5.set('fieldLabels', {});
lyr_isoteneurcuivre_6.set('fieldLabels', {});
lyr_grille_7.set('fieldLabels', {});
lyr_pointinteret_8.set('fieldLabels', {});
lyr_teneur_9.set('fieldLabels', {});
lyr_teneur_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});