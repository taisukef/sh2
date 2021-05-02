const lls_fukui = [
  [36.34267464291701, 135.39170256221536],
  [35.30447362875848, 136.9786968532829]
];
const lls = lls_fukui;

const json = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [lls[0][1], lls[0][0]],
            [lls[1][1], lls[0][0]],
            [lls[1][1], lls[1][0]],
            [lls[1][1], lls[1][0]],
            [lls[0][1], lls[0][0]],
          ]
        ],
      }
    }
  ]
};
await Deno.writeTextFile("extent/extent.geojson", JSON.stringify(json, null, 2));
