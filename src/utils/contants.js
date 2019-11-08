/**
 * This is the sample canonical form.
 */

const canonical = {
    project_id: 123,
    relations: [{
        id: 1,
        name: 'Movies',
        attributes: [{
            id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
};

export default canonical;
