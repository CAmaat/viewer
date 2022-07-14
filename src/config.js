function config() {
    var ini = [
        {   // 1.
             name: 'default',
            img_width: 4276,
            img_height: 4222,
            img_depth: 57 * 3.8462*0.9,
            particle_size: 8000.0,
            // zThres: 1500.0,
            geneData: 'https://api.github.com/repos/camaat/datastore/contents/experiment_1',
            cellData: 'https://api.github.com/repos/camaat/datastore/contents/experiment_1',
        },
    ];
    return d3.map(ini, function (d) {return d.name;})
}
