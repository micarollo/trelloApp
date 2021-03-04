const cards = [
    {
        id: 'card-1',
        content: 'Contenido 1',
    },
    {
        id: 'card-2',
        content: 'Contenido 2',
    },
    {
        id: 'card-3',
        content: 'Contenido 3',
    },
];

const data = {
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'To do',
            cards,
        },
        'list-2': {
            id: 'list-2',
            title: 'Doing',
            cards: [],
        },
    },
    listsIds: ['list-1', 'list-2']
}

export default data;