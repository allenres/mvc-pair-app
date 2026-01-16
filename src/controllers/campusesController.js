const campuses = [
    { id: 1, code: "AUB", name: "Auburn Campus", city: "Auburn", open: true, programs: ["CS", "IT", "Nursing"] },
    { id: 2, code: "KCC", name: "Kent Campus", city: "Kent", open: true, programs: ["CS", "Business"] },
    { id: 3, code: "SEA", name: "Seattle Center", city: "Seattle", open: false, programs: ["Continuing Ed"] },
    { id: 4, code: "TAC", name: "Tacoma Site", city: "Tacoma", open: true, programs: ["Trades", "IT"] },
    { id: 5, code: "REN", name: "Renton Annex", city: "Renton", open: false, programs: ["ESL", "GED"] }
];

export const campusRoutes = (req, res) => {
    res.status(200).json({
        message: "Campus directory routes",
        routes: ["GET /", "GET /about|/info", "GET /:id", "GET /search?city=&open=&program="]
    })
}

export const displayLocations = (req, res) => {
    const display = campuses.map(campus => {
        return campus;
    })
    return res.status(200).json(display);
}

export const displaySingleLocation = (req, res) => {
    const { id } = req.params;

    const campus = campuses.find(campus => {
        return campus.id == id;
    })

    if (campus) {
        return res.status(200).json({
            campus
        });
    } else {
        return res.status(404).json({
            message: "Campus Not Found"
        })
    }
}