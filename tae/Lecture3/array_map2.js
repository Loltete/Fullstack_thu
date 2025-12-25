const kvArray = [
    { key: 'a', value: 10 },
    { key: 'b', value: 20 },
]

const reformedArray = kvArray.map(
    ({ key, value }) => ({ [key]: value })
);
console.log(reformedArray);