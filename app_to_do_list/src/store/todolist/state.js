export default function(){
    return {
        todolists: [
            {
                "id" : 1,
                "name": "Liste n°1", 
                "todos": [{
                    "id": 1,
                    "name": "tache1",
                    "isCompleted": false,
                },
                {
                    "id": 2,
                    "name": "tache2",
                    "isCompleted": true,
                },
                {
                    "id": 3,
                    "name": "tache3",
                    "isCompleted": false,
                }]
            },
            {
                "id": 2,
                "name": "Liste n°2",
                "todos": [{
                    "id": 1,
                    "name": "tâche 1",
                    "isCompleted": true,
                }]
            }
    ]
    };
}