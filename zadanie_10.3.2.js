let value = [];
switch (typeof value) {
    case 'number':
        console.log('Number');
        break;
    case 'string':
        console.log('String');
        break;
    case 'boolean':
        console.log('Boolean');
        break;
    default:
        console.log('I don\'t know what this!');
}