import db from "../Services/db.js";
const getAllCoordinates = (req, res) => {
    db.any('SELECT line, json_agg(ARRAY[ST_X(ubicacion), ST_Y(ubicacion)]) as latlon FROM public.trackgeometry WHERE station = true GROUP BY line ORDER BY line ASC;').then((data)=>{
        res.send(data);
    })
}
const getLevel = (req, res) => {
    const lineName = req.params.lineName;
        db.any('SELECT line, json_agg(json_build_array(pk, level_l_d1, level_r_d1)) AS data FROM trackgeometry WHERE line = $1 GROUP BY line ORDER BY line ASC;',[lineName]).then((data)=>{
    res.send(data);
});
}

const getAlign = (req, res) => {
    const lineName = req.params.lineName;
        db.any('SELECT line, json_agg(json_build_array(pk, align_l_d1, align_r_d1)) AS data FROM trackgeometry WHERE line = $1 GROUP BY line ORDER BY line ASC;',[lineName]).then((data)=>{
    res.send(data);
});
}

const getKilometer = (req, res) => {
    const lineName = req.params.lineName;
    
    db.any('SELECT line, json_agg(ARRAY[(pk)]) as kilometros FROM public.trackgeometry GROUP BY line ORDER BY line ASC;').then((data)=>{
    res.send(data);
});
} 

export{
    getAllCoordinates,
    getLevel,
    getAlign,
    getKilometer,
}