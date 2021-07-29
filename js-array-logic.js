/// 1
function count(arr) {
    for (let i = 0;i<arr.length;i++) {
        if (typeof arr[i] !== 'number') {
            return 'Error, tipe data harus berupa number'
        } 
    }
    let count = 0;
    for (let i = 0;i<arr.length;i++) {
        count += arr[i];
    }
    return count;
}

/// 2
function reverse(arr) {
    for (let i = 0;i<arr.length;i++) {
        if (typeof arr[i] !== 'number') {
            return 'Error, tipe data harus number';
        }
    }
    let array = [];
    for (let i = 0; i<arr.length;i++) {
        let arrString = arr[i].toString();
        let reverseArray = '';
        for(let j=arrString.length - 1; j>= 0; j--) {
            reverseArray += arrString[j];
        }
        array.unshift(reverseArray * 1);
    }
    return array;
}

/// 3
function uniqueArray(array) {
    let uniqueArr = [];
    for (let i=0; i < array.length; i++) {
        let isSame = false;
        for (let j=0; j < uniqueArr.length; j++) {
            if (array[i] === uniqueArr[j]) {
                isSame = true;
            }
        }
        if(!isSame) {
            uniqueArr.push(array[i]);
        }
    }
    return uniqueArr;
}

/// 4
function jajanBoba(uangJajan) {
    function tambahTitik(uang) { 
        let hitunganTitik = 0;
        let uangTanpaTitik = uang.toString();
        let uangDenganTitik = "";
        for (let i=uangTanpaTitik.length - 1; i >= 0; i--) {
            uangDenganTitik = uangTanpaTitik[i] + uangDenganTitik
            hitunganTitik++;
            if (hitunganTitik === 3 && i !== 0) {
                uangDenganTitik = "." + uangDenganTitik;
                hitunganTitik = 0
            }
        }
        return uangDenganTitik;
    }
    const listBoba = [
        ['Xing Fu Tang', 38000], 
        ['OneZo', 53500],
        ['KOI The', 36000],
        ['Chatime', 25000],
        ['Kokumi', 42000],
        ['Bubble Station Milk', 13000]
    ];
    console.log(`David mulai jajan dengan uang jajan ${tambahTitik(uangJajan)} rupiah.`);
    for (let i=0; i < listBoba.length; i++) {
        if (uangJajan - listBoba[i][1] >= 0) {
            console.log(`Dengan uang ${tambahTitik(uangJajan)}, cukup untuk beli ${listBoba[i][0]},`);
            console.log(`setelah beli ${listBoba[i][0]} uangnya berkurang ${tambahTitik(listBoba[i][1])},`);
            uangJajan -= listBoba[i][1];
            console.log(`jadi uangnya sisa ${tambahTitik(uangJajan)}`);
        } else {
            console.log(`Dengan uang ${tambahTitik(uangJajan)}, tidak cukup untuk beli ${listBoba[i][0]}.`);
        }
    }
    console.log(`David pulang dengan sisa uang jajan ${tambahTitik(uangJajan)}.`);
}

/// 5 Bonus
function searchSameArray(arr1, arr2) {
    let sameArray = [];
    for (let i=0; i < arr1.length; i++) {
        let isSame = false;
        for (let j=0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                isSame = true;
            }
        }
        if (isSame) {
            sameArray.push(arr1[i]);
        }
    }
    return sameArray;
}

/// 6 Bonus
function printBranch(branches) {
    let month  = ['   ','jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    let lineSeparated = " | ";
    let arrBranches = [];
    let counter1 = 0;
    while (counter1 < branches.length) {
        let counter2 = 0;
        let arrBranch = []
        while (counter2 < month.length) {
            arrBranch.push(branches[counter1][0][counter2] - branches[counter1][1][counter2]);
            counter2++;
        }
        arrBranch.unshift("br " + (counter1 + 1))
        arrBranches.push(arrBranch);
        counter1++;
    }
    function formatData(index) {
        let result = "";
        for (let i=0; i < arrBranches.length; i++) {
            let data = Array.isArray(arrBranches[i][index]) ? arrBranches[i][index] : arrBranches[i][index].toString();
            result += (data.length === 4 ? data : data + " ") + lineSeparated;
        }
        return result;
    }
    for (let i=0; i < month.length; i++) {
        console.log(month[i] + lineSeparated + formatData(i));
    }
}