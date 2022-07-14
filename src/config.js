function config() {
    var ini = [
        {   // 1.
             name: 'default',
            img_width: 4276,
            img_height: 4222,
            img_depth: 57 * 3.8462*0.9,
            particle_size: 8000.0,
            // zThres: 1500.0,
            geneData: [{mediaLink: './data/geneData/geneData_WT786_rHipp.tsv', size: "48103424"}],
            cellData: [{mediaLink: './data/cellData/cellData_WT786_rHipp.tsv', size: "17006592"}],
        },
    ];
    return d3.map(ini, function (d) {return d.name;})
}
