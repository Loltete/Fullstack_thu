const names = ['Taylor', 'Donald', 'Natasha'];

const announcedNames = names.map(member => {
    return member + ' joined the contest.';
});

const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
];

const reformattedArray = kvArray.map(({ key, value }) => {
    return { id: key, total: value };
});

console.log(announcedNames);
