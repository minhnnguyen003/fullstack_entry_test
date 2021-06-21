let str = prompt("Nhập mảng 1, mỗi giá trị cách nhau 1 dấu phẩy (Ví dụ: 1,2,3):");
let arr1 = str.split(",");
let str2 = prompt("Nhập mảng 2, mỗi giá trị cách nhau 1 dấu phẩy (Ví dụ: 1,2,3):");
let arr2 = str2.split(",");


console.log(arr1);
console.log(arr2);

let i = 0;
for(; i <= arr1.length; i++)
{
    let duplicate = false;
    for(let j = 0; j < arr2.length; j++)
    {
        console.log(i, duplicate, arr1[i], arr2[j]);
        if(arr1[i] == arr2[j])
        {
            console.log(i, duplicate, arr1[i], arr2[j], "!=");
            arr2.splice(j, 1);
            duplicate = true
        }
    }

    console.log(i, duplicate, arr1, arr2);
    if(duplicate == true)
    {
        arr1.splice(i,1);
        i = 0;
    }
}

console.log('Results: ', arr1.concat(arr2));