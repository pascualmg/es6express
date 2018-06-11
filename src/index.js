import express from 'express'
const app = express();

app.listen(
    8888,
    () => console.info('Server running on port ', 8888)
);

///Routes ....
app.get( '/', (req, res) => res.json("rulando..."));
app.get('/example', (req, res) => {
    //mocked data.
    res.send(
        {
            "id": "string",
            "name": "string",
            "type": "string",
            "measure": {
                "long": 0,
                "high": 0,
                "wide": 0
            },
            "articles": [
                {
                    "article": {
                        "id": "string",
                        "name": "string",
                        "sku": "string",
                        "path_number": "string",
                        "serial_numbers": [
                            "string"
                        ],
                        "eans": [
                            "string"
                        ],
                        "movement_statistics": {
                            "rotation": "string",
                            "pending_orders": 0
                        },
                        "family": {
                            "name": "string",
                            "serial_number_required": true,
                            "type": "volumetric"
                        },
                        "measure": {
                            "long": 0,
                            "high": 0,
                            "wide": 0,
                            "weight": 0
                        }
                    },
                    "quantity": 0,
                    "created_at": "2018-06-06T08:21:33.018Z"
                }
            ]
        }
    )
});
