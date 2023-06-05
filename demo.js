// let a = 11;

// if (a % 2 == 0) {
//     console.log(a + " là số chẵn");
// } else {
//     console.log(a + " không là số chẵn");
// }


// if (a % 2 == 0) {
//     console.log(a + " chia hết cho 2");
// } else if (a % 3 == 0) {
//     console.log(a + " chia hết cho 3");
// } else if (a % 5 == 0) {
//     console.log(a + " chia hết cho 5");
// }

let a = 21;

if (a % 2 == 0) {
    console.log(a + " chia hết cho 2");
    if( a % 7 == 0){
        console.log(a +" chia hết cho 7");
    }
}

if (a % 2 == 0 && a % 7 == 0){ //đồng thời
    console.log(a +" là bội số của 14");
}

// if (a % 3 == 0) {
//     console.log(a + " chia hết cho 3");
// }

// if (a % 5 == 0) {
//     console.log(a + " chia hết cho 5");
// }