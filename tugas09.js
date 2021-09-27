function callObject() {
    let kampus = {
        nama: "UGM",
        jurusan: "kedokteran",
        materi: "biologi",
        tahun: 2021
    };

    for (let x in kampus) {
        console.log(kampus[x]);
    }
}

callObject();