import db from "../Services/db.js";
const getAllCoordinates = (req, res) => {
    db.any('SELECT line, track, json_agg(ARRAY[ST_X(ubicacion), ST_Y(ubicacion)]) as latlon FROM public.trackgeometry WHERE station = true GROUP BY line, track ORDER BY line ASC;').then((data)=>{
        res.send(data);
    })
}

const getKilometer = (req, res) => {
    const fecha = req.params.fecha;
    db.any(`WITH lines AS (SELECT DISTINCT line FROM public.trackgeometry), tracks AS (SELECT DISTINCT track FROM public.trackgeometry), combined AS (SELECT lines.line, tracks.track, COALESCE(json_agg(ARRAY[tg.pk]), '[]') AS kilometros FROM lines CROSS JOIN tracks LEFT JOIN public.trackgeometry tg ON tg.line = lines.line AND tg.track = tracks.track AND tg.track_measure_date >= '${fecha} 00:00:00' AND tg.track_measure_date <= '${fecha} 23:59:59.999' GROUP BY lines.line, tracks.track) SELECT c.line, c.track, c.kilometros FROM combined c WHERE (c.line, c.track) IN (SELECT DISTINCT line, track FROM public.trackgeometry) ORDER BY c.line ASC, c.track ASC NULLS LAST;`).then((data)=>{
    res.send(data);
});
}

// WHERE track_measure_date >= '${fecha} 00:00:00' AND track_measure_date <= '${fecha} 23:59:59.999'

const getData = (req, res) => {
    // const dataType = req.params.dataType;
    const KM1 = req.params.KM1;
    const KM2 = req.params.KM2;
    const dataType = req.params.dataType;
    const lineName = req.params.lineName;
    const fecha = req.params.fecha;
    const via = req.params.via;
        db.any(`SELECT line, json_agg(json_build_array(pk, ${dataType}_l_d1, ${dataType}_r_d1)) AS data FROM trackgeometry WHERE line = $1 AND pk >= $2 AND pk <= $3 AND track_measure_date  >= '${fecha} 00:00:00' AND track_measure_date <= '${fecha} 23:59:59.999' AND track = $4 GROUP BY line ORDER BY line ASC;`,[lineName, KM1, KM2, via]).then((data)=>{
    res.send(data);
});
}

export{
    getAllCoordinates,
    getKilometer,
    getData
}

// SELECT
//   l.line,
//   t.track,
//   COALESCE(json_agg(ARRAY[(tg.pk)]), '[]') AS kilometros
// FROM
//   (
//     SELECT DISTINCT line
//     FROM trackgeometry
//   ) l
// CROSS JOIN
//   (
//     SELECT DISTINCT track
//     FROM trackgeometry
//   ) t
// LEFT JOIN
//   trackgeometry tg ON tg.line = l.line AND tg.track = t.track AND tg.track_measure_date >= '2023-03-08 00:00:00' AND tg.track_measure_date <= '2023-03-08 23:59:59.999'
// GROUP BY
//   l.line,
//   t.track
// ORDER BY
//   t.track ASC;