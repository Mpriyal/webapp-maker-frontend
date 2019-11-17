/**
 * This is the sample canonical form.
 */
const URL = 'http://localhost:4000/api/user/5dc1ffd0e8bcb8621c4eab6b/project/5dd1b7197175cb72dcd16bb8';
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

export { canonical, URL };
