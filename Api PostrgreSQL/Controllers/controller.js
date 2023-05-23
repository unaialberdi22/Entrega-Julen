import db from "../Services/db.js";
const getAllCoordinates = (req, res) => {
    db.any('SELECT line, json_agg(ARRAY[ST_X(ubicacion), ST_Y(ubicacion)]) as latlon FROM public.trackgeometry WHERE station = true GROUP BY line ORDER BY line ASC;').then((data)=>{
        res.send(data);
    })
}

const getKilometer = (req, res) => {
    
    db.any('SELECT line, json_agg(ARRAY[(pk)]) as kilometros FROM public.trackgeometry GROUP BY line ORDER BY line ASC;').then((data)=>{
    res.send(data);
});
}

const getData = (req, res) => {
    // const dataType = req.params.dataType;
    const KM1 = req.params.KM1;
    const KM2 = req.params.KM2;
    const dataType = req.params.dataType;
    const lineName = req.params.lineName;
        db.any(`SELECT line, json_agg(json_build_array(pk, ${dataType}_l_d1, ${dataType}_r_d1)) AS data FROM trackgeometry WHERE line = $1 AND pk >= $2 AND pk <= $3 GROUP BY line ORDER BY line ASC;`,[lineName, KM1, KM2]).then((data)=>{
    res.send(data);
});
}

export{
    getAllCoordinates,
    getKilometer,
    getData
}