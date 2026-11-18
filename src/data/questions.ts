import type { PhysicsQuestion } from '../types/quiz';

export const PHYSICS_QUESTIONS: PhysicsQuestion[] = [
  {
    id: 1,
    kind: 'pg',
    kindLabel: 'Pilihan Ganda',
    topic: 'Katrol Bermassa dengan Satu Beban',
    maxScore: 10,
    stimulusTitle: 'Sistem Katrol Cakram Pejal dan Beban Tunggal',
    stimulusText:
      'Sebuah katrol berbentuk cakram pejal homogen bermassa $M = 4\\text{ kg}$ dan jari-jari $R = 0{,}2\\text{ m}$ ($I = \\frac{1}{2}MR^2$) dipasang pada poros tetap yang licin sempurna. Seutas tali ringan dililitkan pada keliling katrol dan ujung bebasnya digantungi beban bermassa $m = 3\\text{ kg}$. Sistem dilepaskan dari keadaan diam sehingga tali terurai tanpa slip pada permukaan katrol. Gunakan percepatan gravitasi $g = 10\\text{ m/s}^2$.',
    dataTable: [
      { label: 'Massa katrol ($M$)', value: '$4\\text{ kg}$' },
      { label: 'Jari-jari katrol ($R$)', value: '$0{,}2\\text{ m}$' },
      { label: 'Momen inersia katrol ($I$)', value: '$\\frac{1}{2}MR^2$' },
      { label: 'Massa beban ($m$)', value: '$3\\text{ kg}$' },
      { label: 'Percepatan gravitasi ($g$)', value: '$10\\text{ m/s}^2$' },
    ],
    prompt:
      'Berdasarkan penerapan Hukum Newton II gerak translasi dan gerak rotasi secara simultan, pernyataan manakah yang paling tepat mengenai besar tegangan tali $T$, percepatan sudut katrol $\\alpha$, dan pengaruh momen inersia katrol terhadap gerak beban?',
    options: [
      {
        id: 'A',
        label: 'A',
        text: '$T = 12\\text{ N}$ dan $\\alpha = 30\\text{ rad/s}^2$; momen inersia katrol menyebabkan percepatan turun beban lebih kecil dari $g$',
      },
      {
        id: 'B',
        label: 'B',
        text: '$T = 30\\text{ N}$ dan $\\alpha = 50\\text{ rad/s}^2$; momen inersia katrol memperbesar tegangan tali melebihi berat beban',
      },
      {
        id: 'C',
        label: 'C',
        text: '$T = 15\\text{ N}$ dan $\\alpha = 25\\text{ rad/s}^2$; momen inersia katrol tidak memengaruhi percepatan linear beban',
      },
      {
        id: 'D',
        label: 'D',
        text: '$T = 12\\text{ N}$ dan $\\alpha = 15\\text{ rad/s}^2$; percepatan linear beban sama dengan percepatan gravitasi $g$',
      },
      {
        id: 'E',
        label: 'E',
        text: '$T = 20\\text{ N}$ dan $\\alpha = 30\\text{ rad/s}^2$; semakin besar massa katrol maka semakin besar percepatan sudutnya',
      },
    ],
    speechSummary:
      'Soal 1, Pilihan Ganda. Sistem katrol cakram pejal dan beban tunggal. Sebuah katrol cakram pejal bermassa 4 kilogram dan jari-jari 0,2 meter dengan momen inersia setengah M R kuadrat dipasang pada poros tetap yang licin. Tali ringan dililitkan pada keliling katrol dan digantungi beban 3 kilogram. Sistem dilepaskan dari diam tanpa slip, dengan g sama dengan 10 meter per sekon kuadrat. Tentukan besar tegangan tali T, percepatan sudut katrol alfa, dan pengaruh momen inersia katrol terhadap gerak beban.',
  },
  {
    id: 2,
    kind: 'pg',
    kindLabel: 'Pilihan Ganda',
    topic: 'Sistem Atwood dengan Katrol Bermassa',
    maxScore: 10,
    stimulusTitle: 'Pesawat Atwood dengan Katrol Silinder Pejal',
    stimulusText:
      'Dua beban masing-masing bermassa $m_1 = 2\\text{ kg}$ (di sisi kiri) dan $m_2 = 6\\text{ kg}$ (di sisi kanan) dihubungkan oleh seutas tali ringan melalui sebuah katrol berbentuk silinder pejal bermassa $M = 4\\text{ kg}$ dan berjari-jari $R = 0{,}25\\text{ m}$ ($I = \\frac{1}{2}MR^2$). Poros katrol tetap, gesekan pada poros diabaikan, dan tali tidak mengalami slip terhadap permukaan katrol. Percepatan gravitasi $g = 10\\text{ m/s}^2$.',
    dataTable: [
      { label: 'Beban kiri ($m_1$)', value: '$2\\text{ kg}$' },
      { label: 'Beban kanan ($m_2$)', value: '$6\\text{ kg}$' },
      { label: 'Massa katrol ($M$)', value: '$4\\text{ kg}$' },
      { label: 'Jari-jari katrol ($R$)', value: '$0{,}25\\text{ m}$' },
      { label: 'Percepatan gravitasi ($g$)', value: '$10\\text{ m/s}^2$' },
    ],
    prompt:
      'Ketika kedua beban dilepaskan dari keadaan diam, gaya berat beban kanan memutar katrol akibat perbedaan tegangan tali di sisi kanan ($T_2$) dan sisi kiri ($T_1$). Berapakah selisih tegangan tali $(T_2 - T_1)$ dan besar percepatan sudut katrol $\\alpha$?',
    options: [
      {
        id: 'A',
        label: 'A',
        text: '$T_2 - T_1 = 0\\text{ N}$ dan $\\alpha = 20\\text{ rad/s}^2$',
      },
      {
        id: 'B',
        label: 'B',
        text: '$T_2 - T_1 = 8\\text{ N}$ dan $\\alpha = 16\\text{ rad/s}^2$',
      },
      {
        id: 'C',
        label: 'C',
        text: '$T_2 - T_1 = 10\\text{ N}$ dan $\\alpha = 20\\text{ rad/s}^2$',
      },
      {
        id: 'D',
        label: 'D',
        text: '$T_2 - T_1 = 12\\text{ N}$ dan $\\alpha = 16\\text{ rad/s}^2$',
      },
      {
        id: 'E',
        label: 'E',
        text: '$T_2 - T_1 = 8\\text{ N}$ dan $\\alpha = 12\\text{ rad/s}^2$',
      },
    ],
    speechSummary:
      'Soal 2, Pilihan Ganda. Pesawat Atwood dengan katrol bermassa. Beban kiri bermassa 2 kilogram dan beban kanan bermassa 6 kilogram dihubungkan tali ringan melalui katrol silinder pejal bermassa 4 kilogram dan jari-jari 0,25 meter tanpa slip, g sama dengan 10 meter per sekon kuadrat. Hitunglah selisih tegangan tali kanan dan kiri, serta percepatan sudut katrol alfa.',
  },
  {
    id: 3,
    kind: 'pg_complex',
    kindLabel: 'Pilihan Ganda Kompleks',
    topic: 'Menggelinding Tanpa Slip — Gaya pada Tepi Atas',
    maxScore: 10,
    stimulusTitle: 'Silinder Pejal Ditarik Horizontal pada Tepi Atas',
    stimulusText:
      'Sebuah silinder pejal homogen bermassa $m = 6\\text{ kg}$ dan jari-jari $R = 0{,}2\\text{ m}$ ($I = \\frac{1}{2}mR^2$) berada di atas lantai horizontal kasar dengan koefisien gesek statis $\\mu_s = 0{,}25$. Gaya horizontal konstan sebesar $F = 18\\text{ N}$ berarah ke kanan dikerjakan tepat di titik tepi paling atas silinder (berjarak $R$ di atas pusat massa). Diketahui silinder bergerak ke kanan dan menggelinding tanpa slip, dengan $g = 10\\text{ m/s}^2$.',
    dataTable: [
      { label: 'Massa silinder ($m$)', value: '$6\\text{ kg}$' },
      { label: 'Jari-jari ($R$)', value: '$0{,}2\\text{ m}$' },
      { label: 'Gaya horizontal di tepi atas ($F$)', value: '$18\\text{ N}$' },
      { label: 'Koefisien gesek statis ($\\mu_s$)', value: '$0{,}25$' },
      { label: 'Percepatan gravitasi ($g$)', value: '$10\\text{ m/s}^2$' },
    ],
    prompt:
      'Pilihlah seluruh pernyataan di bawah ini yang BENAR berdasarkan analisis Hukum Newton II translasi dan rotasi (penilaian tepat seluruhnya tanpa skor parsial):',
    options: [
      {
        id: '1',
        label: '1',
        text: 'Gaya gesek statis yang bekerja pada titik kontak lantai berarah ke kanan (searah dengan gaya $F$).',
      },
      {
        id: '2',
        label: '2',
        text: 'Besar gaya gesek statis yang diperlukan agar silinder menggelinding tanpa slip adalah $6\\text{ N}$.',
      },
      {
        id: '3',
        label: '3',
        text: 'Percepatan linear pusat massa silinder sebesar $3\\text{ m/s}^2$ dan percepatan sudutnya $15\\text{ rad/s}^2$.',
      },
      {
        id: '4',
        label: '4',
        text: 'Torsi yang dihasilkan gaya gesek statis terhadap pusat massa berlawanan arah dengan torsi gaya $F$.',
      },
      {
        id: '5',
        label: '5',
        text: 'Silinder pasti mengalami slip karena gaya $F = 18\\text{ N}$ lebih besar daripada gaya gesek statis maksimum $f_{s,\\text{maks}} = 15\\text{ N}$.',
      },
    ],
    speechSummary:
      'Soal 3, Pilihan Ganda Kompleks. Sebuah silinder pejal bermassa 6 kilogram dan jari-jari 0,2 meter berada di lantai horizontal kasar dengan koefisien gesek statis 0,25. Gaya horizontal 18 newton ke kanan bekerja tepat di tepi paling atas silinder. Pilihlah seluruh pernyataan yang benar dari lima pernyataan berikut.',
  },
  {
    id: 4,
    kind: 'pg_complex',
    kindLabel: 'Pilihan Ganda Kompleks',
    topic: 'Menggelinding Tanpa Slip — Gaya Melalui Poros',
    maxScore: 10,
    stimulusTitle: 'Silinder Pejal Ditarik Horizontal Melalui Poros',
    stimulusText:
      'Sebuah silinder pejal homogen yang identik dengan kasus sebelumnya ($m = 6\\text{ kg}$, $R = 0{,}2\\text{ m}$, $I = \\frac{1}{2}mR^2$) terletak di atas lantai horizontal kasar dengan $\\mu_s = 0{,}25$ dan $g = 10\\text{ m/s}^2$. Kali ini, gaya horizontal konstan $F = 18\\text{ N}$ ke arah kanan ditarik tepat melalui poros atau pusat massa silinder sehingga silinder bergerak menggelinding tanpa slip.',
    dataTable: [
      { label: 'Massa silinder ($m$)', value: '$6\\text{ kg}$' },
      { label: 'Jari-jari ($R$)', value: '$0{,}2\\text{ m}$' },
      { label: 'Gaya melalui poros ($F$)', value: '$18\\text{ N}$' },
      { label: 'Koefisien gesek statis ($\\mu_s$)', value: '$0{,}25$' },
      { label: 'Percepatan gravitasi ($g$)', value: '$10\\text{ m/s}^2$' },
    ],
    prompt:
      'Pilihlah seluruh pernyataan di bawah ini yang BENAR mengenai dinamika gerak silinder ketika gaya bekerja melalui porosnya (penilaian tepat seluruhnya tanpa skor parsial):',
    options: [
      {
        id: '1',
        label: '1',
        text: 'Garis kerja gaya $F$ melalui pusat massa sehingga gaya $F$ tidak memberikan torsi terhadap pusat massa.',
      },
      {
        id: '2',
        label: '2',
        text: 'Gaya gesek statis berarah ke kiri (berlawanan dengan gaya $F$) dan berfungsi memberikan torsi agar silinder berotasi.',
      },
      {
        id: '3',
        label: '3',
        text: 'Percepatan linear pusat massa silinder bernilai $2\\text{ m/s}^2$ dengan percepatan sudut $10\\text{ rad/s}^2$.',
      },
      {
        id: '4',
        label: '4',
        text: 'Gaya gesek statis bernilai nol karena tidak ada gerak relatif antara titik kontak roda dan lantai.',
      },
      {
        id: '5',
        label: '5',
        text: 'Untuk besar gaya $F$ yang sama, tarikan melalui poros menghasilkan percepatan pusat massa lebih besar daripada tarikan di tepi atas silinder.',
      },
    ],
    speechSummary:
      'Soal 4, Pilihan Ganda Kompleks. Silinder pejal bermassa 6 kilogram dan jari-jari 0,2 meter berada di lantai horizontal kasar dengan koefisien gesek statis 0,25. Kali ini gaya 18 newton ke kanan bekerja tepat melalui poros atau pusat massa silinder. Pilihlah seluruh pernyataan yang benar.',
  },
  {
    id: 5,
    kind: 'true_false',
    kindLabel: 'Benar / Salah (4 Pernyataan)',
    topic: 'Perlombaan Benda Menggelinding pada Bidang Miring',
    maxScore: 10,
    stimulusTitle: 'Perlombaan Empat Benda Menggelinding Menuruni Bidang Miring',
    stimulusText:
      'Dalam suatu eksperimen kelas Fisika, empat benda berdimensi luar sama ($R = 0{,}1\\text{ m}$) dan bermassa sama ($m = 2\\text{ kg}$) dilepaskan secara bersamaan dari keadaan diam di puncak bidang miring kasar pada ketinggian $h = 2{,}8\\text{ m}$ dengan sudut kemiringan $\\theta = 30^\\circ$ ($g = 10\\text{ m/s}^2$). Keempat benda menggelinding tanpa slip menuju garis finis yang sama di dasar bidang miring.',
    dataTable: [
      { label: 'Benda 1: Bola pejal', value: '$I = \\frac{2}{5}mR^2 \\;(k = 0{,}40)$' },
      { label: 'Benda 2: Silinder pejal', value: '$I = \\frac{1}{2}mR^2 \\;(k = 0{,}50)$' },
      { label: 'Benda 3: Bola berongga tipis', value: '$I = \\frac{2}{3}mR^2 \\;(k \\approx 0{,}67)$' },
      { label: 'Benda 4: Cincin tipis', value: '$I = mR^2 \\;(k = 1{,}00)$' },
    ],
    prompt:
      'Tentukan apakah masing-masing dari 4 pernyataan berikut BENAR atau SALAH (Benar: +2,5 poin; Salah: -1 poin; Tidak dijawab: 0 poin):',
    statements: [
      {
        id: '1',
        text: 'Bola pejal mencapai garis finis paling dahulu karena memiliki faktor momen inersia terkecil ($k = \\frac{2}{5}$) sehingga percepatan translasinya paling besar.',
      },
      {
        id: '2',
        text: 'Di dasar bidang miring, cincin tipis memiliki energi kinetik total yang lebih kecil daripada bola pejal meskipun massa dan ketinggian awalnya sama.',
      },
      {
        id: '3',
        text: 'Waktu tempuh silinder pejal untuk mencapai garis finis lebih singkat dibandingkan waktu tempuh bola berongga tipis.',
      },
      {
        id: '4',
        text: 'Apabila massa dan jari-jari keempat benda sama-sama digandakan menjadi $2m$ dan $2R$ tanpa mengubah bentuknya, urutan kedatangan benda di garis finis akan berubah.',
      },
    ],
    speechSummary:
      'Soal 5, Benar atau Salah. Empat benda bermassa sama 2 kilogram dan berjari-jari sama 0,1 meter, yaitu bola pejal, silinder pejal, bola berongga tipis, dan cincin tipis, dilepaskan bersamaan dari puncak bidang miring bersudut 30 derajat pada ketinggian 2,8 meter tanpa slip. Tentukan nilai kebenaran dari empat pernyataan yang diberikan.',
  },
  {
    id: 6,
    kind: 'numeric',
    kindLabel: 'Isian Singkat Matematis',
    topic: 'Silinder Menaiki Bidang Miring dengan Tarikan Poros',
    maxScore: 10,
    stimulusTitle: 'Silinder Pejal Ditarik Menaiki Bidang Miring Kasar',
    stimulusText:
      'Sebuah silinder pejal homogen bermassa $m = 4\\text{ kg}$ dan jari-jari $R = 0{,}2\\text{ m}$ ($I = \\frac{1}{2}mR^2$) terletak pada sebuah bidang miring kasar dengan sudut kemiringan $\\theta = 30^\\circ$ ($\\sin 30^\\circ = 0{,}5$). Seutas tali diikatkan pada poros silinder dan ditarik dengan gaya konstan $F = 38\\text{ N}$ sejajar bidang miring mengarah ke atas bidang. Silinder bergerak menaiki bidang miring dan menggelinding tanpa slip. Diketahui $\\mu_s = 0{,}4$ dan $g = 10\\text{ m/s}^2$.',
    dataTable: [
      { label: 'Massa silinder ($m$)', value: '$4\\text{ kg}$' },
      { label: 'Jari-jari ($R$)', value: '$0{,}2\\text{ m}$' },
      { label: 'Sudut bidang miring ($\\theta$)', value: '$30^\\circ\\;(\\sin 30^\\circ = 0{,}5)$' },
      { label: 'Gaya tarik poros ke atas ($F$)', value: '$38\\text{ N}$' },
      { label: 'Koefisien gesek statis ($\\mu_s$)', value: '$0{,}4$' },
      { label: 'Percepatan gravitasi ($g$)', value: '$10\\text{ m/s}^2$' },
    ],
    prompt:
      'Hitunglah besar percepatan linear pusat massa silinder saat bergerak menaiki bidang miring tersebut!',
    unit: 'm/s²',
    inputPlaceholder: 'Contoh: 12.5',
    tutorial: {
      rules: [
        'Masukkan jawaban hanya berupa angka tanpa menuliskan satuan (satuan m/s² sudah tertera di samping kolom).',
        'Gunakan tanda titik (.) sebagai pemisah desimal jika hasil berupa bilangan desimal.',
        'Jangan gunakan tanda koma (,) sebagai pemisah desimal maupun pemisah ribuan.',
        'Jangan memasukkan simbol matematika atau spasi tambahan.',
      ],
      neutralExample:
        'Jika hasil hitungan adalah dua belas koma lima meter per sekon kuadrat, ketik 12.5 (bukan 12,5 m/s²).',
    },
    speechSummary:
      'Soal 6, Isian Singkat Matematis. Sebuah silinder pejal bermassa 4 kilogram dan jari-jari 0,2 meter berada pada bidang miring kasar bersudut 30 derajat. Tali di poros silinder ditarik gaya konstan 38 newton sejajar bidang miring ke atas sehingga silinder menggelinding menaiki bidang miring tanpa slip, dengan g sama dengan 10 meter per sekon kuadrat. Hitunglah besar percepatan linear pusat massa silinder dalam meter per sekon kuadrat.',
  },
  {
    id: 7,
    kind: 'numeric',
    kindLabel: 'Isian Singkat Matematis',
    topic: 'Bola Berongga Menuruni Bidang Miring',
    maxScore: 10,
    stimulusTitle: 'Gerak Menggelinding Bola Berongga Tipis di Bidang Miring',
    stimulusText:
      'Sebuah bola berongga tipis bermassa $m = 3\\text{ kg}$ dan jari-jari $R = 0{,}25\\text{ m}$ ($I = \\frac{2}{3}mR^2$) dilepaskan dari keadaan diam di puncak suatu bidang miring kasar yang memiliki sudut kemiringan $\\theta = 37^\\circ$ ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$). Bola menggelinding menuruni bidang miring tanpa slip tanpa gaya luar tambahan. Diketahui $\\mu_s = 0{,}4$ dan $g = 10\\text{ m/s}^2$.',
    dataTable: [
      { label: 'Massa bola berongga ($m$)', value: '$3\\text{ kg}$' },
      { label: 'Jari-jari ($R$)', value: '$0{,}25\\text{ m}$' },
      { label: 'Momen inersia ($I$)', value: '$\\frac{2}{3}mR^2$' },
      { label: 'Sudut bidang ($\\theta$)', value: '$37^\\circ\\;(\\sin 37^\\circ = 0{,}6;\\;\\cos 37^\\circ = 0{,}8)$' },
      { label: 'Koefisien gesek statis ($\\mu_s$)', value: '$0{,}4$' },
      { label: 'Percepatan gravitasi ($g$)', value: '$10\\text{ m/s}^2$' },
    ],
    prompt:
      'Hitunglah besar percepatan sudut ($\\alpha$) bola berongga tipis tersebut selama menuruni bidang miring!',
    unit: 'rad/s²',
    inputPlaceholder: 'Contoh: 12.5',
    tutorial: {
      rules: [
        'Masukkan jawaban hanya berupa angka tanpa menuliskan satuan (satuan rad/s² sudah tertera di samping kolom).',
        'Gunakan tanda titik (.) sebagai pemisah desimal.',
        'Jangan menggunakan tanda koma (,) atau simbol matematika lain.',
      ],
      neutralExample:
        'Jika hasil hitungan adalah dua belas koma lima radian per sekon kuadrat, ketik 12.5 (bukan 12,5 rad/s²).',
    },
    speechSummary:
      'Soal 7, Isian Singkat Matematis. Sebuah bola berongga tipis bermassa 3 kilogram dan jari-jari 0,25 meter dengan momen inersia dua per tiga M R kuadrat dilepaskan dari diam pada bidang miring kasar bersudut 37 derajat, sinus 37 derajat sama dengan 0,6, kosinus 37 derajat sama dengan 0,8, dan g sama dengan 10 meter per sekon kuadrat. Hitunglah besar percepatan sudut alfa bola berongga tersebut dalam radian per sekon kuadrat.',
  },
  {
    id: 8,
    kind: 'numeric',
    kindLabel: 'Isian Singkat Matematis',
    topic: 'Perbandingan Gerak Dua Benda Menggelinding',
    maxScore: 10,
    stimulusTitle: 'Analisis Perbandingan Lintasan Silinder Pejal dan Cincin Tipis',
    stimulusText:
      'Dua benda memiliki massa yang sama $m = 5\\text{ kg}$ dan jari-jari yang sama $R = 0{,}2\\text{ m}$, yaitu Benda A berbentuk silinder pejal ($I_A = \\frac{1}{2}mR^2$) dan Benda B berbentuk cincin tipis ($I_B = mR^2$). Keduanya dilepaskan secara bersamaan dari keadaan diam di puncak bidang miring kasar dengan panjang lintasan miring $L = 18\\text{ m}$ dan sudut kemiringan $\\theta = 37^\\circ$ ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$). Diketahui $\\mu_s = 0{,}5$ dan $g = 10\\text{ m/s}^2$ sehingga kedua benda menggelinding tanpa slip.',
    dataTable: [
      { label: 'Massa & jari-jari ($m, R$)', value: '$5\\text{ kg},\\; 0{,}2\\text{ m}$' },
      { label: 'Benda A (Silinder pejal)', value: '$I_A = \\frac{1}{2}mR^2$' },
      { label: 'Benda B (Cincin tipis)', value: '$I_B = mR^2$' },
      { label: 'Panjang lintasan miring ($L$)', value: '$18\\text{ m}$' },
      { label: 'Sudut bidang ($\\theta$)', value: '$37^\\circ\\;(\\sin 37^\\circ = 0{,}6;\\;\\cos 37^\\circ = 0{,}8)$' },
      { label: 'Percepatan gravitasi ($g$)', value: '$10\\text{ m/s}^2$' },
    ],
    prompt:
      'Pada saat Benda A (silinder pejal) tepat mencapai garis finis di dasar bidang miring, berapakah jarak ketertinggalan Benda B (cincin tipis) di belakang garis finis ($\\Delta s = L - s_B$)?',
    unit: 'm',
    inputPlaceholder: 'Contoh: 12.5',
    tutorial: {
      rules: [
        'Masukkan jawaban hanya berupa angka tanpa satuan (satuan m sudah ditampilkan di samping kolom).',
        'Gunakan titik (.) sebagai pemisah desimal.',
        'Jangan menuliskan tanda koma atau teks tambahan.',
      ],
      neutralExample:
        'Jika jarak ketertinggalan adalah dua koma empat meter, ketik 2.4 (bukan 2,4 m).',
    },
    speechSummary:
      'Soal 8, Isian Singkat Matematis. Dua benda bermassa sama 5 kilogram dan jari-jari 0,2 meter, yaitu silinder pejal A dan cincin tipis B, dilepaskan bersamaan dari puncak bidang miring sepanjang 18 meter bersudut 37 derajat tanpa slip, dengan g sama dengan 10 meter per sekon kuadrat. Saat silinder pejal A tepat mencapai garis finis di dasar bidang, berapa meter jarak ketertinggalan cincin tipis B dari garis finis?',
  },
  {
    id: 9,
    kind: 'numeric',
    kindLabel: 'Isian Singkat Matematis',
    topic: 'Gerak Menggelinding dan Batas Gesekan Statis',
    maxScore: 10,
    stimulusTitle: 'Evaluasi Kondisi Tanpa Slip pada Bola Pejal dengan Gaya di Tepi Atas',
    stimulusText:
      'Sebuah bola pejal homogen bermassa $m = 5\\text{ kg}$ dan jari-jari $R = 0{,}2\\text{ m}$ ($I = \\frac{2}{5}mR^2$) terletak di atas lantai horizontal kasar dengan koefisien gesek statis $\\mu_s = 0{,}24$. Sebuah gaya horizontal konstan $F = 21\\text{ N}$ berarah ke kanan diberikan tepat pada tepi paling atas bola pejal tersebut. Gunakan percepatan gravitasi $g = 10\\text{ m/s}^2$.',
    dataTable: [
      { label: 'Massa bola pejal ($m$)', value: '$5\\text{ kg}$' },
      { label: 'Jari-jari ($R$)', value: '$0{,}2\\text{ m}$' },
      { label: 'Momen inersia ($I$)', value: '$\\frac{2}{5}mR^2$' },
      { label: 'Gaya di tepi atas ($F$)', value: '$21\\text{ N}$' },
      { label: 'Koefisien gesek statis ($\\mu_s$)', value: '$0{,}24$' },
      { label: 'Percepatan gravitasi ($g$)', value: '$10\\text{ m/s}^2$' },
    ],
    prompt:
      'Untuk menguji apakah bola pejal dapat mempertahankan gerak menggelinding tanpa slip, hitunglah besar gaya gesek statis yang diperlukan ($f_s$) lalu tentukan nilai rasio perbandingan $\\dfrac{f_s}{f_{s,\\text{maks}}}$ dalam bentuk angka desimal!',
    unit: 'rasio (tanpa satuan)',
    inputPlaceholder: 'Contoh: 0.5',
    tutorial: {
      rules: [
        'Masukkan jawaban hanya berupa angka desimal rasio (tanpa tanda persen dan tanpa satuan).',
        'Gunakan titik (.) sebagai pemisah desimal.',
        'Jangan menuliskan pecahan seperti 3/4; ubahlah ke bentuk angka desimal.',
      ],
      neutralExample:
        'Jika hasil rasio adalah nol koma lima, ketik 0.5 (bukan 50% atau 1/2).',
    },
    speechSummary:
      'Soal 9, Isian Singkat Matematis. Sebuah bola pejal bermassa 5 kilogram dan jari-jari 0,2 meter berada di atas lantai horizontal kasar dengan koefisien gesek statis 0,24. Gaya horizontal 21 newton ke kanan diberikan tepat pada tepi atas bola, dengan g sama dengan 10 meter per sekon kuadrat. Hitunglah besar gaya gesek statis yang diperlukan f s, lalu tentukan nilai perbandingan f s dibagi f s maksimum dalam bentuk desimal.',
  },
  {
    id: 10,
    kind: 'numeric',
    kindLabel: 'Isian Singkat Matematis',
    topic: 'Kasus Lanjutan Lintasan Gabungan & Torsi Pengereman',
    maxScore: 10,
    stimulusTitle: 'Lintasan Bidang Miring Dilanjutkan Pengereman Poros di Bidang Datar',
    stimulusText:
      'Sebuah silinder pejal homogen bermassa $m = 4\\text{ kg}$ dan jari-jari $R = 0{,}2\\text{ m}$ ($I = \\frac{1}{2}mR^2$) dilepaskan dari keadaan diam pada ketinggian $h = 2{,}7\\text{ m}$ di puncak bidang miring kasar bersudut $\\theta = 30^\\circ$. Silinder menggelinding tanpa slip menuruni bidang miring dan melewati transisi lengkung mulus tanpa kehilangan energi menuju lintasan horizontal kasar ($\\mu_s = 0{,}4$). Tepat saat memasuki lintasan horizontal, sistem rem pada poros memberikan torsi pengereman konstan sebesar $\\tau_{\\text{rem}} = 3{,}6\\text{ N}\\cdot\\text{m}$ berlawanan arah putar silinder sehingga silinder melambat namun tetap menggelinding tanpa slip hingga berhenti. Gunakan $g = 10\\text{ m/s}^2$.',
    dataTable: [
      { label: 'Massa & jari-jari ($m, R$)', value: '$4\\text{ kg},\\; 0{,}2\\text{ m}$' },
      { label: 'Ketinggian awal ($h$)', value: '$2{,}7\\text{ m}$' },
      { label: 'Sudut bidang miring ($\\theta$)', value: '$30^\\circ$' },
      { label: 'Torsi pengereman poros ($\\tau_{\\text{rem}}$)', value: '$3{,}6\\text{ N}\\cdot\\text{m}$' },
      { label: 'Koefisien gesek statis ($\\mu_s$)', value: '$0{,}4$' },
      { label: 'Percepatan gravitasi ($g$)', value: '$10\\text{ m/s}^2$' },
    ],
    prompt:
      'Berdasarkan analisis gerak dua tahap (menuruni bidang miring lalu perlambatan rotasi-translasi di bidang datar), berapakah jarak mendatar yang ditempuh silinder pada lintasan horizontal hingga tepat berhenti?',
    unit: 'm',
    inputPlaceholder: 'Contoh: 12.5',
    tutorial: {
      rules: [
        'Masukkan jawaban hanya berupa angka tanpa satuan (satuan m sudah tertera di samping kolom).',
        'Gunakan titik (.) apabila terdapat angka desimal.',
        'Jangan menggunakan koma atau menuliskan satuan panjang.',
      ],
      neutralExample:
        'Jika jarak yang ditempuh adalah delapan koma lima meter, ketik 8.5 (bukan 8,5 m).',
    },
    speechSummary:
      'Soal 10, Isian Singkat Matematis. Sebuah silinder pejal bermassa 4 kilogram dan jari-jari 0,2 meter dilepaskan dari ketinggian 2,7 meter pada bidang miring 30 derajat tanpa slip, lalu masuk ke bidang horizontal kasar dengan koefisien gesek statis 0,4. Pada bidang horizontal, torsi pengereman konstan 3,6 newton meter bekerja pada poros silinder hingga berhenti tanpa slip, g sama dengan 10 meter per sekon kuadrat. Hitunglah jarak tempuh mendatar silinder pada bidang horizontal hingga berhenti dalam meter.',
  },
];
