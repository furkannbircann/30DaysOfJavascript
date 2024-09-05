/* JSON */

/*

JSON stands for JavaScript Object Notation. The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is
text or string only. JSON is a light weight data format for storing and transporting. JSON is mostly used when data is sent from a server to a
client. JSON is an easier-to-use alternative to XML.

*/

/* example

{
    "users": [
        {
            "name": "John",
            "age": 30,
            "city": "New York"
        },
        {
            "name": "Jane",
            "age": 25,
            "city": "San Francisco"
        }
    ]
}

*/

// Converting JSON to JavaScript Object
// JSON.parse()

let sampleJSON = `[
    {
        "name": "John",
        "age": 30,
        "city": "New York"
    },
    {
        "name": "Jane",
        "age": 25,
        "city": "San Francisco"
    }
]`;

let sampleObject = JSON.parse(sampleJSON, (key, value) => {
  return key === "name" ? value.toUpperCase() : value;
});
console.log(sampleObject);

// Converting JavaScript Object to JSON
// JSON.stringify()

let sampleObject2 = [
  {
    name: "John",
    age: 30,
    city: "New York",
  },
  {
    name: "Jane",
    age: 25,
    city: "San Francisco",
  },
];

let sampleJSON2 = JSON.stringify(sampleObject2, ["name", "age"], 4);
console.log(sampleJSON2);
