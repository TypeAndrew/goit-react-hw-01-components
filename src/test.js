
const tb = [
    { "id": "id-1", "label": ".docx", "percentage": 22 },
    { "id": "id-2", "label": ".pdf", "percentage": 4 },
    { "id": "id-3", "label": ".mp3", "percentage": 17 },
    { "id": "id-4", "label": ".psd", "percentage": 47 },
    { "id": "id-5", "label": ".pdf", "percentage": 10 }
];

const result = [];
let findValue;
tb.forEach((element, index, array) => {
    findValue = result.find(el => el.label === element.label);
    if (findValue === undefined) {
        result.push(element);
    } else {
        findValue.percentage += element.percentage;
    }
});




console.log(result);