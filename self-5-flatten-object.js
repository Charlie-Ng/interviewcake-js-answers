
var temp;
var flag = false;

function convertObjToString(obj, result) {
    
    for (var key in obj) {

        if(result[result.length - 1] === "," && result[result.length - 2] === "}") {

            temp = result.split('');
            temp[temp.length - 2] = "";
            result = temp.join('');
        }
    
        if(typeof obj[key] === "string") {

            result += key + ":" + obj[key] + "},";
        }
        else if(typeof obj[key] === "object") {
            
            result += key + ":{" ;
            result = convertObjToString(obj[key], result);
            result += "},";
        }
    }

    result = result.substring(0, result.length - 1);

    return result;
}
console.log(convertObjToString({"a": "apple", "b": "banana"}, "{"));
console.log(convertObjToString({"a": "apple", "b": {"b2": "kkk"}}, "{"));
console.log(convertObjToString({"a": "apple", "b": {"b1": {"b2": "kkk", "b22": "bbb", "b3": {"b3": "ccc"}}}, "c": "123"}, "{"));

// {a:apple,b:banana}
// {a:apple,b:{b2:kkk}}
// {a:apple,b:{b1:{b2:kkk,b22:bbb,b3:{b3:ccc}}},c:123}