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
    return res.status(200).json({ campuses });
}

export const displaySingleLocation = (req, res) => {
    const { id } = req.params;

    const campus = campuses.find(el => el.id === Number(id))

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

export const searchCampuses = (req, res) => {
    const { city, program, open } = req.query;

    const campusesFound = campuses.filter(el => {
        let match = true;

        if (city && el.city.toLowerCase() !== city.toLowerCase()) {
            match = false;
        }

        if (program && !el.programs.some(p => p.toLowerCase() === program.toLowerCase())) {
            match = false;
        }

        if (open !== undefined) {
            const isOpen = open === 'true';
            if (el.open !== isOpen) {
                match = false;
            }
        }

        return match;
    });

    return res.status(200).json({
        message: `Found ${campusesFound.length} record(s)`,
        results: campusesFound
    });
}