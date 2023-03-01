export var blogArray = JSON.parse(localStorage.getItem('blogArray')) || [
    {
        title: 'First Blog',
        date: '2023-03-01',
        summary: 'This is the first blog post.'
    },
    {
        title: 'Second Blog',
        date: '2023-03-02',
        summary: 'This is the second blog post.'
    },
    {
        title: 'Third Blog',
        date: '2023-03-02',
        summary: 'This is the third blog post.'
    }
];