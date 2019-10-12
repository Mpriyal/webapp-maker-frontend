const canonical = {
    project_id: 123,
    relations: [{
        name: 'Movies',
        attributes: [{
            name: 'Id',
            type: 'NUMBER',
            validations: [{
                required: true,
                min_length: 2,
                max_length: 100
            }]
        },{
            name: 'Name',
            type: 'VARCHAR',
            validations: [{
                required: false
            }]
        }]
    },{
        name: 'Actors',
        attributes: [{
            name: 'Id',
            type: 'NUMBER',
            validations: [{
                required: true,
                min_length: 2,
                max_length: 100
            }
        ]
        },{
            name: 'title',
            type: 'VARCHAR',
            validations: [{
                required: true
            }
        ]
        }]
    },{
        name: 'Library',
        attributes: [{
            name: 'Id',
            type: 'NUMBER',
            validations: [{
                required: true,
                min_length: 2,
                max_length: 100
            }]
        },{
            name: 'Name',
            type: 'VARCHAR',
            validations: [{
                required: false
            }]
        }]
    },{
        name: 'Books',
        attributes: [{
            name: 'Id',
            type: 'NUMBER',
            validations: [{
                required: true,
                min_length: 2,
                max_length: 100
            }]
        },{
            name: 'ISBN',
            type: 'NUMBER',
            validations: [{
                required: true,
                min_length: 2,
                max_length: 100
            }]
        },{
            name: 'Author',
            type: 'VARCHAR',
            validations: [{
                required: true,
                min_length: 2,
                max_length: 100
            }]
        },{
            name: 'Name',
            type: 'VARCHAR',
            validations: [{
                required: false
            }]
        }]
    }],
    meta: []
}

export default canonical;