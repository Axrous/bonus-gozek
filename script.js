//mengambil value dari form
//apabila tombol check di klik
const button = document.querySelector(".btn");
const getData = button.addEventListener("click", () => {
    //mengambil nama driver
    const nama = document.querySelector(".name").value;

    //mengambil rata" point minggu 1 & menampilkan hari mendapatkan poin
    let minggu1 = document.querySelectorAll(".poin1");
    let point1 = hitungPoin(getSpecData(minggu1))[0];
    document.querySelector(".point1").innerHTML = `Minggu 1 : ${point1}`;
    
    let hasil1 = akhirBonus(hitungPoin(getSpecData(minggu1))[1]);
    document.querySelector(".hasil1").innerHTML = `Minggu 1 : ${hasil1}`;

    //mengambil rata" point minggu 1 & menampilkan hari mendapatkan poin
    let minggu2 = document.querySelectorAll(".poin2");
    let point2 = hitungPoin(getSpecData(minggu2))[0];
    document.querySelector(".point2").innerHTML = `Minggu 2 : ${point2}`;
    
    let hasil2 = akhirBonus(hitungPoin(getSpecData(minggu2))[1]);
    document.querySelector(".hasil2").innerHTML = `Minggu 2 : ${hasil2}`;
})




let days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];

function getSpecData(qwe) {
    let point = [];
    let minggu = qwe;
    for (let i=0; i < minggu.length; i++) {
        let x = parseInt(minggu[i].value);
        point.push(x);
    };

    return point;
}

function hitungPoin(poin) {
    let sum = poin.reduce((acc, current) => {
        return acc + current;
    })
    let rataPoint = sum/5;

    let found = poin.reduce((acc, curr, index) => {
        if(curr >= Math.floor(rataPoint)) {
            acc.push(index);
        }
        return acc;
    }, []);

    return [rataPoint, found];
}

function akhirBonus(hasil) {
    let akhir = []
    for(let i=0;i<hasil.length;i++) {
        akhir.push(days[hasil[i]]);
    };
    return akhir;
}

