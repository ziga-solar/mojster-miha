/*
* data examples:
* MULTIPOLYGON (((430580.97 137217.57, 430579.73 137217.79, 430579.21 137212.27, 430578.68 137204.78, 430578.32 137196.8, 430594.8 137201.4, 430604.52 137202.57, 430605.69 137205.07, 430605.45 137207.7, 430594.91 137215.15, 430587.89 137220.28, 430580.9 137222.11, 430579.55 137222.41, 430579.89 137220.74, 430585.32 137220.33, 430585.22 137217.16, 430587.18 137217.04, 430587.01 137214.18, 430593.38 137213.63, 430592.37 137203.59, 430579.92 137204.52, 430580.97 137217.57)), 
((430579.73 137217.79, 430580.97 137217.57, 430585.22 137217.16, 430585.32 137220.33, 430579.89 137220.74, 430579.73 137217.79)))
*
*
* POLYGON ((430618.8 137189.31, 430626.62 137184.58, 430626.98 137192.97, 430619.02 137195.11, 430618.8 137189.31))
*{
*    'type': 'Feature',
*    'geometry': {
*      'type': 'Polygon',
*      'coordinates': [[[-5e6, -1e6], [-4e6, 1e6], [-3e6, -1e6]]]
*    }
*  }
*/

// function parses MULTIPOLYGON into an array of polygons



function getCSV(path){
    $.get(path, function(data) {
        let msg = data;
        csvJSON(msg)
      })
}

 function elasticJSON(apiJSON){
    let geoJSONCollection =  {
        'type': 'FeatureCollection',
        'crs': {
            'type': 'name',
            'properties': {
                'name': 'EPSG:3857'
            }
        },
        'features': []
    };

    // NOTE: If your columns contain commas in their values, you'll need
    // to deal with those before doing the next step 
    // (you might convert them to &&& or something, then covert them back later)
    // jsfiddle showing the issue https://jsfiddle.net/
    for(var i=1;i<=apiJSON.length;i++){
        let temp = apiJSON[i-1]
        let geoJSONObj = {
            'type': 'Feature',
            'geometry':{
                'type':'',
                'coordinates': []
            },
            'properties':{
                'last_change':'',
                'plot':'',
                'type':'',
                'municipality':'',
                'polyColor':''
            }
        };

        parsedCoords =  parsePolyCoords(makePolyArray(temp.GEOMETRY));
        if (parsedCoords !== undefined && parsedCoords[0] !== undefined){
            geoJSONObj.geometry.coordinates = parsedCoords[1];
            geoJSONObj.geometry.type = parsedCoords[0];
            geoJSONObj.properties.last_change =  temp.ZAD_SPR;
            geoJSONObj.properties.plot = temp.PARCELA;
            geoJSONObj.properties.type = temp.VRS_AKT;
            geoJSONObj.properties.municipality =  temp.OB_ID;
            geoJSONObj.properties.polyColor =  temp.BARVA_POLIGONA;
            geoJSONCollection.features.push(geoJSONObj);
        }
        
        
  
    }
    let JSONString = geoJSONCollection;

    //return result; //JavaScript object
    return JSONString;
  }


function makePolyArray(polyString){
    if(polyString.length == 1){
        return null;
    }
    let polyArray = polyString.split('(');
    let polyArrayLength = polyArray.length;
    for(let i = 0; i < polyArrayLength; i++){
        polyArray[i] = polyArray[i].trim()
        if(polyArray[i].length < 5){
            polyArray.splice(i,1);
            i--;
            polyArrayLength--;
        }
        
        if (polyArray[i] !== undefined){
            polyArray[i] = polyArray[i].replace('),','')
            polyArray[i] = polyArray[i].replace(/[)]/g,'')
        }
    }
    if(polyArray === undefined){
        return undefined;
    }
    return polyArray
    
}

function parsePolyCoords(polyArray){
    if(polyArray == null){
        return null
    }
    if(polyArray === undefined){
        return undefined;
    }
    let type = polyArray[0]
    if (type !== undefined){
        type = type.toLowerCase().replace(/([m])/g,'M').replace(/([p])/g,'P')
    }
    let polyCoords = polyArray.slice(1,polyArray.length);
    for(let i = 0; i < polyCoords.length; i++){
        polyCoords[i] = polyCoords[i].split(',')
        for(let j = 0; j < polyCoords[i].length; j++){
            polyCoords[i][j] = polyCoords[i][j].trim()
            let tmpSplit = polyCoords[i][j].split(' ')
            tmpSplit = gk2GPS(tmpSplit[1], tmpSplit[0])
            polyCoords[i][j] = [tmpSplit[1], tmpSplit[0]]
        }
    }
    return [type, polyCoords]
}